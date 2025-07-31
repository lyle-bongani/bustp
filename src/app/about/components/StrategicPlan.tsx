"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TrendingUp, Flag, Lightbulb, Group } from '@mui/icons-material';

export default function StrategicPlan() {
    const objectives = [
        {
            icon: <TrendingUp />,
            title: "Define Mission & Values",
            description: "Define the mission, vision and values of Bustop TV in providing edutainment and alternative media that drives social change and challenges the status quo."
        },
        {
            icon: <Flag />,
            title: "Identify Focus Areas",
            description: "Identify focus areas and define the commitment to service levels Bustop will provide to its stakeholders."
        },
        {
            icon: <Lightbulb />,
            title: "Set Strategic Goals",
            description: "Set strategic goals and define clear objectives based on their impact and alignment to take our organization to a significantly higher level of performance over the next three years."
        },
        {
            icon: <Group />,
            title: "Communicate Path Forward",
            description: "Communicate a clear path forward that inspires staff to ascend to the next level."
        }
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
                    Our Plan 2022 - 2025
                </Typography>

                {/* Introduction */}
                <Typography sx={{ 
                    fontFamily: 'Inter', 
                    fontSize: '1.1rem', 
                    color: '#666', 
                    lineHeight: 1.7,
                    mb: 8,
                    textAlign: 'center',
                    maxWidth: 800,
                    mx: 'auto'
                }}>
                    Bustop TV has developed its first comprehensive plan with capacity from International Media Support. The planning process consisted of five virtual workshops with a facilitator, Henrik Keith Hansen.
                </Typography>

                {/* Two Column Content */}
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
                    gap: 6,
                    mb: 8
                }}>
                    <Typography sx={{ 
                        fontFamily: 'Inter', 
                        fontSize: '1rem', 
                        color: '#333', 
                        lineHeight: 1.7
                    }}>
                        Over the next three years, Bustop TV will reach new horizons by proactively focusing on staff capacity building, content production, distribution, quality and innovation initiatives.
                    </Typography>
                    
                    <Typography sx={{ 
                        fontFamily: 'Inter', 
                        fontSize: '1rem', 
                        color: '#333', 
                        lineHeight: 1.7
                    }}>
                        Bustop TV will identify high impact areas aligned with the overall vision and mission of the organisation. We will establish goals, define objectives and devise actionable plans to achieve them.
                    </Typography>
                </Box>

                {/* Roadmap Statement */}
                <Typography sx={{ 
                    fontFamily: 'Inter', 
                    fontSize: '1rem', 
                    color: '#333', 
                    lineHeight: 1.7,
                    mb: 8,
                    textAlign: 'center',
                    fontStyle: 'italic',
                    maxWidth: 900,
                    mx: 'auto'
                }}>
                    Serving as a roadmap charting the course for the next three years, this plan will guide decisions, influence behaviours and inspire confidence in the mission of our organization.
                </Typography>

                {/* Objectives Section */}
                <Typography variant="h3" sx={{ 
                    fontFamily: 'Josefin Sans', 
                    fontWeight: 700, 
                    fontSize: { xs: '1.8rem', md: '2.2rem' }, 
                    color: '#E30613', 
                    mb: 6,
                    textAlign: 'center'
                }}>
                    Our Overall Objectives
                </Typography>

                {/* Objectives Grid */}
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, 
                    gap: 4
                }}>
                    {objectives.map((objective, index) => (
                        <Box key={index} sx={{ 
                            textAlign: 'center',
                            p: 4,
                            background: '#fff',
                            borderRadius: 3,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 8px 30px rgba(227, 6, 19, 0.15)'
                            }
                        }}>
                            <Box sx={{ 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #E30613 0%, #FFD700 100%)',
                                mx: 'auto',
                                mb: 3,
                                boxShadow: '0 4px 15px rgba(227, 6, 19, 0.3)',
                                '& .MuiSvgIcon-root': {
                                    fontSize: '2rem',
                                    color: '#fff'
                                }
                            }}>
                                {objective.icon}
                            </Box>
                            
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 700, 
                                fontSize: '1.1rem', 
                                color: '#E30613', 
                                mb: 2
                            }}>
                                {objective.title}
                            </Typography>
                            
                            <Typography sx={{ 
                                fontFamily: 'Inter', 
                                fontSize: '0.9rem', 
                                color: '#666', 
                                lineHeight: 1.6
                            }}>
                                {objective.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
} 