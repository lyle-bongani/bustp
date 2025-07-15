import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MovieIcon from '@mui/icons-material/Movie';
import GroupsIcon from '@mui/icons-material/Groups';
import CampaignIcon from '@mui/icons-material/Campaign';
import Box from '@mui/material/Box';

const programs = [
    {
        icon: <EmojiEmotionsIcon sx={{ fontSize: 40, color: '#E30613' }} />,
        title: 'Satirical Skits & Comedy',
        desc: 'Sharp, witty sketches and comedy shows that spark laughter and reflection.'
    },
    {
        icon: <MovieIcon sx={{ fontSize: 40, color: '#FFD600' }} />,
        title: 'Documentaries & Reports',
        desc: 'In-depth documentaries and special reports on real issues.'
    },
    {
        icon: <GroupsIcon sx={{ fontSize: 40, color: '#E30613' }} />,
        title: 'Community Engagement',
        desc: 'Series that connect, uplift, and empower local communities.'
    },
    {
        icon: <CampaignIcon sx={{ fontSize: 40, color: '#FFD600' }} />,
        title: 'Social Impact Campaigns',
        desc: 'Creative campaigns driving positive change and awareness.'
    },
];

export default function HomePrograms() {
    return (
        <section style={{ padding: '64px 0', background: '#fff', textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#E30613', mb: 2 }}>
                Our Programs
            </Typography>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.15rem', color: '#222', mb: 4, maxWidth: 700, mx: 'auto' }}>
                Explore our diverse range of programs and shows that entertain, educate, and inspire audiences across Zimbabwe and beyond.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mb: 4 }}>
                {programs.map((prog, idx) => (
                    <Box key={idx} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: 220, maxWidth: 320, m: 1 }}>
                        <Card sx={{ borderRadius: 3, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', p: 1, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 6px 24px rgba(227,6,19,0.08)' } }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                {prog.icon}
                                <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 600, fontSize: '1.1rem', mt: 1, mb: 0.5, color: '#E30613' }}>{prog.title}</Typography>
                                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '0.98rem', color: '#222' }}>{prog.desc}</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
            <Link href="/programs" style={{ color: '#E30613', fontWeight: 600, fontFamily: 'Josefin Sans', fontSize: '1.1rem', textDecoration: 'underline' }}>See programs</Link>
        </section>
    );
} 