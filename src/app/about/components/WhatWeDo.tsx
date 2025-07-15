import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

const items = [
    {
        icon: <MovieIcon sx={{ fontSize: 40, color: '#E30613' }} />, label: 'Skits & Parodies', desc: 'Hilarious short films on Zimbabwean life.'
    },
    {
        icon: <SearchIcon sx={{ fontSize: 40, color: '#FFD600' }} />, label: 'Street Interviews', desc: 'Real people, real issues—raw & relatable.'
    },
    {
        icon: <NewspaperIcon sx={{ fontSize: 40, color: '#E30613' }} />, label: 'Satirical News', desc: 'Current affairs, served with spice.'
    },
    {
        icon: <VideoCameraFrontIcon sx={{ fontSize: 40, color: '#FFD600' }} />, label: 'Comedy Documentaries', desc: 'Deeper dives with a comedic lens.'
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
            <Grid container spacing={3} justifyContent="center">
                {items.map((item, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={idx}>
                        <Card sx={{ borderRadius: 3, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', p: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                {item.icon}
                                <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 600, fontSize: '1.1rem', mt: 1, mb: 0.5, color: '#E30613' }}>{item.label}</Typography>
                                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '0.98rem', color: '#222', textAlign: 'center' }}>{item.desc}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.08rem', color: '#444', mt: 4, textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
                Whether it’s a viral skit or a powerful interview, Bustop TV’s content inspires laughter, dialogue, and change across generations.
            </Typography>
        </Box>
    );
} 