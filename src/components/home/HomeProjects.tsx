import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const projects = [
    {
        title: 'Documentary: Tales of Cyclone Idai Survivors Aftermath',
        description: 'A documentary exploring the aftermath and stories of survivors of Cyclone Idai.',
        link: 'https://www.bustop.tv/documentary-tales-of-cyclone-idai-survivors-aftermath/'
    },
    {
        title: 'Prison Testimonies: Highlight Consequences of Substance Abuse for Students',
        description: 'A project where students learn about the real-life consequences of substance abuse through prison testimonies.',
        link: 'https://www.bustop.tv/prison-testimonies-highlight-consequences-of-substance-abuse-for-students/'
    },
    {
        title: 'Mabvuku/Tafara Community Mobilizes Petition to Combat Rising Drug Problem',
        description: 'Community-driven initiative to address and combat the rising drug problem in Mabvuku/Tafara.',
        link: 'https://www.bustop.tv/mabvuku-tafara-community-mobilizes-petition-to-combat-rising-drug-problem/'
    }
];

export default function HomeProjects() {
    return (
        <section style={{ padding: 'clamp(32px, 8vw, 64px) 0', background: '#fafbfc' }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 1, sm: 2 } }}>
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#E30613', mb: 2, textAlign: 'center' }}>
                    Featured Projects
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.15rem', mb: 4, maxWidth: 700, mx: 'auto', textAlign: 'center', color: '#222' }}>
                    Check out some of our most impactful and creative projects that have made a difference.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: { xs: 2, sm: 4 }, overflowX: { xs: 'auto', md: 'visible' }, justifyContent: { xs: 'flex-start', md: 'center' }, mb: 2, px: { xs: 1, sm: 0 } }}>
                    {projects.map((project: { title: string; description: string; link: string }, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <Card sx={{ minWidth: 260, maxWidth: 340, width: { xs: 260, sm: 300, md: 340 }, flex: '0 0 auto', borderRadius: 4, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 4px 24px rgba(227,6,19,0.15)' } }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', mb: 1 }}>
                                        {project.title}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Josefin Sans', color: '#222', fontSize: '1rem', opacity: 0.9, mb: 2 }}>
                                        {project.description}
                                    </Typography>
                                    <Button variant="outlined" sx={{ borderColor: '#E30613', color: '#E30613', fontFamily: 'Josefin Sans', fontWeight: 600, textTransform: 'none', borderRadius: 2, '&:hover': { background: '#FFD600', borderColor: '#FFD600', color: '#232526' } }}>
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </Box>
                <Box sx={{ textAlign: 'center', mt: 5 }}>
                    <Button component={Link} href="/projects" variant="contained" sx={{ background: '#E30613', color: '#fff', fontWeight: 700, borderRadius: 8, textTransform: 'none', fontFamily: 'Josefin Sans', boxShadow: 'none', fontSize: '1.1rem', px: 4, py: 1.5, '&:hover': { background: '#FFD600', color: '#232526' } }}>
                        View projects
                    </Button>
                </Box>
            </Box>
        </section>
    );
} 