import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const milestones = [
    { icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#FFD700' }} />, label: 'First Zim satire show to hit 1M views on a single skit' },
    { icon: <EmojiEmotionsIcon sx={{ fontSize: 40, color: '#FFD700' }} />, label: 'Invited speaker at African Satire Creators Summit (2023)' },
    { icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#FFD700' }} />, label: 'Top 10 “Most Influential Zim YouTube Channels” by TechZim' },
];

export default function Milestones() {
    return (
        <Box component="section" sx={{ width: '100%', background: 'rgba(255,215,0,0.03)', py: { xs: 6, md: 10 }, px: 2 }}>
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 900, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#FFD700', mb: 4, textAlign: 'center', letterSpacing: 1 }}>
                Milestones & Achievements
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {milestones.map((m, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, borderRadius: 0, background: 'none', color: '#222', minHeight: 120 }}>
                            {m.icon}
                            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#FFD700', fontSize: '1.1rem', mt: 2, mb: 1, textAlign: 'center' }}>{m.label}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
} 