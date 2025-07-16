"use client";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomeNews() {
    const [news, setNews] = useState<Array<{ title: string; summary: string; image: string; date: string; }>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/news')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch news');
                return res.json();
            })
            .then(setNews)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <section style={{ padding: '64px 0', background: '#fff', borderRadius: 24, margin: '32px 0', textAlign: 'center' }}><Typography>Loading latest news...</Typography></section>;
    }
    if (error || !news.length) {
        return <section style={{ padding: '64px 0', background: '#fff', borderRadius: 24, margin: '32px 0', textAlign: 'center' }}><Typography color="error">Could not load news. Please try again later.</Typography></section>;
    }

    // Use all news, with or without images
    // const newsWithImages = news.filter(item => item.image && !item.image.includes('placeholder'));
    // if (!newsWithImages.length) {
    //     return <section style={{ padding: '64px 0', background: '#fff', borderRadius: 24, margin: '32px 0', textAlign: 'center' }}><Typography>No news with images available at this time.</Typography></section>;
    // }

    return (
        <section style={{ padding: '96px 0 64px 0', background: '#fff', borderRadius: 24, margin: '32px 0' }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2.2rem', md: '2.5rem' }, color: '#E30613', mb: 1, textAlign: 'center', letterSpacing: 1 }}>
                    Latest News & Updates
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.15rem', color: '#222', mb: 4, maxWidth: 700, mx: 'auto', textAlign: 'center' }}>
                    Stay up to date with the latest stories, headlines, and happenings from Bustop TV and beyond.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#E30613', letterSpacing: 1 }}>
                        WHAT&apos;S HAPPENING
                    </Typography>
                    <Button href="https://bustop.tv" target="_blank" rel="noopener noreferrer" variant="contained" sx={{ background: '#E30613', color: '#fff', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', boxShadow: 'none', '&:hover': { background: '#FFD600', color: '#232526' } }}>
                        See More News
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                    <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '70%' } }}>
                        {news[0] && (
                            <Card sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', height: { xs: 400, md: 500 }, minHeight: 400, boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
                                <Box sx={{ position: 'relative', width: '100%', height: { xs: 400, md: 500 }, minHeight: 400 }}>
                                    {news[0].image ? (
                                        <Image src={news[0].image} alt={news[0].title || 'News image'} width={800} height={500} style={{ objectFit: 'cover', zIndex: 1, width: '100%', height: '100%' }} />
                                    ) : (
                                        <Box sx={{ width: '100%', height: '100%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography sx={{ color: '#aaa', fontFamily: 'Josefin Sans' }}>No image available</Typography>
                                        </Box>
                                    )}
                                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.85) 100%)', zIndex: 2 }} />
                                    <Box sx={{ position: 'absolute', left: 0, bottom: 0, p: 3, zIndex: 3 }}>
                                        <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#fff', mb: 1, textShadow: '0 2px 8px #000' }}>
                                            {news[0].title}
                                        </Typography>
                                        <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1rem', color: '#fff', opacity: 0.9, textShadow: '0 1px 4px #000' }}>
                                            {news[0].summary}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        )}
                    </Box>
                    <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '30%' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                            {news.slice(1, 4).map((item, idx) => (
                                <Card key={idx} sx={{ display: 'flex', alignItems: 'center', borderRadius: 3, background: 'rgba(227,6,19,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', p: 1, minHeight: 90 }}>
                                    <Box sx={{ width: 64, height: 64, borderRadius: 2, overflow: 'hidden', mr: 2, flexShrink: 0 }}>
                                        {item.image ? (
                                            <Image src={item.image} alt={item.title} width={64} height={64} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                        ) : (
                                            <Box sx={{ width: 64, height: 64, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Typography sx={{ color: '#aaa', fontFamily: 'Josefin Sans', fontSize: 12 }}>No image</Typography>
                                            </Box>
                                        )}
                                    </Box>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 600, fontSize: '1rem', color: '#E30613', mb: 0.5, lineHeight: 1.2 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '0.92rem', color: '#222', opacity: 0.85 }}>
                                            {item.date}
                                        </Typography>
                                    </Box>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    );
} 