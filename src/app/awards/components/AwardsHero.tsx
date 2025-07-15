import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function AwardsHero() {
    return (
        <Box sx={{
            width: '100%',
            minHeight: { xs: 280, md: 380 },
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `url('/images/pics/zimbabwe media wards.webp') center/cover no-repeat`,
            py: { xs: 8, md: 12 },
            px: 2,
            color: '#fff',
            backgroundColor: 'rgba(0,0,0,0.7)',
        }}>
            <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
            <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%' }}>
                <EmojiEventsIcon sx={{ fontSize: 56, color: '#FFD700', mb: 2 }} />
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 900, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#FFD700', mb: 2, textShadow: '0 2px 12px #000' }}>
                    🏆 Celebrating Excellence Through Satire
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.18rem', color: '#fff', textShadow: '0 1px 8px #000', maxWidth: 700, mx: 'auto' }}>
                    From street corners to center stage — Bustop TV’s bold comedy and fearless storytelling have earned applause across Zimbabwe and beyond.
                </Typography>
            </Box>
        </Box>
    );
} 