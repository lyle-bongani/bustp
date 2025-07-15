import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

const team = [
    { name: 'Jane Doe', role: 'Co-Founder', img: '/images/pics/1358210.webp', bio: 'Satirist, writer, and creative lead.' },
    { name: 'John Smith', role: 'Producer', img: '/images/pics/1358210.webp', bio: 'Production and logistics wizard.' },
    { name: 'Tariro Moyo', role: 'Performer', img: '/images/pics/1358210.webp', bio: 'Actor and improv specialist.' },
    { name: 'Simba Chikore', role: 'Editor', img: '/images/pics/1358210.webp', bio: 'Video editing and post-production.' },
];

export default function MeetTheTeam() {
    return (
        <Box component="section" sx={{ width: '100%', background: '#fff', py: { xs: 6, md: 10 }, px: 2 }}>
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: { xs: '2rem', md: '2.2rem' }, color: '#E30613', mb: 4, textAlign: 'center' }}>
                Meet the Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {team.map((member, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={idx}>
                        <Card sx={{ borderRadius: 3, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar src={member.img} alt={member.name} sx={{ width: 80, height: 80, mb: 2 }} />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, color: '#E30613', fontSize: '1.1rem', mb: 0.5 }}>{member.name}</Typography>
                                <Typography sx={{ fontFamily: 'Josefin Sans', color: '#FFD600', fontSize: '1rem', mb: 1 }}>{member.role}</Typography>
                                <Typography sx={{ fontFamily: 'Josefin Sans', color: '#222', fontSize: '0.98rem' }}>{member.bio}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
} 