"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { 
    People, 
    TrendingUp, 
    Visibility, 
    Subscriptions, 
    Public, 
    Psychology,
    Verified
} from '@mui/icons-material';

export default function AudienceReach() {
    const audienceGroups = [
        { icon: <People />, title: 'All Zimbabweans online', desc: 'Living in the country or in the diaspora.' },
        { icon: <Psychology />, title: 'Youths', desc: 'The next generation of leaders and change-makers.' },
        { icon: <People />, title: 'Women', desc: 'Amplifying women\'s voices and perspectives.' },
        { icon: <Public />, title: 'Marginalised groups', desc: 'People living with disabilities, LGBTQI+ community, rural and remote communities.' }
    ];

    const impactStats = [
        { icon: <TrendingUp />, number: '1M+', label: 'reach', desc: 'Local and abroad Zimbabweans engaging with our content.', percentage: 100 },
        { icon: <Visibility />, number: '46M+', label: 'YouTube views', desc: 'Accumulated views across our channel to date.', percentage: 85 },
        { icon: <Subscriptions />, number: '100K+', label: 'subscribers', desc: 'YouTube Creator Awards recipient for reaching this milestone.', percentage: 70 },
        { icon: <Public />, number: '5', label: 'top countries', desc: 'South Africa, Botswana, UK, Mozambique, Zimbabwe.', percentage: 60 }
    ];

    return (
        <Box component="section" sx={{ 
            width: '100%', 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            py: { xs: 8, md: 12 }, 
            px: 2 
        }}>
            <Container maxWidth="lg">
                {/* Main Title */}
                <Typography variant="h2" sx={{ 
                    fontFamily: 'Josefin Sans', 
                    fontWeight: 900, 
                    fontSize: { xs: '2.5rem', md: '3rem' }, 
                    color: '#E30613', 
                    mb: 2, 
                    textAlign: 'center',
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 100,
                        height: 4,
                        background: 'linear-gradient(90deg, #E30613 0%, #FFD700 100%)',
                        borderRadius: 2
                    }
                }}>
                    Our Audience & Reach
                </Typography>

                <Typography variant="h5" sx={{ 
                    fontFamily: 'Inter', 
                    fontWeight: 300, 
                    fontSize: { xs: '1.1rem', md: '1.3rem' }, 
                    color: '#666', 
                    mb: 8, 
                    textAlign: 'center',
                    maxWidth: 600,
                    mx: 'auto'
                }}>
                    Connecting with Zimbabweans worldwide through compelling content and authentic storytelling
                </Typography>

                {/* Who We Serve Section */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h3" sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 700, 
                        fontSize: { xs: '2rem', md: '2.5rem' }, 
                        color: '#E30613', 
                        mb: 6,
                        textAlign: 'center'
                    }}>
                        Who We Serve
                    </Typography>
                    
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, 
                        gap: 6 
                    }}>
                        {audienceGroups.map((group, index) => (
                            <Box key={index} sx={{ 
                                textAlign: 'center',
                                p: 3
                            }}>
                                <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    mb: 3,
                                    '& .MuiSvgIcon-root': {
                                        fontSize: '2.5rem',
                                        color: '#E30613',
                                        opacity: 0.8
                                    }
                                }}>
                                    {group.icon}
                                </Box>
                                <Typography sx={{ 
                                    fontFamily: 'Josefin Sans', 
                                    fontWeight: 700, 
                                    fontSize: '1.1rem', 
                                    color: '#E30613', 
                                    mb: 2,
                                    lineHeight: 1.3
                                }}>
                                    {group.title}
                                </Typography>
                                <Typography sx={{ 
                                    fontFamily: 'Inter', 
                                    fontSize: '0.9rem', 
                                    color: '#666', 
                                    lineHeight: 1.6
                                }}>
                                    {group.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Global Impact Section with Different Graphs */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h3" sx={{ 
                        fontFamily: 'Josefin Sans', 
                        fontWeight: 700, 
                        fontSize: { xs: '2rem', md: '2.5rem' }, 
                        color: '#E30613', 
                        mb: 6,
                        textAlign: 'center'
                    }}>
                        Global Impact
                    </Typography>
                    
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, 
                        gap: 4 
                    }}>
                        {/* 1M+ Reach - Bar Chart */}
                        <Box key={0} sx={{ 
                            textAlign: 'center',
                            p: 4
                        }}>
                            <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                mb: 2,
                                '& .MuiSvgIcon-root': {
                                    fontSize: '2rem',
                                    color: '#E30613',
                                    opacity: 0.9
                                }
                            }}>
                                <TrendingUp />
                            </Box>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 900, 
                                fontSize: '2.2rem', 
                                mb: 1,
                                lineHeight: 1,
                                color: '#E30613'
                            }}>
                                1M+
                            </Typography>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 600, 
                                fontSize: '1rem', 
                                mb: 3,
                                color: '#E30613',
                                opacity: 0.9
                            }}>
                                reach
                            </Typography>
                            
                            {/* Bar Chart */}
                            <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'end', 
                                justifyContent: 'center',
                                height: 80,
                                gap: 1,
                                mb: 2
                            }}>
                                <Box sx={{ 
                                    width: 20, 
                                    height: '60%', 
                                    background: 'linear-gradient(to top, #E30613, #c70510)',
                                    borderRadius: '4px 4px 0 0'
                                }} />
                                <Box sx={{ 
                                    width: 20, 
                                    height: '80%', 
                                    background: 'linear-gradient(to top, #E30613, #c70510)',
                                    borderRadius: '4px 4px 0 0'
                                }} />
                                <Box sx={{ 
                                    width: 20, 
                                    height: '100%', 
                                    background: 'linear-gradient(to top, #E30613, #c70510)',
                                    borderRadius: '4px 4px 0 0'
                                }} />
                                <Box sx={{ 
                                    width: 20, 
                                    height: '70%', 
                                    background: 'linear-gradient(to top, #E30613, #c70510)',
                                    borderRadius: '4px 4px 0 0'
                                }} />
                                <Box sx={{ 
                                    width: 20, 
                                    height: '90%', 
                                    background: 'linear-gradient(to top, #E30613, #c70510)',
                                    borderRadius: '4px 4px 0 0'
                                }} />
                            </Box>
                            
                            <Typography sx={{ 
                                fontFamily: 'Inter', 
                                fontSize: '0.8rem', 
                                color: '#666',
                                lineHeight: 1.5
                            }}>
                                Local and abroad Zimbabweans engaging with our content.
                            </Typography>
                        </Box>

                        {/* 46M+ YouTube Views - Line Chart */}
                        <Box key={1} sx={{ 
                            textAlign: 'center',
                            p: 4
                        }}>
                            <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                mb: 2,
                                '& .MuiSvgIcon-root': {
                                    fontSize: '2rem',
                                    color: '#E30613',
                                    opacity: 0.9
                                }
                            }}>
                                <Visibility />
                            </Box>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 900, 
                                fontSize: '2.2rem', 
                                mb: 1,
                                lineHeight: 1,
                                color: '#E30613'
                            }}>
                                46M+
                            </Typography>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 600, 
                                fontSize: '1rem', 
                                mb: 3,
                                color: '#E30613',
                                opacity: 0.9
                            }}>
                                YouTube views
                            </Typography>
                            
                            {/* Line Chart */}
                            <Box sx={{ 
                                position: 'relative',
                                height: 80,
                                mb: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <svg width="120" height="60" viewBox="0 0 120 60">
                                    <path 
                                        d="M10 50 L30 30 L50 40 L70 20 L90 25 L110 15" 
                                        stroke="#E30613" 
                                        strokeWidth="3" 
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="10" cy="50" r="3" fill="#E30613" />
                                    <circle cx="30" cy="30" r="3" fill="#E30613" />
                                    <circle cx="50" cy="40" r="3" fill="#E30613" />
                                    <circle cx="70" cy="20" r="3" fill="#E30613" />
                                    <circle cx="90" cy="25" r="3" fill="#E30613" />
                                    <circle cx="110" cy="15" r="3" fill="#E30613" />
                                </svg>
                            </Box>
                            
                            <Typography sx={{ 
                                fontFamily: 'Inter', 
                                fontSize: '0.8rem', 
                                color: '#666',
                                lineHeight: 1.5
                            }}>
                                Accumulated views across our channel to date.
                            </Typography>
                        </Box>

                        {/* 100K+ Subscribers - Pie Chart */}
                        <Box key={2} sx={{ 
                            textAlign: 'center',
                            p: 4
                        }}>
                            <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                mb: 2,
                                '& .MuiSvgIcon-root': {
                                    fontSize: '2rem',
                                    color: '#E30613',
                                    opacity: 0.9
                                }
                            }}>
                                <Subscriptions />
                            </Box>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 900, 
                                fontSize: '2.2rem', 
                                mb: 1,
                                lineHeight: 1,
                                color: '#E30613'
                            }}>
                                100K+
                            </Typography>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 600, 
                                fontSize: '1rem', 
                                mb: 3,
                                color: '#E30613',
                                opacity: 0.9
                            }}>
                                subscribers
                            </Typography>
                            
                            {/* Pie Chart */}
                            <Box sx={{ 
                                position: 'relative',
                                width: 80,
                                height: 80,
                                mx: 'auto',
                                mb: 2
                            }}>
                                <svg width="80" height="80" viewBox="0 0 80 80">
                                    <circle cx="40" cy="40" r="35" fill="none" stroke="#E30613" strokeWidth="8" strokeDasharray="220 314" strokeDashoffset="0" />
                                    <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(227, 6, 19, 0.2)" strokeWidth="8" strokeDasharray="314 314" strokeDashoffset="-220" />
                                </svg>
                            </Box>
                            
                            <Typography sx={{ 
                                fontFamily: 'Inter', 
                                fontSize: '0.8rem', 
                                color: '#666',
                                lineHeight: 1.5
                            }}>
                                YouTube Creator Awards recipient for reaching this milestone.
                            </Typography>
                        </Box>

                        {/* 5 Top Countries - World Map Style */}
                        <Box key={3} sx={{ 
                            textAlign: 'center',
                            p: 4
                        }}>
                            <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                mb: 2,
                                '& .MuiSvgIcon-root': {
                                    fontSize: '2rem',
                                    color: '#E30613',
                                    opacity: 0.9
                                }
                            }}>
                                <Public />
                            </Box>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 900, 
                                fontSize: '2.2rem', 
                                mb: 1,
                                lineHeight: 1,
                                color: '#E30613'
                            }}>
                                5
                            </Typography>
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 600, 
                                fontSize: '1rem', 
                                mb: 3,
                                color: '#E30613',
                                opacity: 0.9
                            }}>
                                top countries
                            </Typography>
                            
                            {/* World Map Style Dots */}
                            <Box sx={{ 
                                position: 'relative',
                                width: 100,
                                height: 60,
                                mx: 'auto',
                                mb: 2
                            }}>
                                <Box sx={{ 
                                    position: 'absolute',
                                    top: '20%',
                                    left: '30%',
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: '#E30613'
                                }} />
                                <Box sx={{ 
                                    position: 'absolute',
                                    top: '40%',
                                    left: '50%',
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: '#E30613'
                                }} />
                                <Box sx={{ 
                                    position: 'absolute',
                                    top: '10%',
                                    left: '70%',
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: '#E30613'
                                }} />
                                <Box sx={{ 
                                    position: 'absolute',
                                    top: '60%',
                                    left: '20%',
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: '#E30613'
                                }} />
                                <Box sx={{ 
                                    position: 'absolute',
                                    top: '30%',
                                    left: '80%',
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: '#E30613'
                                }} />
                            </Box>
                            
                            <Typography sx={{ 
                                fontFamily: 'Inter', 
                                fontSize: '0.8rem', 
                                color: '#666',
                                lineHeight: 1.5
                            }}>
                                South Africa, Botswana, UK, Mozambique, Zimbabwe.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* What Our Audience Seeks Section */}
                <Box sx={{ 
                    maxWidth: 1200, 
                    mx: 'auto'
                }}>
                    <Box sx={{ textAlign: 'center', mb: 10 }}>
                        <Typography variant="h3" sx={{ 
                            fontFamily: 'Josefin Sans', 
                            fontWeight: 700, 
                            fontSize: { xs: '2rem', md: '2.5rem' }, 
                            color: '#E30613', 
                            mb: 4
                        }}>
                            What Our Audience Seeks
                        </Typography>
                        <Typography sx={{ 
                            fontFamily: 'Inter', 
                            fontSize: '1.1rem', 
                            color: '#666', 
                            maxWidth: 700,
                            mx: 'auto',
                            lineHeight: 1.6
                        }}>
                            Understanding the needs and preferences of our diverse audience helps us create content that truly resonates and makes an impact.
                        </Typography>
                    </Box>
                    
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, 
                        gap: 6
                    }}>
                        {/* Alternative Media Needs */}
                        <Box sx={{ 
                            background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                            borderRadius: 4,
                            p: 5,
                            border: '1px solid rgba(227, 6, 19, 0.1)',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 4,
                                background: 'linear-gradient(90deg, #E30613 0%, #FFD700 100%)'
                            }
                        }}>
                            <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                mb: 4
                            }}>
                                <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    width: 70,
                                    height: 70,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #E30613 0%, #c70510 100%)',
                                    mr: 3,
                                    boxShadow: '0 8px 25px rgba(227, 6, 19, 0.3)',
                                    '& .MuiSvgIcon-root': {
                                        fontSize: '2rem',
                                        color: '#fff'
                                    }
                                }}>
                                    <People />
                                </Box>
                                <Box>
                                    <Typography sx={{ 
                                        fontFamily: 'Josefin Sans', 
                                        fontWeight: 700, 
                                        fontSize: '1.4rem', 
                                        color: '#E30613',
                                        mb: 0.5
                                    }}>
                                        Alternative Media Needs
                                    </Typography>
                                    <Typography sx={{ 
                                        fontFamily: 'Inter', 
                                        fontSize: '0.9rem', 
                                        color: '#666',
                                        fontStyle: 'italic'
                                    }}>
                                        Voice for the voiceless
                                    </Typography>
                                </Box>
                            </Box>
                            
                            <Typography sx={{ 
                                fontFamily: 'Inter', 
                                fontSize: '1.05rem', 
                                color: '#333', 
                                lineHeight: 1.8,
                                mb: 4
                            }}>
                                Marginalised communities in Zimbabwe are in need of alternative media that captures and expresses their interests. Our audience is seeking comical relief, easy to digest content and freedom to speak from an economic and political frustrating environment.
                            </Typography>
                            
                            <Box sx={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(3, 1fr)', 
                                gap: 2
                            }}>
                                <Box sx={{ 
                                    textAlign: 'center',
                                    p: 2,
                                    borderRadius: 2,
                                    background: 'rgba(227, 6, 19, 0.05)',
                                    border: '1px solid rgba(227, 6, 19, 0.1)'
                                }}>
                                    <Typography sx={{ 
                                        fontFamily: 'Inter', 
                                        fontSize: '0.85rem', 
                                        color: '#E30613',
                                        fontWeight: 600
                                    }}>
                                        Comical Relief
                                    </Typography>
                                </Box>
                                <Box sx={{ 
                                    textAlign: 'center',
                                    p: 2,
                                    borderRadius: 2,
                                    background: 'rgba(227, 6, 19, 0.05)',
                                    border: '1px solid rgba(227, 6, 19, 0.1)'
                                }}>
                                    <Typography sx={{ 
                                        fontFamily: 'Inter', 
                                        fontSize: '0.85rem', 
                                        color: '#E30613',
                                        fontWeight: 600
                                    }}>
                                        Easy to Digest
                                    </Typography>
                                </Box>
                                <Box sx={{ 
                                    textAlign: 'center',
                                    p: 2,
                                    borderRadius: 2,
                                    background: 'rgba(227, 6, 19, 0.05)',
                                    border: '1px solid rgba(227, 6, 19, 0.1)'
                                }}>
                                    <Typography sx={{ 
                                        fontFamily: 'Inter', 
                                        fontSize: '0.85rem', 
                                        color: '#E30613',
                                        fontWeight: 600
                                    }}>
                                        Freedom to Speak
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        
                        {/* Quality Content Standards */}
                        <Box sx={{ 
                            background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                            borderRadius: 4,
                            p: 5,
                            border: '1px solid rgba(255, 215, 0, 0.2)',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 4,
                                background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)'
                            }
                        }}>
                            <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                mb: 4
                            }}>
                                <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    width: 70,
                                    height: 70,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                    mr: 3,
                                    boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
                                    '& .MuiSvgIcon-root': {
                                        fontSize: '2rem',
                                        color: '#fff'
                                    }
                                }}>
                                    <Verified />
                                </Box>
                                <Box>
                                    <Typography sx={{ 
                                        fontFamily: 'Josefin Sans', 
                                        fontWeight: 700, 
                                        fontSize: '1.4rem', 
                                        color: '#E30613',
                                        mb: 0.5
                                    }}>
                                        Quality Content Standards
                                    </Typography>
                                    <Typography sx={{ 
                                        fontFamily: 'Inter', 
                                        fontSize: '0.9rem', 
                                        color: '#666',
                                        fontStyle: 'italic'
                                    }}>
                                        Truth in the digital age
                                    </Typography>
                                </Box>
                            </Box>
                            
                            <Typography sx={{ 
                                fontFamily: 'Inter', 
                                fontSize: '1.05rem', 
                                color: '#333', 
                                lineHeight: 1.8,
                                mb: 4
                            }}>
                                Our audience likes content that is factual and timely in the face of social media, untrained journalists and disinformation.
                            </Typography>
                            
                            <Box sx={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(3, 1fr)', 
                                gap: 2
                            }}>
                                <Box sx={{ 
                                    textAlign: 'center',
                                    p: 2,
                                    borderRadius: 2,
                                    background: 'rgba(255, 215, 0, 0.05)',
                                    border: '1px solid rgba(255, 215, 0, 0.2)'
                                }}>
                                    <Typography sx={{ 
                                        fontFamily: 'Inter', 
                                        fontSize: '0.85rem', 
                                        color: '#E30613',
                                        fontWeight: 600
                                    }}>
                                        Factual Content
                                    </Typography>
                                </Box>
                                <Box sx={{ 
                                    textAlign: 'center',
                                    p: 2,
                                    borderRadius: 2,
                                    background: 'rgba(255, 215, 0, 0.05)',
                                    border: '1px solid rgba(255, 215, 0, 0.2)'
                                }}>
                                    <Typography sx={{ 
                                        fontFamily: 'Inter', 
                                        fontSize: '0.85rem', 
                                        color: '#E30613',
                                        fontWeight: 600
                                    }}>
                                        Timely Information
                                    </Typography>
                                </Box>
                                <Box sx={{ 
                                    textAlign: 'center',
                                    p: 2,
                                    borderRadius: 2,
                                    background: 'rgba(255, 215, 0, 0.05)',
                                    border: '1px solid rgba(255, 215, 0, 0.2)'
                                }}>
                                    <Typography sx={{ 
                                        fontFamily: 'Inter', 
                                        fontSize: '0.85rem', 
                                        color: '#E30613',
                                        fontWeight: 600
                                    }}>
                                        Verified Sources
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
} 