import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
                {milestones.map((m, idx) => (
                    <Box key={idx} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 28%' }, minWidth: 220, maxWidth: 340, m: 1 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, borderRadius: 0, background: 'none', color: '#222', minHeight: 120, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
                            {m.icon}
                            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#FFD700', fontSize: '1.1rem', mt: 2, mb: 1, textAlign: 'center' }}>{m.label}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
} 