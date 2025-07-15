'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;

// Brand colors
const brandRed = '#E30613';
const brandYellow = '#FFD600';
const brandBlack = '#000';
const brandWhite = '#fff';

export default function HomeAbout() {
    return (
        <>
            <Box component="section" sx={{
                width: '100%',
                py: { xs: 6, md: 10 },
                background: '#fff',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0,
                px: 2,
            }}>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', m: 0, p: 0 }}>
                    <Image
                        src="/images/pics/1358210.webp"
                        alt="About Bustop TV"
                        width={520}
                        height={400}
                        style={{ objectFit: 'cover', width: '100%', maxWidth: 520, height: 'auto', margin: 0, padding: 0, borderRadius: 16 }}
                    />
                </Box>
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, m: 0, p: 0 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' }, color: brandRed, mb: 2 }}>
                        About Bustop TV
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.18rem', color: '#222', mb: 3 }}>
                        Bustop TV is Zimbabwe&apos;s leading digital satire and comedy platform, known for turning everyday life into powerful stories through humor. Since launching in 2014, we&apos;ve been creating bold, thought-provoking skits, documentaries, and commentary that connect with audiences across Africa and beyond.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.08rem', color: '#444', mb: 3 }}>
                        We use comedy as a lens to explore Zimbabwean culture, politics, and social issues—blending entertainment with awareness in a way that informs, inspires, and engages. Whether it&apos;s a viral street interview or a cleverly crafted sketch, Bustop TV delivers content that resonates, challenges, and entertains.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.08rem', color: '#444', mb: 4 }}>
                        With millions of views across YouTube, Facebook, and Instagram, Bustop TV is more than just comedy—it&apos;s a movement of voices speaking truth through laughter.
                    </Typography>
                    <Button
                        component={Link}
                        href="/about"
                        sx={{
                            background: brandRed,
                            color: brandWhite,
                            fontWeight: 600,
                            fontFamily: 'Josefin Sans',
                            fontSize: '1.1rem',
                            borderRadius: 24,
                            px: 4,
                            py: 1.5,
                            textTransform: 'none',
                            '&:hover': { background: '#b20510' },
                        }}
                    >
                        Learn more
                    </Button>
                </Box>
            </Box>
            <Box sx={{ width: '100%', background: brandWhite, py: { xs: 5, md: 7 }, px: { xs: 2, md: 0 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ maxWidth: 1100, width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, justifyContent: 'center', alignItems: 'stretch' }}>
                        <Card sx={{
                            flex: 1,
                            minWidth: 240,
                            animation: `${fadeIn} 0.8s ease`,
                            borderRadius: 4,
                            border: `2px solid ${brandRed}`,
                            background: brandWhite,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2
                        }}>
                            <CardContent>
                                <EmojiObjectsIcon sx={{ color: brandYellow, fontSize: 54, mb: 1, background: brandRed, borderRadius: '50%', p: 1.2 }} />
                                <Typography variant="h5" sx={{ color: brandRed, fontFamily: 'Josefin Sans', fontWeight: 700, mb: 1 }}>Our Mission</Typography>
                                <Typography sx={{ fontFamily: 'Josefin Sans', color: brandBlack, fontSize: '1.08rem' }}>
                                    To use satire and comedy as tools for social change, sparking conversations and challenging norms in Zimbabwe and beyond.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            flex: 1,
                            minWidth: 240,
                            animation: `${fadeIn} 0.8s 0.2s ease`,
                            borderRadius: 4,
                            border: `2px solid ${brandYellow}`,
                            background: brandWhite,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2
                        }}>
                            <CardContent>
                                <VisibilityIcon sx={{ color: brandRed, fontSize: 54, mb: 1, background: brandYellow, borderRadius: '50%', p: 1.2 }} />
                                <Typography variant="h5" sx={{ color: brandYellow, fontFamily: 'Josefin Sans', fontWeight: 700, mb: 1 }}>Our Vision</Typography>
                                <Typography sx={{ fontFamily: 'Josefin Sans', color: brandBlack, fontSize: '1.08rem' }}>
                                    To be Africa’s most influential digital platform for fearless, creative, and impactful storytelling.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            flex: 1,
                            minWidth: 240,
                            animation: `${fadeIn} 0.8s 0.4s ease`,
                            borderRadius: 4,
                            border: `2px solid ${brandBlack}`,
                            background: brandWhite,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2
                        }}>
                            <CardContent>
                                <Diversity3Icon sx={{ color: brandWhite, fontSize: 54, mb: 1, background: brandBlack, borderRadius: '50%', p: 1.2 }} />
                                <Typography variant="h5" sx={{ color: brandBlack, fontFamily: 'Josefin Sans', fontWeight: 700, mb: 1 }}>Our Values</Typography>
                                <ul style={{ fontFamily: 'Josefin Sans', color: brandBlack, fontSize: '1.08rem', margin: 0, paddingLeft: 20, textAlign: 'left' }}>
                                    <li>Creativity & Innovation</li>
                                    <li>Integrity & Courage</li>
                                    <li>Inclusivity & Respect</li>
                                    <li>Community Impact</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </>
    );
} 