import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// Placeholder image, replace 'contact-bg.jpg' with your actual image name later
const bgImage = '/images/pics/1358210.webp';

export default function HomeContact() {
    return (
        <section
            style={{
                position: 'relative',
                padding: 0,
                minHeight: 320,
                width: '100%',
                background: `url(${bgImage}) center/cover no-repeat`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.55)',
                    zIndex: 1,
                }}
            />
            {/* Content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    maxWidth: 520,
                    mx: 'auto',
                    py: { xs: 5, md: 10 },
                    px: { xs: 1, sm: 2 },
                    textAlign: 'center',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#fff', mb: 2, textShadow: '0 2px 12px #000' }}>
                    Contact Us
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.15rem', mb: 3, color: '#fff', textShadow: '0 1px 8px #000' }}>
                    Have questions, feedback, or want to collaborate? Reach out to the Bustop TV team and let’s connect!
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailIcon sx={{ color: '#FFD600' }} />
                        <a href="mailto:info@bustoptv.com" style={{ color: '#FFD600', textDecoration: 'underline', fontFamily: 'Josefin Sans', fontSize: '1.08rem', fontWeight: 500 }}>info@bustoptv.com</a>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneIcon sx={{ color: '#FFD600' }} />
                        <a href="tel:+263771234567" style={{ color: '#FFD600', textDecoration: 'underline', fontFamily: 'Josefin Sans', fontSize: '1.08rem', fontWeight: 500 }}>+263 77 123 4567</a>
                    </Box>
                </Box>
                <Button component={Link} href="/contact" variant="contained" sx={{ background: '#E30613', color: '#fff', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#FFD600', color: '#232526' } }}>
                    Contact us
                </Button>
            </Box>
        </section>
    );
} 