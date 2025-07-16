import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import StarIcon from '@mui/icons-material/Star';

const stats = [
    { icon: <PlayCircleFilledIcon sx={{ fontSize: 48, color: '#E30613' }} />, label: 'Videos Produced', value: '500+' },
    { icon: <GroupIcon sx={{ fontSize: 48, color: '#FFD600' }} />, label: 'Followers', value: '250,000+' },
    { icon: <PublicIcon sx={{ fontSize: 48, color: '#E30613' }} />, label: 'Countries Reached', value: '15+' },
    { icon: <StarIcon sx={{ fontSize: 48, color: '#FFD600' }} />, label: 'Featured On', value: 'BBC, Al Jazeera, Zim News' },
];

export default function ImpactReach() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 10 }, px: 2 }}>
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#E30613', mb: 4, textAlign: 'center' }}>
                Impact & Reach
            </Typography>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 4,
            }}>
                {stats.map((stat: { icon: React.ReactNode; label: string; value: string }, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' },
                            minWidth: 220,
                            maxWidth: 320,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: 2,
                            m: 1,
                            background: '#fff',
                            borderRadius: 4,
                            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                        }}
                    >
                        {stat.icon}
                        <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', fontSize: '1.5rem', mt: 1 }}>{stat.value}</Typography>
                        <Typography sx={{ fontFamily: 'Josefin Sans', color: '#222', fontSize: '1.08rem', mt: 0.5 }}>{stat.label}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
} 