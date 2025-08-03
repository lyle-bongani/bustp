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

export default function ContactClient() {
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
                minHeight: { xs: '80vh', md: '80vh' },
                background: `url('https://www.shutterstock.com/image-photo/smiling-beautiful-black-businesswoman-working-260nw-1018551589.jpg') center/cover no-repeat`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 8,
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
                <Typography variant="h2" sx={{
                    color: '#fff',
                    fontWeight: 800,
                    fontFamily: 'Josefin Sans',
                    fontSize: { xs: '2.2rem', md: '3.2rem' },
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}>
                    Get in Touch with Bustop TV
                </Typography>
            </Box>

            {/* CONTACT FORM & INFO SECTION */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 6,
                width: '100%',
                maxWidth: 1100,
                mx: 'auto',
                mb: 8
            }}>
                {/* Contact Form */}
                <Box sx={{ flex: 2, background: '#fff', p: { xs: 2, md: 4 }, borderRadius: 4, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Josefin Sans' }}>Send us a message</Typography>
                    <form onSubmit={handleSubmit} noValidate>
                        <TextField
                            label="Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            error={error.name}
                            helperText={error.name ? 'Name is required' : ''}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            error={error.email}
                            helperText={error.email ? 'Valid email is required' : ''}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Phone (optional)"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Subject (optional)"
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
                            error={error.message}
                            helperText={error.message ? 'Message is required' : ''}
                            fullWidth
                            multiline
                            minRows={4}
                            sx={{ mb: 3 }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.2, fontWeight: 700, fontFamily: 'Josefin Sans', fontSize: '1.1rem' }}>
                            {sent ? <CheckCircleIcon sx={{ mr: 1 }} /> : <EmailIcon sx={{ mr: 1 }} />} {sent ? 'Message Sent!' : 'Send Message'}
                        </Button>
                    </form>
                </Box>

                {/* Contact Info */}
                <Box sx={{ flex: 1, background: '#f9f9f9', p: { xs: 2, md: 4 }, borderRadius: 4, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontFamily: 'Josefin Sans' }}>Contact Information</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <EmailIcon sx={{ color: '#E30613', mr: 1 }} />
                        <Typography sx={{ fontFamily: 'Josefin Sans' }}>info@bustop.org</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PhoneIcon sx={{ color: '#E30613', mr: 1 }} />
                        <Typography sx={{ fontFamily: 'Josefin Sans' }}>+263 77 123 4567</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocationOnIcon sx={{ color: '#E30613', mr: 1 }} />
                        <Typography sx={{ fontFamily: 'Josefin Sans' }}>Harare, Zimbabwe</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <AccessTimeIcon sx={{ color: '#E30613', mr: 1 }} />
                        <Typography sx={{ fontFamily: 'Josefin Sans' }}>Mon - Fri: 9am - 5pm</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                        <FacebookIcon sx={{ color: '#4267B2', fontSize: 32, cursor: 'pointer' }} onClick={() => window.open('https://www.facebook.com/bustoptv/', '_blank')} />
                        <InstagramIcon sx={{ color: '#E1306C', fontSize: 32, cursor: 'pointer' }} onClick={() => window.open('https://www.instagram.com/bustoptv/', '_blank')} />
                        <YouTubeIcon sx={{ color: '#FF0000', fontSize: 32, cursor: 'pointer' }} onClick={() => window.open('https://www.youtube.com/@bustoptv', '_blank')} />
                        <TikTokIcon sx={{ color: '#000', fontSize: 32, cursor: 'pointer' }} onClick={() => window.open('https://www.tiktok.com/@bustoptv', '_blank')} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
