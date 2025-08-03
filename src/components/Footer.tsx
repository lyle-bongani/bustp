"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

export default function Footer() {
    const [open, setOpen] = useState(false);
    const [activeImg, setActiveImg] = useState('');
    const handleOpen = (img: string) => {
        setActiveImg(img);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
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
                        <Link href="/programs" style={{ color: '#222', textDecoration: 'none', fontFamily: 'Josefin Sans' }}>Programs</Link>
                        <Link href="/gallery" style={{ color: '#222', textDecoration: 'none', fontFamily: 'Josefin Sans' }}>Gallery</Link>
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
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                        {[1,2,3,4,5,6].map(num => (
                            <Box key={num} component="button" onClick={() => handleOpen(`/images/photo/Bustop TV Photography (${num}).jpg`)} sx={{ p: 0, m: 0, background: 'none', cursor: 'pointer', borderRadius: 0, overflow: 'hidden', border: '2px solid #E30613', width: 90, height: 60 }}>
                                <Image src={`/images/photo/Bustop TV Photography (${num}).jpg`} alt={`Gallery Preview ${num}`} width={90} height={60} style={{ objectFit: 'cover', display: 'block' }} />
                            </Box>
                        ))}
                    </Box>
                    <Dialog open={open} onClose={handleClose} maxWidth="md" PaperProps={{ sx: { background: '#000', boxShadow: 24, borderRadius: 2, p: 2 } }}>
                        <Box sx={{ position: 'relative', width: '100%', height: '100%', textAlign: 'center' }}>
                            <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 2 }}><CloseIcon /></IconButton>
                            {activeImg && (
                                <Image src={activeImg} alt="Gallery Full" width={800} height={500} style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: 8, margin: '0 auto' }} />
                            )}
                        </Box>
                    </Dialog>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '0.95rem', mt: 1 }}>
                        <a href="/gallery" style={{ color: '#E30613', textDecoration: 'underline' }}>View Photography Gallery</a>
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
                &copy; {new Date().getFullYear()} Bustop TV. All rights reserved. &nbsp;|&nbsp;
                Designed by <a href="https://www.spemedia.co.zw/" target="_blank" rel="noopener" style={{ color: '#E30613', textDecoration: 'underline' }}>speMedia</a>
            </Typography>
        </Box>
    );
} 