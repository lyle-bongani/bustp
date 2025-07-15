import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: '#FFD700', color: '#222', py: 4, px: 2 }}>
            {/* Logo Row */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Image src="/images/logos/Bustop TV Logo 311px.png" alt="Bustop TV Logo" width={120} height={56} style={{ width: 'auto', display: 'block' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-start' }, gap: 4, maxWidth: 1200, mx: 'auto', mb: 2 }}>
                {/* Quick Links */}
                <Box sx={{ flex: 1, mb: { xs: 2, md: 0 } }}>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, mb: 1, color: '#E30613' }}>Quick Links</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Link href="/" style={{ color: '#222', textDecoration: 'none', fontFamily: 'Josefin Sans' }}>Home</Link>
                        <Link href="/about" style={{ color: '#222', textDecoration: 'none', fontFamily: 'Josefin Sans' }}>About</Link>
                        <Link href="/awards" style={{ color: '#222', textDecoration: 'none', fontFamily: 'Josefin Sans' }}>Awards</Link>
                        <Link href="/clients" style={{ color: '#222', textDecoration: 'none', fontFamily: 'Josefin Sans' }}>Clients</Link>
                        <Link href="/contact" style={{ color: '#222', textDecoration: 'none', fontFamily: 'Josefin Sans' }}>Contact</Link>
                    </Box>
                </Box>
                {/* Contact */}
                <Box sx={{ flex: 1, mb: { xs: 2, md: 0 } }}>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, mb: 1, color: '#E30613' }}>Contact</Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1rem' }}>
                        Email: <a href="mailto:info@bustoptv.com" style={{ color: '#E30613', textDecoration: 'underline' }}>info@bustoptv.com</a>
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1rem' }}>
                        Phone: <a href="tel:+263771234567" style={{ color: '#E30613', textDecoration: 'underline' }}>+263 77 123 4567</a>
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1rem' }}>
                        Address: <span style={{ color: '#E30613' }}>Harare, Zimbabwe</span>
                    </Typography>
                </Box>
                {/* Gallery View */}
                <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, mb: 1, color: '#E30613' }}>Gallery View</Typography>
                    <Link href="/awards" style={{ display: 'inline-block', borderRadius: 8, overflow: 'hidden', border: '2px solid #E30613', width: 90, height: 60 }}>
                        <Image src="/images/pics/zimbabwe media wards.webp" alt="Awards Gallery" width={90} height={60} style={{ objectFit: 'cover', display: 'block' }} />
                    </Link>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '0.95rem', mt: 1 }}>
                        <a href="/awards" style={{ color: '#E30613', textDecoration: 'underline' }}>View Awards Gallery</a>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Box>
                    <IconButton href="https://facebook.com/bustoptv" target="_blank" rel="noopener" sx={{ color: '#E30613' }}><FacebookIcon /></IconButton>
                    <IconButton href="https://twitter.com/bustoptv" target="_blank" rel="noopener" sx={{ color: '#E30613' }}><TwitterIcon /></IconButton>
                    <IconButton href="https://youtube.com/bustoptv" target="_blank" rel="noopener" sx={{ color: '#E30613' }}><YouTubeIcon /></IconButton>
                </Box>
            </Box>
            <Typography variant="body2" sx={{ fontFamily: 'Josefin Sans', mt: 2, textAlign: 'center', color: '#E30613' }}>
                &copy; {new Date().getFullYear()} Bustop TV. All rights reserved.
            </Typography>
        </Box>
    );
} 