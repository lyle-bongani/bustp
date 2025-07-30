"use client";

import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MovieIcon from '@mui/icons-material/Movie';
import GroupsIcon from '@mui/icons-material/Groups';
import CampaignIcon from '@mui/icons-material/Campaign';
import Box from '@mui/material/Box';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MicIcon from '@mui/icons-material/Mic';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import GavelIcon from '@mui/icons-material/Gavel';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState, useEffect } from 'react';
import RadioIcon from '@mui/icons-material/Radio';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const programs = [
    {
        icon: <LocalMoviesIcon sx={{ fontSize: 40, color: '#E30613' }} />,
        title: 'Short Films',
        desc: 'Creative storytelling through short films that capture the essence of Zimbabwean life, culture, and experiences.'
    },
    {
        icon: <MicIcon sx={{ fontSize: 40, color: '#FFD600' }} />,
        title: 'Podcast',
        desc: 'In-depth conversations and discussions on current affairs, social issues, and Zimbabwean culture.'
    },
    {
        icon: <GroupsIcon sx={{ fontSize: 40, color: '#E30613' }} />,
        title: "People's Bustop Show",
        desc: 'Interactive shows that connect with the community and share real stories from everyday Zimbabweans.'
    },
    {
        icon: <GavelIcon sx={{ fontSize: 40, color: '#FFD600' }} />,
        title: 'Traditional Courts',
        desc: 'Exploring the intersection of traditional justice and modern society in contemporary Zimbabwean life.'
    },
    {
        icon: <RadioIcon sx={{ fontSize: 40, color: '#E30613' }} />,
        title: 'Radio Dramas',
        desc: 'Engaging audio dramas that bring stories to life through compelling narratives and sound design.'
    },
    {
        icon: <VideoLibraryIcon sx={{ fontSize: 40, color: '#FFD600' }} />,
        title: 'Documentary',
        desc: 'Real stories from real people. Our documentaries capture authentic voices and experiences of Zimbabweans.'
    },
    {
        icon: <EmojiEmotionsIcon sx={{ fontSize: 40, color: '#E30613' }} />,
        title: 'Skits',
        desc: 'Humor that hits close to home. Our comedy skits use satire and wit to comment on everyday life.'
    },
    {
        icon: <PhotoCameraIcon sx={{ fontSize: 40, color: '#FFD600' }} />,
        title: 'Photography Work',
        desc: 'Visual storytelling through compelling photography that captures the beauty and reality of Zimbabwe.'
    },
    {
        icon: <LiveTvIcon sx={{ fontSize: 40, color: '#E30613' }} />,
        title: 'Web Series',
        desc: 'Episodic content that keeps you coming back for more. Explore various themes through engaging storytelling.'
    },
    {
        icon: <NewspaperIcon sx={{ fontSize: 40, color: '#FFD600' }} />,
        title: 'BustopTV News',
        desc: 'News with a difference. Our satirical news program delivers current events with humor and wit.'
    }
];

const featuredVideos = [
    {
        id: "aE2LbS7Jmwc",
        title: "Short Film",
        category: "Short Films",
        description: "Creative storytelling through short films"
    },
    {
        id: "0DbK5I39Rwg",
        title: "Podcast Episode",
        category: "Podcasts",
        description: "In-depth conversations on current affairs"
    },
    {
        id: "Hn8Ir4URY8M",
        title: "Documentary",
        category: "Documentaries",
        description: "Real stories from real people"
    },
    {
        id: "WaGR0r95_jo",
        title: "Comedy Skit",
        category: "Comedy Skits",
        description: "Humor that hits close to home"
    },
    {
        id: "UExj4EDDAeU",
        title: "The Peoples Bus",
        category: "The Peoples Bus",
        description: "Stories from the streets of Zimbabwe"
    },
    {
        id: "GjIRvADGXco",
        title: "BustopTV News",
        category: "BustopTV News",
        description: "News with a comedic twist"
    }
];

