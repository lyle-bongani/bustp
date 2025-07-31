import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import MicIcon from '@mui/icons-material/Mic';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GavelIcon from '@mui/icons-material/Gavel';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Link from 'next/link';

const items = [
    {
        icon: <MovieIcon sx={{ fontSize: 40, color: '#E30613' }} />, 
        label: 'Short Films', 
        desc: 'Cinematic narratives exploring Zimbabwean identity and social change.',
        sectionId: 'short-films'
    },
    {
        icon: <MicIcon sx={{ fontSize: 40, color: '#FFD600' }} />, 
        label: 'Podcasts', 
        desc: 'Deep conversations on culture, politics, and society with diverse voices.',
        sectionId: 'podcasts'
    },
    {
        icon: <VideoLibraryIcon sx={{ fontSize: 40, color: '#E30613' }} />, 
        label: 'Documentaries', 
        desc: 'Authentic perspectives on the stories that shape our nation.',
        sectionId: 'documentaries'
    },
    {
        icon: <LiveTvIcon sx={{ fontSize: 40, color: '#FFD600' }} />, 
        label: 'Web Series', 
        desc: 'Episodic content exploring contemporary themes with authentic perspectives.',
        sectionId: 'web-series'
    },
    {
        icon: <EmojiEmotionsIcon sx={{ fontSize: 40, color: '#E30613' }} />, 
        label: 'Comedy Skits', 
        desc: 'Hilarious takes on everyday situations that Zimbabweans can relate to.',
        sectionId: 'comedy-skits'
    },
    {
        icon: <LocationOnIcon sx={{ fontSize: 40, color: '#FFD600' }} />, 
        label: 'The Peoples Bus', 
        desc: 'Real conversations with everyday Zimbabweans on public transportation.',
        sectionId: 'the-peoples-bus'
    },
    {
        icon: <NewspaperIcon sx={{ fontSize: 40, color: '#E30613' }} />, 
        label: 'BustopTV News', 
        desc: 'Current events with a unique Bustop TV perspective and engaging storytelling.',
        sectionId: 'bustoptv-news'
    },
    {
        icon: <GavelIcon sx={{ fontSize: 40, color: '#FFD600' }} />, 
        label: 'Traditional Courts Series', 
        desc: 'Exploring traditional justice systems in modern Zimbabwe.',
        sectionId: 'traditional-courts-series'
    },
    {
        icon: <PhotoCameraIcon sx={{ fontSize: 40, color: '#E30613' }} />, 
        label: 'Photography', 
        desc: 'Visual storytelling through the lens, capturing the essence of Zimbabwean life.',
        sectionId: 'photography'
    },
];

export default function WhatWeDo() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 10 }, px: 2 }}>
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#E30613', mb: 4, textAlign: 'center' }}>
                What We Do
            </Typography>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.12rem', color: '#222', mb: 4, maxWidth: 700, mx: 'auto', textAlign: 'center' }}>
                We create content that entertains, educates, and provokes thought—using humor to break barriers and spark conversations. Our work blends satire, documentary, and real-life stories to reflect the Zimbabwean experience.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3, maxWidth: 1200, mx: 'auto' }}>
                {items.map((item: { icon: React.ReactNode; label: string; desc: string; sectionId: string }, idx) => (
                    <Link 
                        key={idx} 
                        href={`/programs#${item.sectionId}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <Card sx={{ 
                            borderRadius: 3, 
                            boxShadow: '0 2px 12px rgba(0,0,0,0.04)', 
                            p: 2, 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)'
                            }
                        }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, textAlign: 'center' }}>
                                {item.icon}
                                <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 600, fontSize: '1.1rem', mt: 1, mb: 0.5, color: '#E30613' }}>{item.label}</Typography>
                                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '0.98rem', color: '#222', textAlign: 'center' }}>{item.desc}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </Box>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.08rem', color: '#444', mt: 4, textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
                Whether it's a viral skit or a powerful interview, Bustop TV's content inspires laughter, dialogue, and change across generations.
            </Typography>
        </Box>
    );
} 