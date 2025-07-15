import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ClientsPage() {
    return (
        <main>
            {/* Hero Section (unchanged) */}
            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: 320, md: 420 },
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `url('/images/pics/BusTop TV Clients 2.jpg') center/cover no-repeat`,
                    py: { xs: 8, md: 12 },
                    px: 2,
                }}
            >
                <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
                <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', width: '100%' }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2, textShadow: '0 2px 12px #000' }}>
                        Our Esteemed Clients
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.18rem', color: '#fff', textShadow: '0 1px 8px #000', maxWidth: 700, mx: 'auto' }}>
                        Bustop TV is proud to have partnered with leading brands, organizations, and institutions across Zimbabwe and beyond. Our clients trust us to deliver impactful, creative, and engaging content that resonates with diverse audiences.
                    </Typography>
                </Box>
            </Box>
            {/* Redesigned Clients Section */}
            <Box sx={{ maxWidth: 1100, mx: 'auto', mt: 8, px: 2 }}>
                {/* Heading and intro above image */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#FFD700', mb: 2 }}>
                        Trusted by Leading Brands
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.1rem', color: '#222', mb: 2, maxWidth: 700, mx: 'auto' }}>
                        We have worked with a wide range of clients, including telecoms, banks, NGOs, and media houses. Our collaborations help brands connect with audiences through humor, storytelling, and digital innovation.
                    </Typography>
                </Box>
                {/* Client image (restored) */}
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 5 }}>
                    <img src="/images/pics/BusTop TV Clients 2.jpg" alt="Bustop TV Clients" style={{ borderRadius: 12, width: '100%', height: 'auto', background: '#fff', maxWidth: '1000px' }} />
                </Box>
                {/* Combined Testimonial and Call to Action */}
                <Box sx={{ bgcolor: '#FFD700', borderRadius: 0, p: { xs: 4, md: 5 }, mb: 0, width: '100vw', position: 'relative', left: '50%', right: '50%', ml: '-50vw', mr: '-50vw', textAlign: 'center', mt: 8 }}>
                    <Box sx={{ maxWidth: 700, mx: 'auto' }}>
                        <Typography sx={{ fontFamily: 'Josefin Sans', fontStyle: 'italic', color: '#222', fontSize: '1.13rem', mb: 2 }}>
                            “Bustop TV’s creative approach helped us reach new audiences and made our campaign truly memorable. Their team is professional, innovative, and a joy to work with!”
                        </Typography>
                        <Typography sx={{ fontFamily: 'Josefin Sans', color: '#222', fontWeight: 700, mb: 3 }}>
                            — Client Partner
                        </Typography>
                        <Button href="/contact" variant="contained" sx={{ background: '#222', color: '#FFD700', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#fff', color: '#222' } }}>
                            Partner With Us
                        </Button>
                    </Box>
                </Box>
            </Box>
        </main>
    );
} 