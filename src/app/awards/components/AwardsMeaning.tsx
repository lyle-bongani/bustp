import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function AwardsMeaning() {
    return (
        <Box component="section" sx={{ width: '100%', background: 'rgba(255,215,0,0.03)', py: { xs: 6, md: 10 }, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: 700, mx: 'auto', display: 'flex', alignItems: 'center', gap: 2, background: 'none', p: 0 }}>
                <FormatQuoteIcon sx={{ fontSize: 48, color: '#FFD700', mr: 2 }} />
                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '1.18rem', color: '#FFD700', fontWeight: 700, fontStyle: 'italic', textShadow: '0 1px 8px #fff' }}>
                    “Each award isn’t just a win for Bustop TV—it’s a win for fearless storytelling, for young creators, and for every Zimbabwean who believes in truth through humor.”
                </Typography>
            </Box>
        </Box>
    );
} 