"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { People, Groups, Person } from '@mui/icons-material';

export default function MeetTheTeam() {
    // Actual team data
    const teamMembers = [
        {
            name: "LUCKY AARONI",
            role: "Founder & Producer",
            image: "/images/team/lucky-aaroni.jpg", // Replace with actual image path
            description: "Leading the vision and strategic direction of Bustop TV, overseeing all production processes and content delivery."
        },
        {
            name: "LEWIS AARONI",
            role: "Director of Photography/Video Editor",
            image: "/images/team/lewis-aaroni.jpg", // Replace with actual image path
            description: "Creating compelling visual narratives and ensuring post-production excellence across all content."
        },
        {
            name: "KUDAKWASHE VHENGE",
            role: "News Editor",
            image: "/images/team/kudakwashe-vhenge.jpg", // Replace with actual image path
            description: "Ensuring quality and accuracy in all editorial content with strategic oversight of news coverage."
        },
        {
            name: "DERECK NZIYAKWI",
            role: "Creative Writer | Director | Actor",
            image: "/images/team/dereck-nziyakwi.jpg", // Replace with actual image path
            description: "Multi-talented creative professional driving storytelling excellence and on-screen performance."
        },
        {
            name: "MELISSA MWEDZI",
            role: "Research, Monitoring & Evaluation Officer",
            image: "/images/team/melissa-mwedzi.jpg", // Replace with actual image path
            description: "Overseeing research initiatives and evaluating the impact of our content on audiences."
        },
        {
            name: "SILVIA TSITSI MUKWINDIDZA",
            role: "Admin & Communication Officer",
            image: "/images/team/silvia-mukwindidza.jpg", // Replace with actual image path
            description: "Managing administrative operations and external communications for Bustop TV."
        },
        {
            name: "EUNICIE MASVOSVA",
            role: "Admin & Finance Officer",
            image: "/images/team/eunicie-masvosva.jpg", // Replace with actual image path
            description: "Overseeing financial management and administrative processes to ensure organizational efficiency."
        },
        {
            name: "SAMANTHA KUREYA",
            role: "Actress | Presenter",
            image: "/images/team/samantha-kureya.jpg", // Replace with actual image path
            description: "Bringing stories to life through compelling on-screen performances and engaging presentations."
        },
        {
            name: "SHARON CHIDEU",
            role: "Actress & Presenter",
            image: "/images/team/sharon-chideu.jpg", // Replace with actual image path
            description: "Delivering authentic performances and connecting with audiences through dynamic presentations."
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
                    Meet the Team
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
                    The passionate individuals behind Bustop TV's mission to amplify voices and tell authentic stories
                </Typography>

                {/* Team Members Grid */}
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, 
                    gap: 6,
                    mb: 8
                }}>
                    {teamMembers.map((member, index) => (
                        <Box key={index} sx={{ 
                            textAlign: 'center',
                            p: 3
                        }}>
                            {/* Image Placeholder */}
                            <Box sx={{ 
                                width: 120,
                                height: 120,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #E30613 0%, #FFD700 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto',
                                mb: 3,
                                boxShadow: '0 8px 25px rgba(227, 6, 19, 0.3)',
                                '& .MuiSvgIcon-root': {
                                    fontSize: '3rem',
                                    color: '#fff'
                                }
                            }}>
                                <Person />
                            </Box>

                            {/* Member Info */}
                            <Typography sx={{ 
                                fontFamily: 'Josefin Sans', 
                                fontWeight: 700, 
                                fontSize: '1.1rem', 
                                color: '#E30613', 
                                mb: 1
                            }}>
                                {member.name}
                            </Typography>
                            <Typography sx={{ 
                                fontFamily: 'Inter', 
                                fontWeight: 600, 
                                fontSize: '0.9rem', 
                                color: '#666', 
                                mb: 2,
                                fontStyle: 'italic'
                            }}>
                                {member.role}
                            </Typography>
                            <Typography sx={{ 
                                fontFamily: 'Inter', 
                                fontSize: '0.85rem', 
                                color: '#555', 
                                lineHeight: 1.6
                            }}>
                                {member.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
             </Container>
         </Box>
     );
} 