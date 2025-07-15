import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AboutCTA() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 10 }, px: 2, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', mb: 2 }}>
                Ready to laugh, learn, and unlearn?
            </Typography>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.15rem', color: '#222', mb: 4, maxWidth: 700, mx: 'auto' }}>
                Follow us, share the vision, and let’s tell Zimbabwe’s story together.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mb: 2 }}>
                <Button href="https://bustop.tv" target="_blank" rel="noopener noreferrer" variant="contained" sx={{ background: '#E30613', color: '#fff', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#FFD600', color: '#232526' } }}>
                    Watch Our Skits
                </Button>
                <Button href="https://facebook.com/bustoptv" target="_blank" rel="noopener" variant="outlined" sx={{ borderColor: '#E30613', color: '#E30613', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#FFD600', borderColor: '#FFD600', color: '#232526' } }}>
                    Follow on Social Media
                </Button>
            </Box>
        </Box>
    );
} 