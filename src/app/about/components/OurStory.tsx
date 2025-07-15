import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const milestones = [
    { year: '2014', label: 'Founded' },
    { year: '2015', label: 'First Viral Skit' },
    { year: '2018', label: '100K Followers' },
    { year: '2022', label: 'Global Recognition' },
];

export default function OurStory() {
    return (
        <Box component="section" sx={{ width: '100%', background: 'linear-gradient(90deg, #fff 60%, #FFF6F6 100%)', py: { xs: 6, md: 10 }, px: 2 }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: 4, md: 8 } }}>
                {/* Image/Visual */}
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { xs: 2, md: 0 } }}>
                    <Box sx={{ position: 'relative', width: { xs: 260, sm: 340, md: 420 }, height: { xs: 260, sm: 340, md: 420 }, borderRadius: 6, overflow: 'hidden', boxShadow: '0 8px 32px rgba(227,6,19,0.10)', border: '4px solid #FFD600' }}>
                        <Image src="/images/pics/1358210.webp" alt="Early Bustop TV" fill style={{ objectFit: 'cover' }} />
                        <Box sx={{ position: 'absolute', top: 12, left: 12, background: '#E30613', color: '#fff', px: 2, py: 0.5, borderRadius: 2, fontWeight: 700, fontFamily: 'Josefin Sans', fontSize: 16, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <EmojiEmotionsIcon sx={{ fontSize: 20, mr: 0.5 }} /> Since 2014
                        </Box>
                    </Box>
                </Box>
                {/* Text Content */}
                <Box sx={{ flex: 2, pl: { md: 4 }, pr: { md: 2 } }}>
                    <Box sx={{ borderLeft: { md: '6px solid #E30613' }, pl: { md: 3 }, mb: 2 }}>
                        <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#E30613', mb: 1 }}>
                            Our Story
                        </Typography>
                        <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 500, color: '#FFD600', fontSize: '1.15rem', mb: 2 }}>
                            From a single camera to a national movement.
                        </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.15rem', color: '#222', mb: 2 }}>
                        Bustop TV was founded in 2014 by a group of young creatives determined to challenge the status quo through humor. Armed with just a camera and bold ideas, they quickly gained attention through viral street interviews and skits that captured the everyday realities of Zimbabwean life.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.08rem', color: '#444', mb: 2 }}>
                        Despite facing censorship, skepticism, and the challenges of telling bold stories in a shifting political climate, Bustop TV grew into one of Zimbabwe’s most influential satire platforms. Their early content resonated with audiences both locally and abroad, using laughter to highlight social issues, culture, and politics.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.08rem', color: '#222', mb: 2 }}>
                        As the platform expanded, it became a space for open dialogue, creative resistance, and storytelling that inspired a new generation of creators. Today, Bustop TV blends satire, documentary, and live performance to deliver content that is fresh, fearless, and impactful—reaching audiences across Africa and beyond.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 600, color: '#E30613', fontSize: '1.08rem', mb: 2 }}>
                        The journey is far from over. We&apos;re committed to pushing boundaries, amplifying new voices, and using comedy to inspire the next generation of Zimbabwean storytellers.
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2, mb: 1 }}>
                        <Typography sx={{ fontFamily: 'Josefin Sans', fontStyle: 'italic', color: '#E30613', fontSize: '1.08rem' }}>
                            “Comedy is our weapon, truth is our shield.”
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* Timeline Row */}
            <Box sx={{ maxWidth: 900, mx: 'auto', mt: 6, display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: { xs: 2, md: 6 }, flexWrap: 'wrap', alignItems: 'center' }}>
                {milestones.map((m, idx) => (
                    <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 80 }}>
                        <TimelineIcon sx={{ color: '#FFD600', fontSize: 32, mb: 0.5 }} />
                        <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', fontSize: '1.1rem' }}>{m.year}</Typography>
                        <Typography sx={{ fontFamily: 'Josefin Sans', color: '#222', fontSize: '0.98rem', textAlign: 'center' }}>{m.label}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
} 