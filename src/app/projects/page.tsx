import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PublicIcon from '@mui/icons-material/Public';
import MovieIcon from '@mui/icons-material/Movie';
import Parser from 'rss-parser';

async function getLatestProjects() {
    try {
        const res = await fetch('https://www.bustop.tv/feed/', { next: { revalidate: 3600 } });
        const text = await res.text();
        const parser = new Parser();
        const feed = await parser.parseString(text);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return feed.items.slice(0, 8).map((item: any) => ({
            title: item.title,
            description: item.contentSnippet || '',
            image: (item.enclosure && item.enclosure.url) || '',
            link: item.link,
        }));
    } catch {
        return null;
    }
}

export default async function ProjectsPage() {
    const projects = await getLatestProjects() || [
        {
            title: 'Documentary: Tales of Cyclone Idai Survivors Aftermath',
            description: 'A documentary exploring the aftermath and stories of survivors of Cyclone Idai.',
            link: 'https://www.bustop.tv/documentary-tales-of-cyclone-idai-survivors-aftermath/',
            image: '',
        },
        {
            title: 'Prison Testimonies: Highlight Consequences of Substance Abuse for Students',
            description: 'A project where students learn about the real-life consequences of substance abuse through prison testimonies.',
            link: 'https://www.bustop.tv/prison-testimonies-highlight-consequences-of-substance-abuse-for-students/',
            image: '',
        },
        {
            title: 'Mabvuku/Tafara Community Mobilizes Petition to Combat Rising Drug Problem',
            description: 'Community-driven initiative to address and combat the rising drug problem in Mabvuku/Tafara.',
            link: 'https://www.bustop.tv/mabvuku-tafara-community-mobilizes-petition-to-combat-rising-drug-problem/',
            image: '',
        }
    ];

    return (
        <main>
            {/* HERO SECTION */}
            <Box sx={{
                width: '100%',
                minHeight: { xs: 340, md: 480 },
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `url('/images/pics/1358210.webp') center/cover no-repeat`,
                boxShadow: '0 8px 32px rgba(227,6,19,0.10)',
                mb: 8,
            }}>
                <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 1 }} />
                <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#FFD700', width: '100%', py: { xs: 10, md: 14 }, px: 2 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.2rem' }, mb: 1, letterSpacing: 1, textShadow: '0 2px 16px #000' }}>
                        Bustop TV Projects
                    </Typography>
                    <Box sx={{ width: 80, height: 6, mx: 'auto', mb: 3, background: 'linear-gradient(90deg, #FFD700 0%, #E30613 100%)', borderRadius: 3, animation: 'pulse 2s infinite alternate' }} />
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.25rem', color: '#fff', maxWidth: 700, mx: 'auto', textShadow: '0 1px 8px #000', mb: 3 }}>
                        Discover our most impactful and creative projects—where storytelling meets social change.
                    </Typography>
                    <Button href="#projects" variant="contained" sx={{ background: '#FFD700', color: '#E30613', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#E30613', color: '#FFD700' } }}>
                        See Latest Projects
                    </Button>
                </Box>
            </Box>

            {/* INTRO CONTENT ABOVE PROJECTS */}
            <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', mb: 4, px: 2 }}>
                <Typography variant="h4" sx={{ fontFamily: 'Josefin Sans', fontWeight: 800, color: '#E30613', mb: 1 }}>
                    Our Latest Projects
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', color: '#333', fontSize: '1.08rem', maxWidth: 700, mx: 'auto' }}>
                    From documentaries to community initiatives, explore how Bustop TV is making a difference through powerful storytelling and real-world impact. Each project reflects our passion for creativity, social change, and the voices of Zimbabwe.
                </Typography>
            </Box>

            {/* PROJECTS GRID */}
            <Box id="projects" sx={{ maxWidth: 1300, mx: 'auto', px: { xs: 1, sm: 2 }, mb: 10 }}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                    gap: 4,
                }}>
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <Card sx={{ borderRadius: 4, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', p: 0, transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-6px) scale(1.03)', boxShadow: '0 8px 32px #FFD70044' } }}>
                                {project.image && (
                                    <Image src={project.image} alt={project.title} width={400} height={200} style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, objectFit: 'cover', width: '100%', height: 200, background: '#eee' }} />
                                )}
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', mb: 1, fontSize: '1.18rem' }}>
                                        {project.title}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Josefin Sans', color: '#222', fontSize: '1rem', opacity: 0.9, mb: 2 }}>
                                        {project.description}
                                    </Typography>
                                    <Button variant="outlined" sx={{ borderColor: '#FFD700', color: '#FFD700', fontFamily: 'Josefin Sans', fontWeight: 600, textTransform: 'none', borderRadius: 2, '&:hover': { background: '#FFD700', borderColor: '#FFD700', color: '#E30613' } }}>
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </Box>
            </Box>

            {/* FEATURES SECTION */}
            <Box sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 8 }, mb: 10 }}>
                <Box sx={{ maxWidth: 1200, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'center', alignItems: 'stretch', px: 2 }}>
                    <FeatureCard icon={<PublicIcon sx={{ fontSize: 40, color: '#E30613' }} />} title="Community Impact" desc="Our projects drive real change and uplift communities across Zimbabwe." />
                    <FeatureCard icon={<MovieIcon sx={{ fontSize: 40, color: '#FFD700' }} />} title="Creative Storytelling" desc="We use humor, drama, and documentary to tell stories that matter." />
                    <FeatureCard icon={<EmojiEmotionsIcon sx={{ fontSize: 40, color: '#E30613' }} />} title="Real Issues" desc="We tackle tough topics—social justice, health, youth, and more." />
                    <FeatureCard icon={<EmojiEventsIcon sx={{ fontSize: 40, color: '#FFD700' }} />} title="Award-Winning" desc="Recognized for excellence in media, satire, and social impact." />
                </Box>
            </Box>

            {/* NEWS HORIZONTAL SCROLL */}
            <Box sx={{ maxWidth: 1300, mx: 'auto', mb: 10, px: 2 }}>
                <Typography variant="h4" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#FFD700', mb: 3, textAlign: 'center' }}>
                    Recent News & Updates
                </Typography>
                <Box sx={{ display: 'flex', overflowX: 'auto', gap: 4, pb: 2 }}>
                    <NewsCard title="Chitungwiza Council Demolishes Illegal Construction Behind Hunyani Bar" link="https://www.bustop.tv/chitungwiza-council-demolishes-illegal-construction-behind-hunyani-bar/" desc="The Chitungwiza Municipality Development Control team has acted promptly to stop unauthorized construction activities…" />
                    <NewsCard title="435 Dog Bites and 21 Snake Bites Reported" link="https://www.bustop.tv/435-dog-bites-and-21-snake-bites-reported/" desc="Alarming statistics from the Ministry of Health and Child Care have revealed that a…" />
                    <NewsCard title="Son Kills Self Over Spilt Cooking oil Dispute with Mom" link="https://www.bustop.tv/son-kills-self-over-spilt-cooking-oil-dispute-with-mom/" desc="A dispute between a mother and son in Bulawayo over spilt cooking oil took…" />
                </Box>
            </Box>

            {/* TESTIMONIAL SECTION */}
            <Box sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 8 }, mb: 10 }}>
                <Box sx={{ maxWidth: 700, mx: 'auto', textAlign: 'center', px: 2, position: 'relative' }}>
                    <FormatQuoteIcon sx={{ fontSize: 48, color: '#E30613', mb: 1 }} />
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontStyle: 'italic', color: '#E30613', fontSize: '1.18rem', mb: 2 }}>
                        “Bustop TV’s projects don’t just entertain—they spark conversations and inspire action. Their work is a breath of fresh air in Zimbabwean media.”
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', color: '#222', fontWeight: 700, mb: 0 }}>
                        — Community Leader
                    </Typography>
                </Box>
            </Box>

            {/* FULL-WIDTH CTA */}
            <Box sx={{ width: '100%', background: '#E30613', py: { xs: 6, md: 8 }, textAlign: 'center' }}>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 900, fontSize: '1.5rem', color: '#FFD700', mb: 2, letterSpacing: 1 }}>
                    Want to collaborate or feature your project?
                </Typography>
                <Button href="/contact" variant="contained" sx={{ background: '#FFD700', color: '#E30613', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', fontSize: '1.1rem', px: 4, py: 1.5, boxShadow: 'none', '&:hover': { background: '#fff', color: '#E30613' } }}>
                    Contact Us
                </Button>
            </Box>
        </main>
    );
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
    return (
        <Box sx={{ flex: 1, background: '#fff', borderRadius: 4, p: 4, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', textAlign: 'center', minWidth: 200 }}>
            <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>{icon}</Box>
            <Typography sx={{ fontWeight: 700, mb: 1, color: '#E30613', fontFamily: 'Josefin Sans' }}>{title}</Typography>
            <Typography sx={{ color: '#222', fontFamily: 'Josefin Sans' }}>{desc}</Typography>
        </Box>
    );
}

interface NewsCardProps {
    title: string;
    link: string;
    desc: string;
}

function NewsCard({ title, link, desc }: NewsCardProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ minWidth: 320, maxWidth: 400, textDecoration: 'none', color: 'inherit', flex: '0 0 auto' }}>
            <Box sx={{ background: '#fff', borderRadius: 4, p: 3, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', height: '100%' }}>
                <Typography sx={{ fontWeight: 700, color: '#E30613', fontFamily: 'Josefin Sans', mb: 1, fontSize: '1.08rem' }}>{title}</Typography>
                <Typography sx={{ color: '#222', fontFamily: 'Josefin Sans', fontSize: '0.98rem' }}>{desc}</Typography>
            </Box>
        </a>
    );
} 