"use client";

import React, { useState } from 'react';
import { Box, Typography, Button, Card, IconButton, Chip, Container, Modal, Fade } from '@mui/material';
import { EmojiEmotions, Newspaper, LocationOn, PlayArrow, LocalMovies, Mic, VideoLibrary, LiveTv, Gavel, PhotoCamera, Close } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

interface ProgramCategoryProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    videos: Array<{ id: string; title: string; description?: string; fullDescription?: string }>;
    featuredVideo?: { id: string; title: string; description?: string; fullDescription?: string };
}

function ProgramCategory({ title, description, icon, videos, featuredVideo }: ProgramCategoryProps) {
    const otherVideos = videos.filter(video => video.id !== featuredVideo?.id);
    
    // Create section ID from title
    const sectionId = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    return (
        <Box id={sectionId} sx={{ mb: 12 }}>
            {/* Category Header */}
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 4, 
                mb: 6,
                borderBottom: '2px solid #E30613',
                pb: 3
            }}>
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    p: 2,
                    borderRadius: '50%',
                    background: '#E30613',
                    color: '#fff'
                }}>
                    {icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h2" sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 800, 
                        color: '#E30613',
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        mb: 1,
                        letterSpacing: '0.02em'
                    }}>
                        {title}
                    </Typography>
                    <Typography sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontSize: '1.1rem', 
                        color: '#555', 
                        lineHeight: 1.6,
                        maxWidth: '600px',
                        fontWeight: 400
                    }}>
                        {description}
                    </Typography>
                </Box>
                <Chip 
                    label={`${videos.length} videos`} 
                    size="small" 
                    sx={{ 
                        background: '#E30613', 
                        color: '#fff', 
                        fontFamily: 'Josefin Sans',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                    }} 
                />
        </Box>

            {/* Featured Video - Large */}
            {featuredVideo && (
                <Box sx={{ mb: 8 }}>
                    <Typography sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 700, 
                        fontSize: '1rem', 
                        color: '#E30613', 
                        mb: 3,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        Featured
                    </Typography>
                    <Card sx={{ 
                        background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(227, 6, 19, 0.15)',
                        transition: 'all 0.4s ease',
                        border: '2px solid #E30613',
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 20px 40px rgba(227, 6, 19, 0.25)'
                        }
                    }}>
                        <Box sx={{ position: 'relative' }}>
                            <iframe 
                                width="100%" 
                                height="500" 
                                src={`https://www.youtube.com/embed/${featuredVideo.id}`} 
                                title={featuredVideo.title}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                style={{ borderRadius: '12px 12px 0 0' }}
                            ></iframe>
                            <Box sx={{
                                position: 'absolute',
                                top: 20,
                                right: 20,
                                background: '#E30613',
                                color: '#fff',
                                borderRadius: '50%',
                                width: 56,
                                height: 56,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 12px rgba(227, 6, 19, 0.4)'
                            }}>
                                <PlayArrow sx={{ fontSize: 28 }} />
                            </Box>
                        </Box>
                        <Box sx={{ p: 5 }}>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 800, 
                                fontSize: '1.8rem', 
                                color: '#E30613', 
                                mb: 3,
                                lineHeight: 1.3
                            }}>
                                {featuredVideo.title}
                            </Typography>
                            {featuredVideo.description && (
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontSize: '1.1rem', 
                                    color: '#555', 
                                    lineHeight: 1.7,
                                    fontWeight: 400
                                }}>
                                    {featuredVideo.description}
                                </Typography>
                            )}
                        </Box>
                    </Card>
                </Box>
            )}
            
            {/* Other Videos - Elegant Grid */}
            {otherVideos.length > 0 && (
                <Box>
                    <Typography sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 700, 
                        fontSize: '1rem', 
                        color: '#E30613', 
                        mb: 4,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        More from {title}
                    </Typography>
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                        gap: 4
                    }}>
                        {otherVideos.map((video) => (
                            <Card key={video.id} sx={{ 
                                background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(227, 6, 19, 0.1)',
                                transition: 'all 0.4s ease',
                                border: '1px solid #E30613',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    boxShadow: '0 12px 32px rgba(227, 6, 19, 0.2)'
                                }
                            }}>
                                <Box sx={{ position: 'relative' }}>
                                    <iframe 
                                        width="100%" 
                                        height="200" 
                                        src={`https://www.youtube.com/embed/${video.id}`} 
                                        title={video.title}
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                        style={{ borderRadius: '12px 12px 0 0' }}
                                    ></iframe>
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 12,
                                        right: 12,
                                        background: '#E30613',
                                        color: '#fff',
                                        borderRadius: '50%',
                                        width: 40,
                                        height: 40,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 2px 8px rgba(227, 6, 19, 0.3)'
                                    }}>
                                        <PlayArrow sx={{ fontSize: 20 }} />
                                    </Box>
                                </Box>
                                <Box sx={{ p: 4 }}>
                                    <Typography sx={{ 
                                        fontFamily: 'Josefin Sans', 
                                        fontWeight: 700, 
                                        fontSize: '1.2rem', 
                                        color: '#E30613', 
                                        mb: 2,
                                        lineHeight: 1.3
                                    }}>
                                        {video.title}
                                    </Typography>
                                    {video.description && (
                                        <Typography sx={{ 
                                            fontFamily: 'Josefin Sans', 
                                            fontSize: '0.95rem', 
                                            color: '#666', 
                                            lineHeight: 1.6,
                                            fontWeight: 400
                                        }}>
                                            {video.description}
                                        </Typography>
                                    )}
                                </Box>
                            </Card>
                        ))}
            </Box>
        </Box>
            )}
        </Box>
    );
}

