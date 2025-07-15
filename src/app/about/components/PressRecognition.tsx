import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const logos = [
    { src: '/images/logos/Bustop TV Logo 311px.png', alt: 'BBC' },
    { src: '/images/logos/Bustop TV Logo 311px.png', alt: 'Al Jazeera' },
    { src: '/images/logos/Bustop TV Logo 311px.png', alt: 'Zim News' },
];

export default function PressRecognition() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 10 }, px: 2, textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#E30613', mb: 4 }}>
                Press & Recognition
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, md: 6 }, flexWrap: 'wrap', alignItems: 'center' }}>
                {logos.map((logo, idx) => (
                    <Image key={idx} src={logo.src} alt={logo.alt} width={100} height={60} style={{ objectFit: 'contain', background: '#fff', borderRadius: 8, margin: 8 }} />
                ))}
            </Box>
        </Box>
    );
} 