export default function HomePrograms() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const itemsPerSlide = 4;
    const totalSlides = Math.ceil(programs.length / itemsPerSlide);

    // Auto-slide functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                if (prev === totalSlides - 1) {
                    return 0; // Loop back to first slide
                }
                return prev + 1;
            });
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval);
    }, [isPaused, totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => {
            if (prev === totalSlides - 1) {
                return 0; // Loop back to first slide
            }
            return prev + 1;
        });
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => {
            if (prev === 0) {
                return totalSlides - 1; // Loop to last slide
            }
            return prev - 1;
        });
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <section style={{ padding: '64px 0', background: '#fff', textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#E30613', mb: 2 }}>
                Our Programs
            </Typography>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.15rem', color: '#222', mb: 4, maxWidth: 700, mx: 'auto' }}>
                Explore our diverse range of programs and shows that entertain, educate, and inspire audiences across Zimbabwe and beyond.
            </Typography>
            
            {/* Program Categories Carousel */}
            <Box 
                sx={{ maxWidth: 1200, mx: 'auto', px: 2, mb: 6, position: 'relative' }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <IconButton 
                        onClick={prevSlide}
                        sx={{ 
                            color: '#E30613', 
                            '&:hover': { backgroundColor: 'rgba(227, 6, 19, 0.1)' },
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                    
                    <Box sx={{ flex: 1, overflow: 'hidden' }}>
                        <Box sx={{ 
                            display: 'flex', 
                            transition: 'transform 0.3s ease-in-out',
                            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                            gap: 3
                        }}>
                            {programs.map((prog, idx) => (
                                <Box key={idx} sx={{ 
                                    flex: `0 0 ${100 / itemsPerSlide}%`,
                                    px: 1.5,
                                    maxWidth: { xs: '280px', md: '250px' },
                                    minWidth: { xs: '250px', md: '220px' }
                                }}>
                                    <Card sx={{ 
                                        borderRadius: 3, 
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)', 
                                        p: 1, 
                                        transition: 'transform 0.2s', 
                                        height: '100%',
                                        '&:hover': { 
                                            transform: 'translateY(-6px)', 
                                            boxShadow: '0 6px 24px rgba(227,6,19,0.08)' 
                                        } 
                                    }}>
                                        <CardContent sx={{ 
                                            display: 'flex', 
                                            flexDirection: 'column', 
                                            alignItems: 'center', 
                                            gap: 1,
                                            height: '100%',
                                            justifyContent: 'center',
                                            p: 2
                                        }}>
                                {prog.icon}
                                            <Typography sx={{ 
                                                fontFamily: 'Josefin Sans', 
                                                fontWeight: 600, 
                                                fontSize: '1rem', 
                                                mt: 1, 
                                                mb: 0.5, 
                                                color: '#E30613',
                                                textAlign: 'center'
                                            }}>
                                                {prog.title}
                                            </Typography>
                                            <Typography sx={{ 
                                                fontFamily: 'Josefin Sans', 
                                                fontSize: '0.9rem', 
                                                color: '#222',
                                                textAlign: 'center',
                                                lineHeight: 1.4
                                            }}>
                                                {prog.desc}
                                            </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
                    </Box>

                    <IconButton 
                        onClick={nextSlide}
                        sx={{ 
                            color: '#E30613', 
                            '&:hover': { backgroundColor: 'rgba(227, 6, 19, 0.1)' },
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </Box>

                {/* Carousel Dots */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
                    {Array.from({ length: totalSlides }, (_, index) => (
                        <Box
                            key={index}
                            onClick={() => goToSlide(index)}
                            sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: index === currentSlide ? '#E30613' : '#ddd',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    backgroundColor: index === currentSlide ? '#E30613' : '#ccc'
                                }
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* Featured Videos Section */}
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, mb: 6 }}>
                <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', mb: 3 }}>
                    Featured Content
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.1rem', color: '#222', mb: 4, maxWidth: 800, mx: 'auto' }}>
                    Watch some of our latest and most popular content from different program categories.
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                    {featuredVideos.map((video, index) => (
                        <Box key={video.id} sx={{ flex: '1 1 280px', minWidth: 280, maxWidth: 400 }}>
                            <Box sx={{ position: 'relative', mb: 2 }}>
                                <iframe 
                                    width="100%" 
                                    height="200" 
                                    src={`https://www.youtube.com/embed/${video.id}`} 
                                    title={video.title}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    style={{ borderRadius: 8 }}
                                ></iframe>
                            </Box>
                            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 600, fontSize: '1rem', color: '#E30613', mb: 1 }}>
                                {video.title}
                            </Typography>
                            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '0.9rem', color: '#666', mb: 1 }}>
                                {video.category}
                            </Typography>
                            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '0.85rem', color: '#888', lineHeight: 1.4 }}>
                                {video.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Link href="/programs" style={{ color: '#E30613', fontWeight: 600, fontFamily: 'Josefin Sans', fontSize: '1.1rem', textDecoration: 'underline' }}>See all programs</Link>
        </section>
    );
} 