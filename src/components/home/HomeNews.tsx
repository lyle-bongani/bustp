"use client";

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export default function HomeNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          'https://api.feedrapp.info/api/v1/feed?url=https://www.bustop.tv/feed/'
        );
        const data = await res.json();
        if (!data.items) throw new Error('No news found');
        const newsItems: NewsItem[] = data.items.slice(0, 5).map((item: { title: string; link: string; pubDate?: string; date_published?: string; description?: string; summary?: string }) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate || item.date_published || '',
          description: item.description || item.summary || '',
        }));
        setNews(newsItems);
      } catch {
        setError('Failed to fetch news.');
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) {
    return <Box sx={{ py: 6, textAlign: 'center' }}><Typography>Loading latest news...</Typography></Box>;
  }
  if (error) {
    return <Box sx={{ py: 6, textAlign: 'center' }}><Typography color="error">{error}</Typography></Box>;
  }

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 0 }, background: '#fff', borderRadius: 4, boxShadow: '0 2px 12px #FFD70022', mb: 6 }}>
      <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', mb: 3, textAlign: 'center' }}>
        Latest News & Updates
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 900, mx: 'auto' }}>
        {news.map((item, idx) => (
          <Card key={idx} sx={{ boxShadow: '0 2px 8px #FFD70022', borderRadius: 3, background: '#fff' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#222', mb: 1 }}>
                <Link href={item.link} target="_blank" rel="noopener" sx={{ color: '#E30613', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  {item.title}
                </Link>
              </Typography>
              <Typography sx={{ fontFamily: 'Josefin Sans', color: '#666', fontSize: '0.98rem', mb: 1 }}>
                {item.pubDate ? new Date(item.pubDate).toLocaleDateString() : ''}
              </Typography>
              <Typography sx={{ fontFamily: 'Josefin Sans', color: '#222', fontSize: '1.05rem' }}>
                {item.description.replace(/<[^>]+>/g, '').slice(0, 180)}...
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}