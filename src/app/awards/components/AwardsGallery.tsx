import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const gallery = [
    { src: '/images/pics/zimbabwe media wards.webp', alt: 'Award Acceptance' },
    { src: '/images/pics/BusTop TV Clients.webp', alt: 'Red Carpet' },
    { src: '/images/pics/1358210.webp', alt: 'Behind the Scenes' },
];

export default function AwardsGallery() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 10 }, px: 2 }}>
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 900, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#FFD700', mb: 4, textAlign: 'center', letterSpacing: 1 }}>
                Photo Gallery
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', py: 2, px: 1 }}>
                {gallery.map((img, idx) => (
                    <Box key={idx} sx={{ minWidth: 280, maxWidth: 400, flex: '0 0 auto', borderRadius: 4, overflow: 'hidden', boxShadow: '0 2px 12px #FFD70033', background: '#111' }}>
                        <Image src={img.src} alt={img.alt} width={400} height={260} style={{ objectFit: 'cover', width: '100%', height: 260 }} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
} 