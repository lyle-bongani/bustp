import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AwardsCTA() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 10 }, px: 2, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontFamily: 'Josefin Sans', fontWeight: 900, color: '#FFD700', mb: 2 }}>
                Join Our Journey
            </Typography>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.15rem', color: '#111', mb: 4, maxWidth: 700, mx: 'auto' }}>
                We don’t do this for trophies—but we’re proud of every moment we’ve made an impact. Help us go even further.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mb: 2 }}>
                <Button href="https://bustop.tv" target="_blank" rel="noopener noreferrer" variant="contained" sx={{ background: '#FFD700', color: '#111', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#111', color: '#FFD700' } }}>
                    Watch Our Award-Winning Skits
                </Button>
                <Button href="/contact" variant="outlined" sx={{ borderColor: '#FFD700', color: '#FFD700', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#FFD700', borderColor: '#FFD700', color: '#111' } }}>
                    Partner With Us
                </Button>
                <Button href="/support" variant="outlined" sx={{ borderColor: '#FFD700', color: '#FFD700', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#FFD700', borderColor: '#FFD700', color: '#111' } }}>
                    Support Our Work
                </Button>
            </Box>
        </Box>
    );
} 