import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DiamondIcon from '@mui/icons-material/Diamond';
import PublicIcon from '@mui/icons-material/Public';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Image from 'next/image';
import React from 'react';

const awards = [
    {
        icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#FFD700', bgcolor: 'rgba(255,215,0,0.12)', borderRadius: '50%', p: 1 }} />, // gold
        rightIcon: <StarIcon sx={{ fontSize: 90, color: '#FFD700', bgcolor: 'rgba(255,215,0,0.12)', borderRadius: '50%', p: 1 }} />, // star
        title: 'Best Online Content Creator',
        org: 'National Arts Merit Awards (NAMA)',
        year: '2021',
        desc: 'Recognized for redefining online entertainment in Zimbabwe through satire, storytelling, and audience impact. This award highlighted our innovative approach to digital content, our ability to connect with diverse audiences, and our commitment to pushing creative boundaries in the online space.',
        logo: '/images/logos/Bustop TV Logo 311px.png',
        photo: '/images/pics/zimbabwe media wards.webp',
    },
    {
        icon: <LiveTvIcon sx={{ fontSize: 40, color: '#FFD700', bgcolor: 'rgba(255,215,0,0.12)', borderRadius: '50%', p: 1 }} />, // gold
        rightIcon: <WorkspacePremiumIcon sx={{ fontSize: 90, color: '#E30613', bgcolor: 'rgba(227,6,19,0.08)', borderRadius: '50%', p: 1 }} />, // premium
        title: 'Digital Trailblazer Award',
        org: 'Zim Digital Media Awards',
        year: '2022',
        desc: 'Awarded for pioneering the use of digital platforms to drive civic engagement and humor-led awareness. Our digital campaigns reached thousands, sparking important conversations and encouraging active participation in social issues through creative storytelling and satire.',
        logo: '/images/logos/Bustop TV Logo 311px.png',
        photo: '/images/pics/BusTop TV Clients.webp',
    },
    {
        icon: <PublicIcon sx={{ fontSize: 40, color: '#FFD700', bgcolor: 'rgba(255,215,0,0.12)', borderRadius: '50%', p: 1 }} />, // gold
        rightIcon: <DiamondIcon sx={{ fontSize: 90, color: '#1976d2', bgcolor: 'rgba(25,118,210,0.08)', borderRadius: '50%', p: 1 }} />, // diamond
        title: 'African Creators Spotlight',
        org: 'BBC Focus on Africa',
        year: '2023',
        desc: 'Bustop TV featured as one of Africa’s most innovative online satire platforms. This recognition by BBC Focus on Africa underscored our influence across the continent and celebrated our role in shaping the future of African digital media and comedy.',
        logo: '/images/logos/Bustop TV Logo 311px.png',
        photo: '/images/pics/1358210.webp',
    },
];

export default function MajorAwards() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 8, md: 14 }, px: 2 }}>
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 900, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#FFD700', mb: 4, textAlign: 'center', letterSpacing: 1 }}>
                Major Awards & Recognitions
            </Typography>
            <Box sx={{ maxWidth: 1200, mx: 'auto', position: 'relative', pb: 4 }}>
                {/* Timeline vertical line */}
                <Box sx={{
                    position: 'absolute',
                    left: { xs: 16, sm: '50%' },
                    top: 0,
                    bottom: 0,
                    width: 3,
                    bgcolor: '#FFD700',
                    opacity: 0.12,
                    borderRadius: 3,
                    transform: { sm: 'translateX(-50%)' },
                    display: { xs: 'none', sm: 'block' },
                }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {awards.map((award, idx) => (
                        <Box key={idx} sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: { xs: 'flex-start', md: 'stretch' },
                            justifyContent: 'center',
                            position: 'relative',
                            py: { xs: 3, md: 4 },
                            px: { xs: 1, md: 2 },
                        }}>
                            {/* Left: Text content */}
                            <Box sx={{
                                flex: { xs: '1 1 100%', md: '0 0 45%' },
                                maxWidth: { md: '45%' },
                                minWidth: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                pr: { md: 4 },
                                textAlign: 'left',
                                order: { xs: 2, md: 1 },
                            }}>
                                <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#FFD700', fontSize: '1.13rem', mb: 0.5 }}>{award.title}</Typography>
                                <Typography sx={{ fontFamily: 'Josefin Sans', color: '#888', fontSize: '0.98rem', mb: 1 }}>{award.org}</Typography>
                                <Typography sx={{ fontFamily: 'Josefin Sans', color: '#222', fontSize: '1.05rem', textAlign: 'left' }}>{award.desc}</Typography>
                            </Box>
                            {/* Center: Timeline icon/year */}
                            <Box sx={{
                                flex: { xs: '1 1 auto', md: '0 0 70px' },
                                minWidth: { md: 70 },
                                maxWidth: { md: 70 },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                order: { xs: 1, md: 2 },
                                zIndex: 2,
                                position: 'relative',
                            }}>
                                {award.icon}
                                <Image src={award.logo} alt={award.org} width={28} height={28} style={{ borderRadius: 6, background: '#fff', margin: '6px 0' }} />
                                <Typography sx={{ fontFamily: 'Josefin Sans', color: '#FFD700', fontWeight: 700, fontSize: '0.98rem', mt: 0.5 }}>{award.year}</Typography>
                            </Box>
                            {/* Right: Image */}
                            <Box sx={{
                                flex: { xs: '1 1 100%', md: '0 0 45%' },
                                maxWidth: { md: '45%' },
                                minWidth: 0,
                                mt: { xs: 2, md: 0 },
                                display: 'flex',
                                alignItems: 'center',
                                order: { xs: 3, md: 3 },
                                justifyContent: 'center',
                            }}>
                                {/* Relevant icon for each award on the right */}
                                {award.rightIcon}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
} 