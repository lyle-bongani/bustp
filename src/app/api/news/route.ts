import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

function findImageUrl(item) {
    // 1. Try media:content
    if (item['media:content'] && item['media:content']['$'] && item['media:content']['$'].url) {
        return item['media:content']['$'].url;
    }
    // 2. Try enclosure
    if (item.enclosure && item.enclosure.url) {
        return item.enclosure.url;
    }
    // 3. Try first <img> in content:encoded
    if (item['content:encoded']) {
        const match = item['content:encoded'].match(/<img[^>]+src=["']([^"'>]+\.(jpg|jpeg|png|webp|gif))["']/i);
        if (match) return match[1];
    }
    // 4. Search all fields for an image URL
    const imageRegex = /(https?:[^"'\s>]+\.(jpg|jpeg|png|webp|gif))/i;
    for (const key in item) {
        if (typeof item[key] === 'string') {
            const match = item[key].match(imageRegex);
            if (match) return match[1];
        }
        if (typeof item[key] === 'object' && item[key] !== null) {
            const str = JSON.stringify(item[key]);
            const match = str.match(imageRegex);
            if (match) return match[1];
        }
    }
    return '';
}

export async function GET() {
    try {
        const parser = new Parser({
            customFields: {
                item: ['media:content', 'content:encoded', 'enclosure']
            }
        });
        const feed = await parser.parseURL('https://www.bustop.tv/feed/');
        const news = feed.items.slice(0, 8).map(item => {
            console.log('NEWS ITEM:', JSON.stringify(item, null, 2));
            const image = findImageUrl(item);
            return {
                title: item.title,
                summary: item.contentSnippet || '',
                image,
                date: item.pubDate,
                link: item.link,
            };
        });
        return NextResponse.json(news);
    } catch (err) {
        console.error('API ERROR:', err);
        return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 });
    }
} 