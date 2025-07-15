import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const brandRed = '#E30613';
const brandYellow = '#FFD600';
const brandBlack = '#000';
const brandWhite = '#fff';

export default function HomeAwards() {
    return (
        <Box component="section" sx={{ width: '100%', maxWidth: 1200, mx: 'auto', py: { xs: 6, md: 10 }, background: brandWhite, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 14, px: 2 }}>
            <Box sx={{ flex: 1, maxWidth: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: brandRed, mb: 2 }}>
                    Awards & Recognition
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.15rem', color: brandBlack, mb: 3 }}>
                    Bustop TV has been recognized both locally and internationally for its creative excellence and social impact.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3, width: '100%' }}>
                    <Card sx={{ display: 'flex', alignItems: 'center', border: `2px solid ${brandYellow}`, borderRadius: 3, background: brandWhite, mb: 1, p: 0, boxShadow: 'none' }}>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', py: 1.5, px: 2 }}>
                            <EmojiEventsIcon sx={{ color: brandYellow, fontSize: 36, mr: 2 }} />
                            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 600, color: brandBlack, fontSize: '1.08rem' }}>
                                Best Online Content Creator (Zimbabwe Media Awards)
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', alignItems: 'center', border: `2px solid ${brandRed}`, borderRadius: 3, background: brandWhite, mb: 1, p: 0, boxShadow: 'none' }}>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', py: 1.5, px: 2 }}>
                            <EmojiEventsIcon sx={{ color: brandRed, fontSize: 36, mr: 2 }} />
                            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 600, color: brandBlack, fontSize: '1.08rem' }}>
                                African Satire Excellence Award
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', alignItems: 'center', border: `2px solid ${brandBlack}`, borderRadius: 3, background: brandWhite, mb: 1, p: 0, boxShadow: 'none' }}>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', py: 1.5, px: 2 }}>
                            <EmojiEventsIcon sx={{ color: brandBlack, fontSize: 36, mr: 2 }} />
                            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 600, color: brandBlack, fontSize: '1.08rem' }}>
                                YouTube Silver Play Button
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Link href="/awards" style={{ color: brandRed, fontWeight: 600, fontFamily: 'Josefin Sans', fontSize: '1.1rem', textDecoration: 'underline' }}>See our awards</Link>
            </Box>
            <Box sx={{ flex: 1, maxWidth: 520, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    src="/images/pics/zimbabwe media wards.webp"
                    alt="Bustop TV Awards"
                    width={520}
                    height={520}
                    style={{ objectFit: 'cover', width: '100%', height: 520, borderRadius: 16 }}
                />
            </Box>
        </Box>
    );
} 