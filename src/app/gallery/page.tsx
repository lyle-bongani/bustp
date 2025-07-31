"use client";

import React, { useState } from 'react';
import { Box, Typography, IconButton, Modal, Fade, Container } from '@mui/material';
import { PhotoCamera, Close } from '@mui/icons-material';
import Image from 'next/image';

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description: string; artist: string } | null>(null);

    const photoImages = [
        { src: '/images/photo/Bustop TV Photography (1).jpg', title: 'Urban Life', description: 'Capturing the essence of city life in Harare', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (2).jpg', title: 'Community Spirit', description: 'The vibrant community spirit of Zimbabwe', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (3).jpg', title: 'Cultural Heritage', description: 'Preserving Zimbabwean cultural traditions', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (4).jpg', title: 'Modern Zimbabwe', description: 'The intersection of tradition and progress', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (5).jpg', title: 'Youth Voices', description: 'Young Zimbabweans shaping the future', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (6).jpg', title: 'Rural Beauty', description: 'The natural beauty of rural Zimbabwe', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (7).jpg', title: 'Street Stories', description: 'Everyday stories from the streets', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (8).jpg', title: 'Artistic Vision', description: 'Creative perspectives on Zimbabwean life', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (9).jpg', title: 'Social Documentary', description: 'Documenting social issues and change', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (10).jpg', title: 'Portrait Series', description: 'Faces and stories of Zimbabwe', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (11).jpg', title: 'Urban Development', description: 'Growth and transformation in cities', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (12).jpg', title: 'Cultural Events', description: 'Celebrating Zimbabwean culture', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (13).jpg', title: 'Street Photography', description: 'Capturing candid moments of daily life', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (14).jpg', title: 'Urban Landscapes', description: 'The architectural beauty of cityscapes', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (15).jpg', title: 'Community Portraits', description: 'Faces that tell stories of resilience', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (16).jpg', title: 'Cultural Celebrations', description: 'Festivals and traditions in full color', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (17).jpg', title: 'Market Life', description: 'The bustling energy of local markets', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (18).jpg', title: 'Rural Traditions', description: 'Preserving age-old customs and practices', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (19).jpg', title: 'Modern Expressions', description: 'Contemporary Zimbabwean identity', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (20).jpg', title: 'Artistic Perspectives', description: 'Creative interpretations of reality', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (21).jpg', title: 'Youth Culture', description: 'The next generation of Zimbabweans', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (22).jpg', title: 'Urban Narratives', description: 'Stories told through city scenes', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (23).jpg', title: 'Cultural Fusion', description: 'Where tradition meets modernity', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (24).jpg', title: 'Social Commentary', description: 'Visual stories of societal change', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (25).jpg', title: 'Natural Beauty', description: 'The stunning landscapes of Zimbabwe', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (26).jpg', title: 'Human Connection', description: 'The bonds that unite communities', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (27).jpg', title: 'Economic Life', description: 'The pulse of commerce and trade', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (28).jpg', title: 'Educational Journey', description: 'Learning and growth in action', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (29).jpg', title: 'Healthcare Stories', description: 'Caring for community wellbeing', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (30).jpg', title: 'Transportation Tales', description: 'Moving through the city and country', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (31).jpg', title: 'Industrial Progress', description: 'Development and infrastructure growth', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (32).jpg', title: 'Agricultural Heritage', description: 'The backbone of rural economy', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (33).jpg', title: 'Mining Communities', description: 'Extracting resources and building futures', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (34).jpg', title: 'Traditional Healing', description: 'Ancient wisdom in modern times', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (35).jpg', title: 'Environmental Awareness', description: 'Protecting our natural heritage', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (36).jpg', title: 'Women Empowerment', description: 'Strong voices leading change', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (37).jpg', title: 'Youth Innovation', description: 'Creative solutions for tomorrow', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (38).jpg', title: 'Cultural Preservation', description: 'Safeguarding our heritage', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (39).jpg', title: 'Community Development', description: 'Building better neighborhoods', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (40).jpg', title: 'Social Justice', description: 'Advocating for equality and rights', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (41).jpg', title: 'Economic Empowerment', description: 'Creating opportunities for growth', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (42).jpg', title: 'Cultural Exchange', description: 'Sharing traditions and knowledge', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (43).jpg', title: 'Urban Planning', description: 'Designing cities for the future', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (44).jpg', title: 'Rural Development', description: 'Improving life in the countryside', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (45).jpg', title: 'Education Innovation', description: 'New approaches to learning', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (46).jpg', title: 'Healthcare Access', description: 'Bringing care to communities', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (47).jpg', title: 'Environmental Conservation', description: 'Protecting our natural resources', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (48).jpg', title: 'Cultural Revival', description: 'Reconnecting with our roots', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (49).jpg', title: 'Social Innovation', description: 'Creative solutions to challenges', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (50).jpg', title: 'Community Resilience', description: 'Strength in the face of adversity', artist: 'Bustop TV' },
        { src: '/images/photo/Bustop TV Photography (51).jpg', title: 'Future Visions', description: 'Imagining tomorrow\'s possibilities', artist: 'Bustop TV' }
    ];

    const handleImageClick = (image: { src: string; title: string; description: string; artist: string }) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <Box sx={{ 
            background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
            minHeight: '100vh'
        }}>
            {/* Hero Section */}
            <Box sx={{ 
                position: 'relative',
                color: '#fff',
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                mb: 8,
                overflow: 'hidden'
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
                        src="/images/photo/Bustop TV Photography (41).jpg"
                        alt="Gallery Background"
                        fill
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                    {/* Subtle Dark Overlay */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.3)',
                        zIndex: 2
                    }} />
                </Box>
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
                    <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
                        <Typography variant="h1" sx={{ 
                            fontFamily: 'Josefin Sans', 
                            fontWeight: 800, 
                            fontSize: { xs: '3rem', md: '4rem' },
                            mb: 4,
                            letterSpacing: '0.02em',
                            lineHeight: 1.2
                        }}>
                            Photography Gallery
                        </Typography>
                        <Typography sx={{ 
                            fontFamily: 'Josefin Sans', 
                            fontSize: '1.3rem', 
                            color: '#f0f0f0', 
                            lineHeight: 1.6,
                            fontWeight: 400,
                            mb: 6
                        }}>
                            Visual storytelling through the lens, capturing the essence of Zimbabwean life, culture, and society
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Gallery Header */}
            <Container maxWidth="lg">
                <Box sx={{ 
                    textAlign: 'center', 
                    mb: 12,
                    maxWidth: '800px',
                    mx: 'auto'
                }}>
                    <Typography variant="h2" sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 800, 
                        color: '#E30613',
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        mb: 3,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        Bustop TV Collection
                    </Typography>
                    <Typography sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontSize: '1.2rem', 
                        color: '#666', 
                        lineHeight: 1.8,
                        fontWeight: 400,
                        fontStyle: 'italic',
                        mb: 4
                    }}>
                        A comprehensive visual journey through Zimbabwean life, culture, and society with artistic vision and documentary precision.
                        </Typography>
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            gap: 2
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 1, 
                            background: '#E30613' 
                            }} />
                        <PhotoCamera sx={{ color: '#E30613', fontSize: 24 }} />
                            <Box sx={{ 
                                width: 60, 
                                height: 1, 
                            background: '#E30613' 
                            }} />
                    </Box>
            </Box>

                {/* Featured Exhibition */}
                <Box sx={{ mb: 16 }}>
                    <Typography sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 700, 
                        fontSize: '1.5rem', 
                        color: '#E30613', 
                        mb: 6,
                        textAlign: 'center',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                    }}>
                        Featured Exhibition
                    </Typography>
                    <Box 
                        onClick={() => handleImageClick(photoImages[0])}
                            sx={{ 
                            position: 'relative',
                            height: { xs: '400px', md: '600px' },
                            borderRadius: 4,
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(227, 6, 19, 0.2)',
                            border: '1px solid rgba(227, 6, 19, 0.1)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.02)',
                                boxShadow: '0 25px 80px rgba(227, 6, 19, 0.3)'
                            }
                        }}
                    >
                        <Image
                            src={photoImages[0].src}
                            alt={photoImages[0].title}
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
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                            color: '#fff',
                            p: { xs: 4, md: 6 }
                        }}>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 800, 
                                fontSize: { xs: '1.8rem', md: '2.5rem' }, 
                                color: '#fff', 
                                mb: 2,
                                lineHeight: 1.2
                            }}>
                                {photoImages[0].title}
                            </Typography>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontSize: { xs: '1rem', md: '1.2rem' }, 
                                color: '#f0f0f0', 
                                lineHeight: 1.6,
                                fontWeight: 400,
                                mb: 2
                            }}>
                                {photoImages[0].description}
                            </Typography>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontSize: '0.9rem', 
                                color: '#ccc',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                {photoImages[0].artist}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                
                {/* Gallery Grid */}
                <Box>
                    <Typography sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 700, 
                        fontSize: '1.5rem', 
                        color: '#E30613', 
                        mb: 8,
                        textAlign: 'center',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                    }}>
                        Complete Collection
                    </Typography>
                <Box sx={{ 
                    display: 'grid', 
                        gridTemplateColumns: { 
                            xs: '1fr', 
                            sm: 'repeat(2, 1fr)', 
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)'
                        },
                        gap: { xs: 4, md: 6 },
                        mb: 8
                    }}>
                        {photoImages.slice(1).map((photo, index) => (
                            <Box 
                                key={index} 
                                onClick={() => handleImageClick(photo)}
                                sx={{ 
                                    position: 'relative',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                    transition: 'all 0.6s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-12px) scale(1.02)',
                                        boxShadow: '0 25px 60px rgba(227, 6, 19, 0.25)',
                                        '& .image-overlay': {
                                            opacity: 1
                                        }
                                    }
                                }}
                            >
                                <Box sx={{ 
                                    position: 'relative', 
                                    height: { xs: '250px', md: '300px' },
                                    background: '#f5f5f5'
                                }}>
                                    <Image
                                        src={photo.src}
                                        alt={photo.title}
                                        fill
                                        style={{ 
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s ease'
                                        }}
                                    />
                                    <Box className="image-overlay" sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(135deg, rgba(227, 6, 19, 0.9), rgba(0,0,0,0.8))',
                                        color: '#fff',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.6s ease',
                                        p: 4,
                                        textAlign: 'center'
                                    }}>
                                        <Typography sx={{ 
                                            fontFamily: 'Josefin Sans', 
                                            fontWeight: 700, 
                                            fontSize: { xs: '1.2rem', md: '1.4rem' }, 
                                            color: '#fff', 
                                            mb: 2,
                                            lineHeight: 1.3
                                        }}>
                                            {photo.title}
                                        </Typography>
                                        <Typography sx={{ 
                                            fontFamily: 'Josefin Sans', 
                                            fontSize: { xs: '0.9rem', md: '1rem' }, 
                                            color: '#f0f0f0', 
                                            lineHeight: 1.6,
                                            fontWeight: 400,
                                            mb: 2
                                        }}>
                                            {photo.description}
                                        </Typography>
                                            <Typography sx={{ 
                                            fontFamily: 'Josefin Sans', 
                                            fontSize: '0.8rem', 
                                            color: '#ccc',
                                            fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em'
                                            }}>
                                                {photo.artist}
                                            </Typography>
                                        </Box>
                                    </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Gallery Footer */}
                <Box sx={{ 
                    textAlign: 'center', 
                    mt: 12,
                    py: 8,
                    borderTop: '1px solid rgba(227, 6, 19, 0.2)'
                }}>
                    <Typography sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 800, 
                        fontSize: '1.3rem', 
                        color: '#E30613', 
                        mb: 3,
                        letterSpacing: '0.05em'
                    }}>
                        "Photography is the art of observation"
                    </Typography>
                    <Typography sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontSize: '1rem', 
                        color: '#666', 
                        lineHeight: 1.6,
                        fontWeight: 400,
                        fontStyle: 'italic'
                    }}>
                        Each image tells a story, captures a moment, and preserves the essence of Zimbabwean life for future generations.
                    </Typography>
                </Box>
            </Container>

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
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
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
                                    {selectedImage.title}
                                </Typography>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontSize: '1.1rem', 
                                    color: '#f0f0f0', 
                                    lineHeight: 1.6,
                                    fontWeight: 400,
                                    mb: 2
                                }}>
                                    {selectedImage.description}
                                </Typography>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontSize: '0.9rem', 
                                    color: '#ccc',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>
                                    {selectedImage.artist}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
} 