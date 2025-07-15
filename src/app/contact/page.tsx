"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from '@mui/icons-material/MusicNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

export default function ContactPage() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [error, setError] = useState({ name: false, email: false, message: false });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: false });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simple validation
        const newError = {
            name: !form.name,
            email: !form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email),
            message: !form.message,
        };
        setError(newError);
        if (Object.values(newError).some(Boolean)) return;
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <Box>
            {/* HERO SECTION */}
            <Box sx={{
                width: '100%',
                minHeight: { xs: 220, md: 340 },
                background: `url('/images/pics/1358210.webp') center/cover no-repeat`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                mb: 6,
            }}>
                <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
                <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#FFD700', width: '100%', py: { xs: 6, md: 10 }, px: 2 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 900, fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1, letterSpacing: 1, textShadow: '0 2px 16px #000' }}>
                        Let’s Talk <span role="img" aria-label="wave">👋</span>
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.2rem', color: '#fff', maxWidth: 600, mx: 'auto', textShadow: '0 1px 8px #000' }}>
                        Got an idea, partnership, or just want to say hi? We’d love to hear from you.
                    </Typography>
                </Box>
            </Box>

            {/* MAIN CONTACT SECTION */}
            <Box sx={{ maxWidth: 1200, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, mb: 8, px: 2 }}>
                {/* CONTACT FORM */}
                <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, background: '#fff', minWidth: 320, borderRadius: 3, boxShadow: 'none' }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', mb: 2 }}>
                        Send Us a Message
                    </Typography>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <TextField
                            label="Full Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            error={error.name}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Email Address"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            error={error.email}
                            type="email"
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Phone Number"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            fullWidth
                            multiline
                            minRows={4}
                            error={error.message}
                            sx={{ mb: 2 }}
                        />
                        <Button type="submit" variant="contained" sx={{ background: '#FFD700', color: '#E30613', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#E30613', color: '#FFD700' }, mb: 2 }}>
                            Send Message
                        </Button>
                        {sent && (
                            <Box sx={{ display: 'flex', alignItems: 'center', color: '#388e3c', mt: 2, gap: 1, fontWeight: 600, fontFamily: 'Josefin Sans', fontSize: '1.08rem', transition: 'opacity 0.3s' }}>
                                <CheckCircleIcon color="success" />
                                Message Sent! Thanks for reaching out to Bustop TV! We’ll get back to you within 1–3 working days.
                            </Box>
                        )}
                    </form>
                </Box>

                {/* CONTACT INFO */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'flex-start', minWidth: 280 }}>
                    <Box sx={{ p: 4, background: '#fff', mb: 2, borderRadius: 3, boxShadow: 'none' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <LocationOnIcon sx={{ color: '#FFD700' }} />
                            <Typography sx={{ fontWeight: 700, color: '#E30613', fontFamily: 'Josefin Sans' }}>Studio Address</Typography>
                        </Box>
                        <Typography sx={{ color: '#222', fontFamily: 'Josefin Sans', mb: 1 }}>123 Comedy Lane, Harare, Zimbabwe</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AccessTimeIcon sx={{ color: '#FFD700' }} />
                            <Typography sx={{ color: '#222', fontFamily: 'Josefin Sans' }}>Mon–Fri: 9AM–5PM</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ p: 4, background: '#fff', mb: 2, borderRadius: 3, boxShadow: 'none' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <EmailIcon sx={{ color: '#FFD700' }} />
                            <Typography sx={{ fontWeight: 700, color: '#E30613', fontFamily: 'Josefin Sans' }}>Email</Typography>
                        </Box>
                        <Typography sx={{ color: '#222', fontFamily: 'Josefin Sans', mb: 1 }}>contact@bustoptv.co.zw</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <PhoneIcon sx={{ color: '#FFD700' }} />
                            <Typography sx={{ color: '#222', fontFamily: 'Josefin Sans' }}>+263 77 123 4567</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ p: 4, background: '#fff', borderRadius: 3, boxShadow: 'none' }}>
                        <Typography sx={{ fontWeight: 700, color: '#E30613', fontFamily: 'Josefin Sans', mb: 1 }}>Social Media</Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <a href="https://facebook.com/bustoptv" target="_blank" rel="noopener noreferrer"><FacebookIcon sx={{ color: '#1877f3', fontSize: 32 }} /></a>
                            <a href="https://instagram.com/bustoptv" target="_blank" rel="noopener noreferrer"><InstagramIcon sx={{ color: '#E4405F', fontSize: 32 }} /></a>
                            <a href="https://youtube.com/bustoptv" target="_blank" rel="noopener noreferrer"><YouTubeIcon sx={{ color: '#FF0000', fontSize: 32 }} /></a>
                            <a href="https://tiktok.com/@bustoptv" target="_blank" rel="noopener noreferrer"><TikTokIcon sx={{ color: '#000', fontSize: 32 }} /></a>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* EMBEDDED MAP */}
            <Box sx={{ maxWidth: 1200, mx: 'auto', mb: 8, px: 2 }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.1422202163703!2d31.045111199999997!3d-17.8154193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a514d03eccdb%3A0xfcb1ff1b2aa688cf!2sBustop%20TV!5e1!3m2!1sen!2szw!4v1752611849352!5m2!1sen!2szw"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: 12 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bustop TV Studio Map"
                ></iframe>
            </Box>

            {/* CTA FOOTER */}
            <Box sx={{ width: '100%', background: '#E30613', py: { xs: 5, md: 7 }, textAlign: 'center', borderRadius: 0 }}>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 900, fontSize: '1.3rem', color: '#FFD700', mb: 2, letterSpacing: 1 }}>
                    Want to collaborate, sponsor, or feature Bustop TV? Let’s create something bold.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                    <Button href="/media-kit.pdf" variant="contained" sx={{ background: '#FFD700', color: '#E30613', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.08rem', px: 4, py: 1.2, boxShadow: 'none', '&:hover': { background: '#fff', color: '#E30613' } }}>
                        Download Our Media Kit
                    </Button>
                    <Button href="mailto:contact@bustoptv.co.zw?subject=Book%20a%20Meeting" variant="outlined" sx={{ borderColor: '#FFD700', color: '#FFD700', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.08rem', px: 4, py: 1.2, boxShadow: 'none', '&:hover': { background: '#FFD700', color: '#E30613', borderColor: '#FFD700' } }}>
                        Book a Meeting
                    </Button>
                    <Button href="https://facebook.com/bustoptv" target="_blank" rel="noopener noreferrer" variant="text" sx={{ color: '#FFD700', fontWeight: 700, fontFamily: 'Josefin Sans', fontSize: '1.08rem', textTransform: 'none', '&:hover': { textDecoration: 'underline' } }}>
                        Follow Us
                    </Button>
                </Box>
            </Box>
        </Box>
    );
} 