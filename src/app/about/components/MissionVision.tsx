import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

export default function MissionVision() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 10 }, px: 2 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' }, color: '#E30613', mb: 4, textAlign: 'center', px: 2 }}>
                    Our Mission & Vision
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', sm: '1.1rem', md: '1.12rem' }, color: '#222', mb: 6, maxWidth: 700, mx: 'auto', textAlign: 'center', px: 2, lineHeight: 1.6 }}>
                    At Bustop TV, our mission and vision guide every story we tell. We believe in the power of laughter to challenge, connect, and transform society.
                </Typography>
                
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: { xs: 3, md: 4 }, maxWidth: 900, mx: 'auto', px: { xs: 1, sm: 2 } }}>
                    <Card sx={{ 
                        p: 4, 
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #E30613 0%, #c4001d 100%)',
                        color: '#fff',
                        borderRadius: 3,
                        boxShadow: '0 8px 32px rgba(227, 6, 19, 0.2)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 12px 40px rgba(227, 6, 19, 0.3)'
                        }
                    }}>
                        <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '1.8rem', md: '2rem' }, mb: 3, color: '#fff' }}>
                            Mission
                        </Typography>
                        <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.1rem', color: '#fff', lineHeight: 1.7 }}>
                            To use satire as a tool for awareness, empowerment, and resistance—amplifying voices and provoking thought through unapologetic creativity.
                        </Typography>
                    </Card>
                    
                    <Card sx={{ 
                        p: 4, 
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #FFD600 0%, #FFC107 100%)',
                        color: '#222',
                        borderRadius: 3,
                        boxShadow: '0 8px 32px rgba(255, 214, 0, 0.2)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 12px 40px rgba(255, 214, 0, 0.3)'
                        }
                    }}>
                        <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '1.8rem', md: '2rem' }, mb: 3, color: '#222' }}>
                            Vision
                        </Typography>
                        <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.1rem', color: '#222', lineHeight: 1.7 }}>
                            A free, expressive Zimbabwe where laughter inspires change and comedy fuels conversation.
                        </Typography>
                    </Card>
                </Box>
                
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: { xs: '0.95rem', sm: '1rem', md: '1.08rem' }, color: '#444', mt: 6, textAlign: 'center', maxWidth: 700, mx: 'auto', px: 2, lineHeight: 1.6 }}>
                    These values are the heartbeat of Bustop TV—fueling our creativity and inspiring our audience to see the world differently.
                </Typography>
            </Container>
        </Box>
    );
} 