import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GroupsIcon from '@mui/icons-material/Groups';
import MovieIcon from '@mui/icons-material/Movie';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

interface CategoryTileProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    color: string;
    textColor?: string;
}

function CategoryTile({ icon, title, desc, color, textColor }: CategoryTileProps) {
    return (
        <Box sx={{ background: color, color: textColor || '#fff', borderRadius: 4, p: 4, textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 6px 24px rgba(0,0,0,0.13)' } }}>
            <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>{icon}</Box>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: '1.15rem', mb: 0.5 }}>{title}</Typography>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1rem', opacity: 0.9 }}>{desc}</Typography>
        </Box>
    );
}

interface FeaturedProgramProps {
    title: string;
    desc: string;
    img: string;
    reverse?: boolean;
    infoDetails: Array<{ icon: React.ReactNode; text: string }>;
}

function FeaturedProgram({ title, desc, img, reverse, infoDetails }: FeaturedProgramProps) {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' }, alignItems: 'center', gap: 4, mb: 6 }}>
            <Image src={img} alt={title} width={400} height={240} style={{ borderRadius: 12, objectFit: 'cover', width: '100%', maxWidth: 400, height: 240, background: '#fff' }} />
            <Box sx={{ flex: 1 }}>
                <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', mb: 1 }}>{title}</Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.08rem', color: '#222', mb: 1 }}>{desc}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, mb: 1 }}>
                    {infoDetails.map((item, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#FFD700', fontSize: '1rem', fontFamily: 'Josefin Sans' }}>
                            {item.icon}
                            <span style={{ color: '#FFD700', fontWeight: 700, marginLeft: 4 }}>{item.text}</span>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

interface UpcomingCardProps {
    title: string;
    desc: string;
}

function UpcomingCard({ title, desc }: UpcomingCardProps) {
    return (
        <Box sx={{ background: '#fff', color: '#E30613', borderRadius: 4, p: 4, textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', minWidth: 220, flex: 1 }}>
            <NewReleasesIcon sx={{ fontSize: 36, color: '#FFD700', mb: 1 }} />
            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: '1.15rem', mb: 0.5 }}>{title}</Typography>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1rem', opacity: 0.9 }}>{desc}</Typography>
        </Box>
    );
}

export default function ProgramsPage() {
    return (
        <main>
            {/* 1. Hero Section (Banner Header) */}
            <Box sx={{ width: '100%', minHeight: { xs: 320, md: 420 }, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', overflow: 'hidden', mb: 6 }}>
                <video
                    src="/videos/bustoptv-video.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, zIndex: 1, opacity: 0.7 }}
                />
                <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', width: '100%', py: { xs: 8, md: 12 }, px: 2 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2, textShadow: '0 2px 12px #000' }}>
                        🎬 The Stories That Move Zimbabwe
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.18rem', color: '#fff', textShadow: '0 1px 8px #000', maxWidth: 700, mx: 'auto' }}>
                        From political satire to everyday hustle — explore Bustop TV’s original programs that inform, entertain, and inspire.
                    </Typography>
                </Box>
            </Box>

            {/* 2. Program Categories Overview */}
            <Box sx={{ maxWidth: 1100, mx: 'auto', mb: 8, px: 2 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
                    <CategoryTile icon={<EmojiEmotionsIcon sx={{ fontSize: 48 }} />} title="Comedy Skits" desc="Short, punchy, hilarious" color="#E30613" />
                    <CategoryTile icon={<NewspaperIcon sx={{ fontSize: 48, color: '#E30613' }} />} title="Satirical News" desc="Politics meets parody" color="#FFD700" textColor="#E30613" />
                    <CategoryTile icon={<GroupsIcon sx={{ fontSize: 48, color: '#FFD700' }} />} title="Street Interviews" desc="Real people, real talk" color="#222" />
                    <CategoryTile icon={<MovieIcon sx={{ fontSize: 48, color: '#E30613' }} />} title="Short Docs" desc="Deep dives with a twist" color="#fff" textColor="#E30613" />
                </Box>
            </Box>

            {/* 3. Featured Programs */}
            <Box sx={{ maxWidth: 1100, mx: 'auto', mb: 8, px: 2 }}>
                <FeaturedProgram
                    title="The Interview"
                    desc="A man-on-the-street style show that puts real Zimbabweans on camera — honest, raw, and often hilarious."
                    img="/images/pics/1358210.webp"
                    reverse={false}
                    infoDetails={[
                        { icon: <VideocamIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'Watch Now' },
                        { icon: <EventIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'Weekly' },
                        { icon: <LocationOnIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'Facebook, YouTube' },
                    ]}
                />
                <FeaturedProgram
                    title="The Skit Plug"
                    desc="Satirical sketches that mock everyday life, politics, and the unexpected — from kombi dramas to relationship mishaps."
                    img="/images/pics/BusTop TV Clients.webp"
                    reverse={true}
                    infoDetails={[
                        { icon: <VideocamIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'Watch Now' },
                        { icon: <EventIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'Twice Weekly' },
                        { icon: <LocationOnIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'YouTube' },
                    ]}
                />
                <FeaturedProgram
                    title="Bustop Bulletins"
                    desc="A fake news show that delivers real truths. Think headlines, but with heat."
                    img="/images/pics/zimbabwe media wards.webp"
                    reverse={false}
                    infoDetails={[
                        { icon: <VideocamIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'Watch Now' },
                        { icon: <EventIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'Fridays' },
                        { icon: <LocationOnIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'Instagram Reels, TikTok' },
                    ]}
                />
                <FeaturedProgram
                    title="Real Talk"
                    desc="Unscripted documentaries and commentary on social issues, protests, and the pulse of Zimbabwean youth."
                    img="/images/pics/BusTop TV Clients 2.jpg"
                    reverse={true}
                    infoDetails={[
                        { icon: <VideocamIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'Watch Now' },
                        { icon: <EventIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'Monthly' },
                        { icon: <LocationOnIcon sx={{ fontSize: 20, color: '#FFD700' }} />, text: 'YouTube' },
                    ]}
                />
            </Box>

            {/* 4. Behind the Scenes */}
            <Box sx={{ maxWidth: 1100, mx: 'auto', mb: 8, px: 2 }}>
                <Typography variant="h4" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', mb: 2 }}>
                    Behind the Scenes
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: 'center' }}>
                    <Image src="/images/pics/1358210.webp" alt="Behind the Scenes" width={320} height={200} style={{ borderRadius: 10, objectFit: 'cover', width: '100%', maxWidth: 320, height: 200, background: '#fff' }} />
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.08rem', color: '#222', maxWidth: 700 }}>
                        At Bustop TV, every frame is homemade with hustle. Our writers, editors, and actors work as a family to bring you fresh content every week.
                    </Typography>
                </Box>
            </Box>

            {/* 5. Upcoming Series / What's Next */}
            <Box sx={{ maxWidth: 1100, mx: 'auto', mb: 8, px: 2 }}>
                <Typography variant="h4" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#FFD700', mb: 2 }}>
                    Coming Soon
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                    <UpcomingCard title="Campus Confessions" desc="University life like you’ve never seen it." />
                    <UpcomingCard title="Zim Streets Uncut" desc="Gritty, real, and straight from the ground." />
                </Box>
            </Box>

            {/* 6. Call to Action (CTA) */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: '1.25rem', color: '#E30613', mb: 2 }}>
                    Want more? Subscribe on YouTube, follow us on socials, or support us to keep the content alive.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mb: 2 }}>
                    <Button href="https://youtube.com/bustoptv" target="_blank" rel="noopener" variant="contained" sx={{ background: '#E30613', color: '#FFD700', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#FFD700', color: '#E30613' } }}>
                        Subscribe on YouTube
                    </Button>
                    <Button href="https://patreon.com/bustoptv" target="_blank" rel="noopener" variant="outlined" sx={{ borderColor: '#FFD700', color: '#FFD700', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#FFD700', borderColor: '#FFD700', color: '#E30613' } }}>
                        Become a Patron
                    </Button>
                    <Button href="https://instagram.com/bustoptv" target="_blank" rel="noopener" variant="outlined" sx={{ borderColor: '#E30613', color: '#E30613', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#FFD700', borderColor: '#FFD700', color: '#E30613' } }}>
                        Follow @BustopTV
                    </Button>
                </Box>
            </Box>
        </main>
    );
} 