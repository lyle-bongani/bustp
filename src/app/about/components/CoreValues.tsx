"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState, useRef } from 'react';

export default function CoreValues() {
    // const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 10 }, px: 2 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ 
                    fontFamily: 'Josefin Sans', 
                    fontWeight: 700, 
                    fontSize: { xs: '2rem', md: '2.5rem' }, 
                    color: '#E30613', 
                    mb: 8, 
                    textAlign: 'center',
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -15,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 80,
                        height: 4,
                        background: 'linear-gradient(90deg, #E30613 0%, #FFD700 100%)',
                        borderRadius: 2
                    }
                }}>
                    Our Core Values
                </Typography>
                
                {/* What We Stand For - Circular Grid */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h3" sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 700, 
                        fontSize: { xs: '1.8rem', md: '2.2rem' }, 
                        color: '#E30613', 
                        mb: 6,
                        textAlign: 'center'
                    }}>
                        What We Stand For
                    </Typography>
                    
                                            <Box 
                        ref={carouselRef}
                        sx={{ 
                            display: 'flex',
                            gap: 3,
                            overflowX: 'auto',
                            scrollBehavior: 'smooth',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none'
                            },
                            cursor: isDragging ? 'grabbing' : 'grab',
                            userSelect: 'none',
                            '&:active': {
                                cursor: 'grabbing'
                            },
                            px: 8,
                            mx: -8,
                            minHeight: '280px'
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    >
                        {[
                            { number: '01', title: 'Freedom of expression', desc: 'We value free speech and expression on our part and in promoting this as a human right.' },
                            { number: '02', title: 'Creativity', desc: 'It is important to us to maintain a daily continuous process of creativity.' },
                            { number: '03', title: 'Game changing', desc: 'Making radical, significant and noticeable changes in content creation and reaching marginalised communities.' },
                            { number: '04', title: 'Humour', desc: 'Satire enables digestible content. Difficult subjects become approachable when broken down in easy vocabulary.' },
                            { number: '05', title: 'Influential', desc: 'To have major impact in communities, on policy and the world with our content.' }
                        ].map((item, index) => (
                            <Box key={index} sx={{ 
                                width: { xs: '180px', sm: '200px', md: '220px' },
                                height: { xs: '180px', sm: '200px', md: '220px' },
                                background: 'linear-gradient(135deg, #E30613 0%, #c70510 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 3,
                                textAlign: 'center',
                                color: '#fff',
                                transition: 'box-shadow 0.3s ease',
                                flexShrink: 0,
                                '&:hover': {
                                    boxShadow: '0 10px 30px rgba(227, 6, 19, 0.3)'
                                }
                            }}>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontWeight: 900, 
                                    fontSize: { xs: '1.5rem', md: '2rem' }, 
                                    mb: 1,
                                    opacity: 0.8
                                }}>
                                    {item.number}
                                </Typography>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontWeight: 700, 
                                    fontSize: { xs: '0.9rem', md: '1rem' }, 
                                    mb: 1,
                                    lineHeight: 1.2
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontSize: { xs: '0.7rem', md: '0.8rem' }, 
                                    opacity: 0.9,
                                    lineHeight: 1.3
                                }}>
                                    {item.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                
                {/* What Makes Us Different - Circular Grid */}
                <Box>
                    <Typography variant="h3" sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 700, 
                        fontSize: { xs: '1.8rem', md: '2.2rem' }, 
                        color: '#E30613', 
                        mb: 4,
                        mt: -2,
                        textAlign: 'center'
                    }}>
                        What Makes Us Different
                    </Typography>
                    
                    <Box 
                        sx={{ 
                            display: 'flex',
                            gap: 3,
                            overflowX: 'auto',
                            scrollBehavior: 'smooth',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none'
                            },
                            cursor: isDragging ? 'grabbing' : 'grab',
                            userSelect: 'none',
                            '&:active': {
                                cursor: 'grabbing'
                            },
                            px: 8,
                            mx: -8,
                            minHeight: '280px'
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    >
                        {[
                            { number: '01', title: 'Edutainment', desc: 'Combining education with entertainment for maximum impact.' },
                            { number: '02', title: 'State of the art filming equipment', desc: 'Professional quality content production capabilities.' },
                            { number: '03', title: 'Marginalised communities reach', desc: 'Dedicated focus on reaching underserved populations.' },
                            { number: '04', title: 'Content speaks to power', desc: 'Fearless journalism that challenges authority and status quo.' },
                            { number: '05', title: 'Policy influence', desc: 'Our content drives real change in policy and governance.' },
                            { number: '06', title: 'Socially conscious', desc: 'Commitment to social justice and human rights advocacy.' },
                            { number: '07', title: 'Editorial independence', desc: 'Complete freedom in editorial decisions and content creation.' },
                            { number: '08', title: 'Brand image: fearless', desc: 'Known for bold, unapologetic content that challenges norms.' }
                        ].map((item, index) => (
                            <Box key={index} sx={{ 
                                width: { xs: '180px', sm: '200px', md: '220px' },
                                height: { xs: '180px', sm: '200px', md: '220px' },
                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 3,
                                textAlign: 'center',
                                color: '#fff',
                                transition: 'box-shadow 0.3s ease',
                                flexShrink: 0,
                                '&:hover': {
                                    boxShadow: '0 10px 30px rgba(255, 215, 0, 0.3)'
                                }
                            }}>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontWeight: 900, 
                                    fontSize: { xs: '1.5rem', md: '2rem' }, 
                                    mb: 1,
                                    opacity: 0.8
                                }}>
                                    {item.number}
                                </Typography>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontWeight: 700, 
                                    fontSize: { xs: '0.9rem', md: '1rem' }, 
                                    mb: 1,
                                    lineHeight: 1.2
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontSize: { xs: '0.7rem', md: '0.8rem' }, 
                                    opacity: 0.9,
                                    lineHeight: 1.3
                                }}>
                                    {item.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
} 