import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: { xs: 320, md: 420 },
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `url('/images/pics/1358210.webp') center/cover no-repeat`,
                py: { xs: 8, md: 12 },
                px: 2,
            }}
        >
            <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
            <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', width: '100%' }}>
                <Image src="/images/logos/Bustop TV Logo 311px.png" alt="Bustop TV Logo" width={120} height={120} style={{ margin: '0 auto 16px', display: 'block' }} />
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' }, mb: 2, textShadow: '0 2px 12px #000', lineHeight: 1.2, px: 2 }}>
                    🎭 Bold Comedy. Sharp Commentary. Real Zimbabwe.
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', sm: '1.1rem', md: '1.18rem' }, color: '#fff', textShadow: '0 1px 8px #000', maxWidth: 700, mx: 'auto', px: 2, lineHeight: 1.4 }}>
                    Bustop TV is where laughter meets truth. We tell Zimbabwe&apos;s stories—uncensored, unscripted, unforgettable.
                </Typography>
            </Box>
        </Box>
    );
} 