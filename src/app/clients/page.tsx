import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

import BankingPartners from '../about/components/BankingPartners';

export const metadata = {
  title: "Clients & Partners | Bustop TV",
  description: "Discover Bustop TV's clients and partners. Trusted by leading brands and organizations for creative, impactful content in Zimbabwe.",
  alternates: {
    canonical: "https://bustop.org/clients",
  },
  openGraph: {
    title: "Clients & Partners | Bustop TV",
    description: "Discover Bustop TV's clients and partners. Trusted by leading brands and organizations for creative, impactful content in Zimbabwe.",
    url: "https://bustop.org/clients",
    siteName: "Bustop TV",
    images: [
      {
        url: "https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png",
        width: 311,
        height: 311,
        alt: "Bustop TV Logo",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bustoptv",
    title: "Clients & Partners | Bustop TV",
    description: "Discover Bustop TV's clients and partners. Trusted by leading brands and organizations for creative, impactful content in Zimbabwe.",
    images: ["https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png"],
  },
};
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
            </Box>
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
                    <Image
                        src="/images/pics/BusTop TV Clients 2.jpg"
                        alt="Bustop TV Clients"
                        width={1200}
                        height={690}
                        style={{ maxWidth: '100%', width: '100%', height: 'auto', background: '#fff' }}
                    />
                </Box>
                {/* Popular Artists Section */}
                <Box sx={{ textAlign: 'center', mb: 6, width: '100%', px: { xs: 1, md: 4 }, py: { xs: 4, md: 6 }, boxSizing: 'border-box' }}>
                    <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', mb: 2, letterSpacing: 1 }}>
                        Popular Artists We Have Worked With
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', color: '#222', fontSize: '1.15rem', mb: 4, maxWidth: 700, mx: 'auto' }}>
                        Bustop TV has collaborated with some of the most celebrated artists in Africa, bringing creative energy and star power to our productions.
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 3, maxWidth: 1200, mx: 'auto', justifyContent: 'center' }}>
                        {['Winty Dee', 'Anne Kansiime', 'Jah Prayzah', 'Andy Muridzo', 'Sabastian Magacha', 'Cde Fatso', 'Clive Chigubhu', 'Doc Vikela', 'Madam Boss', 'MisRed', 'Futurelove'].map((artist) => (
                            <Box key={artist} sx={{ bgcolor: '#fff', color: '#E30613', px: 3, py: 4, borderRadius: 3, fontWeight: 700, fontFamily: 'Josefin Sans', fontSize: '1.1rem', boxShadow: '0 2px 12px #FFD70033', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.04)', boxShadow: '0 4px 24px #FFD70066', bgcolor: '#FFD700', color: '#222' } }}>
                                {artist}
                            </Box>
                        ))}
                    </Box>
                </Box>
            <BankingPartners />
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
        </main>
    );
} 