import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MissionVision() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 10 }, px: 2, textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#E30613', mb: 4 }}>
                Our Mission & Vision
            </Typography>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.12rem', color: '#222', mb: 4, maxWidth: 700, mx: 'auto', textAlign: 'center' }}>
                At Bustop TV, our mission and vision guide every story we tell. We believe in the power of laughter to challenge, connect, and transform society.
            </Typography>
            <Box sx={{ maxWidth: 700, mx: 'auto' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', mb: 2 }}>
                    Mission
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.12rem', color: '#222', mb: 4 }}>
                    To use satire as a tool for awareness, empowerment, and resistance—amplifying voices and provoking thought through unapologetic creativity.
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#FFD600', mb: 2 }}>
                    Vision
                </Typography>
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.12rem', color: '#222' }}>
                    A free, expressive Zimbabwe where laughter inspires change and comedy fuels conversation.
                </Typography>
            </Box>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.08rem', color: '#444', mt: 4, textAlign: 'center' }}>
                These values are the heartbeat of Bustop TV—fueling our creativity and inspiring our audience to see the world differently.
            </Typography>
        </Box>
    );
} 