export const metadata = {
  title: "Programs & Shows | Bustop TV",
  description: "Explore Bustop TV's programs and shows. Watch satire, comedy, news, and social impact content from Zimbabwe's leading creators.",
  alternates: {
    canonical: "https://bustop.org/programs",
  },
  openGraph: {
    title: "Programs & Shows | Bustop TV",
    description: "Explore Bustop TV's programs and shows. Watch satire, comedy, news, and social impact content from Zimbabwe's leading creators.",
    url: "https://bustop.org/programs",
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
    title: "Programs & Shows | Bustop TV",
    description: "Explore Bustop TV's programs and shows. Watch satire, comedy, news, and social impact content from Zimbabwe's leading creators.",
    images: ["https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png"],
  },
};
export default function ProgramsPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description: string } | null>(null);

    const handleImageClick = (image: { src: string; title: string; description: string }) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const programCategories = [
        {
            title: "Short Films",
            description: "Cinematic narratives exploring Zimbabwean identity and social change.",
            icon: <LocalMovies sx={{ fontSize: 28 }} />,
            color: "#E30613",
            videos: [
                { id: "aE2LbS7Jmwc", title: "Urban Migration", description: "A young professional navigates city life while maintaining rural connections.", fullDescription: "A powerful exploration of urban migration and the search for belonging in Harare's bustling streets. This film follows a young professional navigating the complexities of city life while maintaining connections to rural roots." },
                { id: "27R5QJFp7Pc", title: "Family Bonds", description: "Multi-generational family dynamics in modern Zimbabwe.", fullDescription: "A touching story about family bonds and the generational gap in modern Zimbabwe. This narrative explores how traditional values adapt to contemporary challenges." },
                { id: "ykYMGI9WldM", title: "Tradition & Modernity", description: "Examining the intersection of cultural heritage and progress.", fullDescription: "A thought-provoking piece examining the intersection of tradition and modernity in Zimbabwean society." },
                { id: "ubjZw84LqMs", title: "Community Connection", description: "Celebrating resilience and solidarity in urban communities.", fullDescription: "A heartwarming tale of community and connection in urban Zimbabwe." }
            ],
            featuredVideo: { id: "aE2LbS7Jmwc", title: "Urban Migration", description: "A young professional navigates city life while maintaining rural connections.", fullDescription: "A powerful exploration of urban migration and the search for belonging in Harare's bustling streets." }
        },
        {
            title: "Podcasts",
            description: "Deep conversations on culture, politics, and society with diverse voices.",
            icon: <Mic sx={{ fontSize: 28 }} />,
            color: "#E30613",
            videos: [
                { id: "0DbK5I39Rwg", title: "Youth Leadership", description: "Young leaders discuss Zimbabwe's future and national development.", fullDescription: "An in-depth discussion with youth leaders about Zimbabwe's future and the role of young people in shaping national development." },
                { id: "tYUTCqQAZlY", title: "Digital Transformation", description: "Technology's impact on traditional businesses in Zimbabwe.", fullDescription: "Exploring the impact of technology on traditional businesses in Zimbabwe." },
                { id: "wwP3WizY9pI", title: "Mental Health", description: "Candid conversations about mental health awareness.", fullDescription: "A candid conversation about mental health awareness in Zimbabwean communities." },
                { id: "6SbSkFM6-sk", title: "Women's Leadership", description: "Examining women's roles in politics and business.", fullDescription: "Examining the role of women in Zimbabwean politics and business." },
                { id: "ICjIoMt6UdI", title: "Art & Culture", description: "Celebrating Zimbabwean art and cultural preservation.", fullDescription: "A celebration of Zimbabwean art and culture, featuring interviews with local artists." },
                { id: "6vw4rAVHkm4", title: "Community Innovation", description: "Technology transforming local communities.", fullDescription: "Exploring how technology and innovation are transforming local communities." }
            ],
            featuredVideo: { id: "0DbK5I39Rwg", title: "Youth Leadership", description: "Young leaders discuss Zimbabwe's future and national development.", fullDescription: "An in-depth discussion with youth leaders about Zimbabwe's future and the role of young people in shaping national development." }
        },
        {
            title: "Documentaries",
            description: "Authentic perspectives on the stories that shape our nation.",
            icon: <VideoLibrary sx={{ fontSize: 28 }} />,
            color: "#E30613",
            videos: [
                { id: "Hn8Ir4URY8M", title: "Rural Life", description: "Comprehensive look at rural life and traditional practices.", fullDescription: "A comprehensive look at rural life and traditional practices in Zimbabwe." },
                { id: "-lkX5PP8FU0", title: "Education System", description: "Examining education from primary schools to universities.", fullDescription: "Examining the state of education in Zimbabwe, from primary schools to universities." },
                { id: "TENICwbXD0M", title: "Agriculture", description: "Deep dive into agricultural sector and food security.", fullDescription: "A deep dive into Zimbabwe's agricultural sector and food security challenges." },
                { id: "ZAyGnY7Fa7g", title: "Traditional Healing", description: "Traditional healers in modern healthcare.", fullDescription: "Exploring the role of traditional healers in modern healthcare." },
                { id: "2HEV9UAVmBw", title: "Mining Sector", description: "Mining's impact on local communities.", fullDescription: "A look at Zimbabwe's mining sector and its impact on local communities." },
                { id: "u8ZTO61o_wM", title: "Healthcare", description: "Healthcare challenges and innovative solutions.", fullDescription: "Examining healthcare challenges and innovative solutions in Zimbabwe." },
                { id: "XGBMSvkzlz4", title: "Education Innovation", description: "Creative approaches to learning and teaching.", fullDescription: "A celebration of education innovation in Zimbabwe." }
            ],
            featuredVideo: { id: "Hn8Ir4URY8M", title: "Rural Life", description: "Comprehensive look at rural life and traditional practices.", fullDescription: "A comprehensive look at rural life and traditional practices in Zimbabwe." }
        },
        {
            title: "Web Series",
            description: "Episodic content exploring contemporary themes with authentic perspectives.",
            icon: <LiveTv sx={{ fontSize: 28 }} />,
            color: "#E30613",
            videos: [
                { id: "uW9UH1nJy54", title: "Pilot Episode", description: "Introducing characters and setting up central conflicts.", fullDescription: "The pilot episode that introduces our main characters and sets up the central conflict." },
                { id: "QdSnQ-l4Hd4", title: "First Challenges", description: "Characters face their first major challenges.", fullDescription: "As the story unfolds, our characters face their first major challenges." },
                { id: "CLr1NfIfmwI", title: "Secrets Revealed", description: "Plot thickens as secrets are revealed.", fullDescription: "The plot thickens as secrets are revealed and alliances shift." },
                { id: "IVRu2mj_4QA", title: "Mid-Season Tensions", description: "Characters confront their pasts and make difficult decisions.", fullDescription: "Mid-season tensions reach their peak as characters confront their pasts." },
                { id: "4u-tY5m2vhA", title: "Unexpected Turn", description: "Story takes an unexpected turn with new revelations.", fullDescription: "The story takes an unexpected turn as new information comes to light." },
                { id: "LPQFwRm6_Ko", title: "Building to Finale", description: "Building towards the season finale.", fullDescription: "Building towards the season finale, this episode sets up the dramatic conclusion." },
                { id: "b78Ng2iuWOI", title: "Season Finale", description: "The season finale brings all storylines together.", fullDescription: "The season finale brings all the storylines together in a satisfying conclusion." }
            ],
            featuredVideo: { id: "uW9UH1nJy54", title: "Pilot Episode", description: "Introducing characters and setting up central conflicts.", fullDescription: "The pilot episode that introduces our main characters and sets up the central conflict." }
        },
        {
            title: "Comedy Skits",
            description: "Hilarious takes on everyday situations that Zimbabweans can relate to.",
            icon: <EmojiEmotions sx={{ fontSize: 28 }} />,
            color: "#E30613",
            videos: [
                { id: "WaGR0r95_jo", title: "Meeting the In-Laws", description: "Classic scenario with a Zimbabwean twist.", fullDescription: "A side-splitting take on the classic 'meeting the in-laws' scenario with a Zimbabwean twist." },
                { id: "qg7CYNLbPj0", title: "Public Transport", description: "Challenges of public transportation in Harare.", fullDescription: "A hilarious look at the challenges of public transportation in Harare." },
                { id: "Pc1fj3glVrw", title: "Social Media Culture", description: "Comedic exploration of social media culture.", fullDescription: "A comedic exploration of social media culture in Zimbabwe." },
                { id: "8fysLIhQ3AU", title: "Family Drama", description: "Relatable family dynamics and conflicts.", fullDescription: "A relatable family drama that everyone can identify with." },
                { id: "fVQE5B1sxqk", title: "Workplace Comedy", description: "Humor in office politics and relationships.", fullDescription: "A workplace comedy that highlights the humor in office politics." }
            ],
            featuredVideo: { id: "WaGR0r95_jo", title: "Meeting the In-Laws", description: "Classic scenario with a Zimbabwean twist.", fullDescription: "A side-splitting take on the classic 'meeting the in-laws' scenario with a Zimbabwean twist." }
        },
        {
            title: "The Peoples Bus",
            description: "Real conversations with everyday Zimbabweans on public transportation.",
            icon: <LocationOn sx={{ fontSize: 28 }} />,
            color: "#E30613",
            videos: [
                { id: "UExj4EDDAeU", title: "Daily Life", description: "Real conversations about daily life, hopes, and dreams.", fullDescription: "Real conversations with commuters about daily life, hopes, and dreams." },
                { id: "_S2gVXDmGsU", title: "Economic Challenges", description: "Exploring economic challenges and opportunities.", fullDescription: "Exploring the economic challenges and opportunities that Zimbabweans face." },
                { id: "hGei0wlBBro", title: "Political Voices", description: "Voices of the people on current political issues.", fullDescription: "Voices of the people on current political and social issues." },
                { id: "dnM25mim5FA", title: "Community Perspectives", description: "Community perspectives from different neighborhoods.", fullDescription: "Community perspectives and shared experiences from different neighborhoods." }
            ],
            featuredVideo: { id: "UExj4EDDAeU", title: "Daily Life", description: "Real conversations about daily life, hopes, and dreams.", fullDescription: "Real conversations with commuters about daily life, hopes, and dreams." }
        },
        {
            title: "BustopTV News",
            description: "Current events with a unique Bustop TV perspective and engaging storytelling.",
            icon: <Newspaper sx={{ fontSize: 28 }} />,
            color: "#E30613",
            videos: [
                { id: "GjIRvADGXco", title: "Current Events", description: "Week's biggest stories with comedic twists.", fullDescription: "Current events with a comedic twist, covering the week's biggest stories." },
                { id: "9dTxIn5fG90", title: "Investigative Reporting", description: "Deep dive into local issues that matter.", fullDescription: "Investigative reporting on local issues that matter to our community." },
                { id: "eLtgfPRjcWg", title: "National Impact", description: "How national decisions affect local communities.", fullDescription: "Coverage of national events and their impact on local communities." },
                { id: "_IW8o12AJsc", title: "Human Interest", description: "Stories highlighting resilience and creativity.", fullDescription: "Human interest stories that highlight the resilience and creativity of Zimbabweans." },
                { id: "bIA75b8vaFY", title: "Cultural Events", description: "Celebrating Zimbabwean heritage and traditions.", fullDescription: "Cultural events and community highlights that showcase the rich diversity." },
                { id: "mUZvGCzw7UI", title: "International News", description: "Global events with local Zimbabwean context.", fullDescription: "International news with local flavor, examining how global events impact Zimbabwe." }
            ],
            featuredVideo: { id: "GjIRvADGXco", title: "Current Events", description: "Week's biggest stories with comedic twists.", fullDescription: "Current events with a comedic twist, covering the week's biggest stories." }
        },
        {
            title: "Traditional Courts Series",
            description: "Exploring traditional justice systems in modern Zimbabwe.",
            icon: <Gavel sx={{ fontSize: 28 }} />,
            color: "#E30613",
            videos: [
                { id: "sbRqjvSh6vo", title: "Introduction", description: "Traditional justice systems and their role in society.", fullDescription: "Introduction to traditional justice systems and their role in Zimbabwean society." },
                { id: "JPLH5wchfSo", title: "Family Disputes", description: "How traditional courts handle family and community conflicts.", fullDescription: "Examining how traditional courts handle family disputes and community conflicts." },
                { id: "W6LMiUc-SIg", title: "Chiefs & Leaders", description: "Role of chiefs and traditional leaders in social order.", fullDescription: "The role of chiefs and traditional leaders in maintaining social order." },
                { id: "-yvWlVZhWkQ", title: "Modern Challenges", description: "Traditional courts adapting to contemporary issues.", fullDescription: "Modern challenges facing traditional courts and their adaptation." },
                { id: "yGtYF1r8E8k", title: "Women's Roles", description: "Women's contributions to traditional justice systems.", fullDescription: "Women's roles in traditional justice systems and their contributions." },
                { id: "L8Dj3qVywvQ", title: "Future Integration", description: "Traditional and formal legal systems working together.", fullDescription: "The future of traditional courts and their integration with formal legal systems." }
            ],
            featuredVideo: { id: "sbRqjvSh6vo", title: "Introduction", description: "Traditional justice systems and their role in society.", fullDescription: "Introduction to traditional justice systems and their role in Zimbabwean society." }
        }
    ];

    return (
        <Box sx={{ 
            background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
            minHeight: '100vh'
        }}>
            {/* Hero Section */}
            <Box sx={{ 
                background: 'linear-gradient(135deg, #E30613 0%, #c4001d 100%)',
                color: '#fff',
                py: 12,
                mb: 8
            }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
                        <Typography variant="h1" sx={{ 
                            fontFamily: 'Josefin Sans', 
                            fontWeight: 800, 
                            fontSize: { xs: '3rem', md: '4rem' },
                            mb: 4,
                            letterSpacing: '0.02em',
                            lineHeight: 1.2
                        }}>
                            Our Programs
                    </Typography>
                        <Typography sx={{ 
                            fontFamily: 'Josefin Sans', 
                            fontSize: '1.3rem', 
                            color: '#f0f0f0', 
                            lineHeight: 1.6,
                            fontWeight: 400,
                            mb: 6
                        }}>
                            Discover the diverse content that defines Bustop TV&apos;s unique voice in Zimbabwean media
                    </Typography>
                </Box>
                </Container>
            </Box>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ pb: 12 }}>
                {programCategories.map((category, index) => (
                    <ProgramCategory
                        key={index}
                        title={category.title}
                        description={category.description}
                        icon={category.icon}
                        color={category.color}
                        videos={category.videos}
                        featuredVideo={category.featuredVideo}
                    />
                ))}
                
                {/* Photography Section */}
                <Box id="photography" sx={{ mb: 12 }}>
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 4, 
                        mb: 6,
                        borderBottom: '2px solid #E30613',
                        pb: 3
                    }}>
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            p: 2,
                            borderRadius: '50%',
                            background: '#E30613',
                            color: '#fff'
                        }}>
                            <PhotoCamera sx={{ fontSize: 28 }} />
                </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h2" sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 800, 
                                color: '#E30613',
                                fontSize: { xs: '2rem', md: '2.5rem' },
                                mb: 1,
                                letterSpacing: '0.02em'
                            }}>
                                Photography
                            </Typography>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontSize: '1.1rem', 
                                color: '#555', 
                                lineHeight: 1.6,
                                maxWidth: '600px',
                                fontWeight: 400
                            }}>
                                Visual storytelling through the lens, capturing the essence of Zimbabwean life, culture, and society with artistic vision and documentary precision.
                            </Typography>
            </Box>
                        <Chip 
                            label="View Gallery" 
                            size="small" 
                            sx={{ 
                                background: '#E30613', 
                                color: '#fff', 
                                fontFamily: 'Josefin Sans',
                                fontWeight: 600,
                                fontSize: '0.9rem'
                            }} 
                />
            </Box>

                    <Card sx={{ 
                        position: 'relative',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(227, 6, 19, 0.15)',
                        transition: 'all 0.4s ease',
                        border: '2px solid #E30613',
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 20px 40px rgba(227, 6, 19, 0.25)'
                        }
                    }}>
                        {/* Background Image */}
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1
                        }}>
                            <Image
                                src="/images/photo/Bustop TV Photography (25).jpg"
                                alt="Photography Background"
                                fill
                                style={{
                                    objectFit: 'cover'
                                }}
                            />
                        </Box>
                        {/* Dark Overlay */}
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.3)',
                            zIndex: 2
                        }} />
                        <Box sx={{ p: 6, textAlign: 'center', position: 'relative', zIndex: 3 }}>
                                                        <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 800, 
                                fontSize: '2rem', 
                                color: '#fff', 
                                mb: 3,
                                lineHeight: 1.3
                            }}>
                                Photography Gallery
                </Typography>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontSize: '1.1rem', 
                                color: '#f0f0f0', 
                                lineHeight: 1.7,
                                fontWeight: 400,
                                mb: 4,
                                maxWidth: '600px',
                                mx: 'auto'
                            }}>
                                Explore our comprehensive collection of photography work, featuring over 50 images that capture the essence of Zimbabwean life, culture, and society. From urban landscapes to rural traditions, each image tells a unique story.
                    </Typography>
                            <Link href="/gallery" style={{ textDecoration: 'none' }}>
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    sx={{ 
                                        background: '#E30613',
                                        fontFamily: 'Josefin Sans',
                                        fontWeight: 600,
                                        fontSize: '1.1rem',
                                        px: 4,
                                        py: 2,
                                        '&:hover': {
                                            background: '#c4001d'
                                        }
                                    }}
                                >
                                    View Photography Gallery
                                </Button>
                            </Link>
                </Box>
                    </Card>
            </Box>

                {/* Three Preview Images */}
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                    gap: 4,
                    mt: 6
                }}>
                    {[
                        { src: '/images/photo/Bustop TV Photography (15).jpg', title: 'Community Portraits', description: 'Faces that tell stories of resilience' },
                        { src: '/images/photo/Bustop TV Photography (22).jpg', title: 'Urban Narratives', description: 'Stories told through city scenes' },
                        { src: '/images/photo/Bustop TV Photography (35).jpg', title: 'Environmental Awareness', description: 'Protecting our natural heritage' }
                    ].map((image, index) => (
                        <Card 
                            key={index} 
                            onClick={() => handleImageClick(image)}
                            sx={{ 
                                position: 'relative',
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(227, 6, 19, 0.1)',
                                transition: 'all 0.4s ease',
                                border: '1px solid #E30613',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    boxShadow: '0 12px 32px rgba(227, 6, 19, 0.2)'
                                }
                            }}
                        >
                            <Box sx={{ 
                                position: 'relative', 
                                height: '200px',
                                background: '#f5f5f5'
                            }}>
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    style={{ 
                                        objectFit: 'cover'
                                    }}
                                />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                    color: '#fff',
                                    p: 3
                                }}>
                                    <Typography sx={{ 
                                        fontFamily: 'Josefin Sans', 
                                        fontWeight: 700, 
                                        fontSize: '1rem', 
                                        color: '#fff', 
                                        mb: 1,
                                        lineHeight: 1.3
                                    }}>
                                        {image.title}
                                    </Typography>
                                    <Typography sx={{ 
                                        fontFamily: 'Josefin Sans', 
                                        fontSize: '0.85rem', 
                                        color: '#f0f0f0', 
                                        lineHeight: 1.4,
                                        fontWeight: 400
                                    }}>
                                        {image.description}
                </Typography>
                                </Box>
                            </Box>
                        </Card>
                    ))}
                </Box>
            </Container>

            {/* Call to Action */}
            <Box sx={{ 
                background: 'linear-gradient(135deg, #E30613 0%, #c4001d 100%)',
                color: '#fff',
                py: 12,
                mt: 12
            }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
                        <Typography variant="h2" sx={{ 
                            fontFamily: 'Josefin Sans', 
                            fontWeight: 800, 
                            fontSize: { xs: '2.5rem', md: '3rem' },
                            mb: 4,
                            letterSpacing: '0.02em'
                        }}>
                            Stay Connected
                        </Typography>
                        <Typography sx={{ 
                            fontFamily: 'Josefin Sans', 
                            fontSize: '1.2rem', 
                            color: '#f0f0f0', 
                            lineHeight: 1.6,
                            fontWeight: 400,
                            mb: 6
                        }}>
                            Subscribe to our channel for the latest content and updates from Bustop TV
                </Typography>
                        <Button 
                            variant="outlined" 
                            size="large"
                            sx={{ 
                                borderColor: '#fff', 
                                color: '#fff',
                                fontFamily: 'Josefin Sans',
                                fontWeight: 600,
                                fontSize: '1rem',
                                px: 4,
                                py: 2,
                                '&:hover': {
                                    borderColor: '#fff',
                                    background: 'rgba(255,255,255,0.1)'
                                }
                            }}
                        >
                            Subscribe Now
                    </Button>
                </Box>
                </Container>
            </Box>

            {/* Image Modal/Lightbox */}
            <Modal
                open={!!selectedImage}
                onClose={handleCloseModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4
                }}
            >
                <Fade in={!!selectedImage}>
                    <Box sx={{
                        position: 'relative',
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        bgcolor: 'background.paper',
                        borderRadius: 3,
                        boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
                        overflow: 'hidden',
                        outline: 'none'
                    }}>
                        {/* Close Button */}
                        <IconButton
                            onClick={handleCloseModal}
                            sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                bgcolor: 'rgba(0,0,0,0.7)',
                                color: '#fff',
                                zIndex: 10,
                                '&:hover': {
                                    bgcolor: 'rgba(227, 6, 19, 0.9)'
                                }
                            }}
                        >
                            <Close />
                        </IconButton>

                        {/* Image */}
                        {selectedImage && (
                            <Box sx={{
                                position: 'relative',
                                width: '100%',
                                height: 'auto',
                                maxHeight: '80vh'
                            }}>
                                <Image
                                    src={selectedImage?.src || ''}
                                    alt={selectedImage?.title || ''}
                                    width={1200}
                                    height={800}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '80vh',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Box>
                        )}

                        {/* Image Info */}
                        {selectedImage && (
                            <Box sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                color: '#fff',
                                p: 4
                            }}>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontWeight: 800, 
                                    fontSize: '1.8rem', 
                                    color: '#fff', 
                                    mb: 2,
                                    lineHeight: 1.2
                                }}>
                                    {selectedImage?.title || ''}
                                </Typography>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontSize: '1.1rem', 
                                    color: '#f0f0f0', 
                                    lineHeight: 1.6,
                                    fontWeight: 400,
                                    mb: 2
                                }}>
                                    {selectedImage?.description || ''}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
} 