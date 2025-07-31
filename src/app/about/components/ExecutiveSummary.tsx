import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function ExecutiveSummary() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fafafa', py: { xs: 6, md: 10 }, px: 2 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#E30613', mb: 6, textAlign: 'center' }}>
                    Executive Summary
                </Typography>
                
                <Box sx={{ maxWidth: 900, mx: 'auto' }}>
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.1rem', color: '#333', mb: 4, lineHeight: 1.8 }}>
                        Bustop TV is a Zimbabwean media organization that produces satirical content to address social issues and provide alternative perspectives on current events. Our mission is to amplify marginalized voices and challenge the status quo through edutainment.
                    </Typography>
                    
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.1rem', color: '#333', mb: 4, lineHeight: 1.8 }}>
                        Through our innovative approach to storytelling and commitment to authentic representation, we have built a loyal audience of over 100,000 subscribers and reached millions of viewers across Zimbabwe and the diaspora.
                    </Typography>
                    
                    <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.1rem', color: '#333', lineHeight: 1.8 }}>
                        Our strategic focus areas include content production, audience engagement, capacity building, and expanding our reach to serve more communities across Zimbabwe and beyond.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
} 