'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Awards', href: '/awards' },
    { label: 'Clients', href: '/clients' },
    { label: 'Contact', href: '/contact' },
    { label: 'News', href: 'https://bustop.tv', external: true },
    { label: 'Programs', href: '/programs' },
    { label: 'Projects', href: '/projects' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 1 }}>
            <Toolbar sx={{ py: 3 }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <Image
                        src="/images/logos/Bustop TV Logo 311px.png"
                        alt="Bustop TV Logo"
                        width={96}
                        height={96}
                        style={{ marginRight: 12, transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)', cursor: 'pointer' }}
                        className="bustop-logo-anim"
                    />
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                {/* Hamburger menu for mobile */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawerOpen(true)}
                        sx={{ color: '#E30613' }}
                    >
                        <MenuIcon sx={{ fontSize: 36 }} />
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                        PaperProps={{ sx: { width: 240, background: '#fff' } }}
                    >
                        <List>
                            {navLinks.map((link) => (
                                <ListItem key={link.href} disablePadding>
                                    <ListItemButton
                                        component={link.external ? 'a' : Link}
                                        href={link.href}
                                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        selected={pathname === link.href}
                                        onClick={() => setDrawerOpen(false)}
                                        sx={{
                                            color: '#E30613',
                                            fontFamily: 'Josefin Sans',
                                            fontWeight: pathname === link.href ? 900 : 400,
                                            fontSize: '1.15rem',
                                            textTransform: 'none',
                                            borderLeft: pathname === link.href ? '4px solid #E30613' : 'none',
                                            borderRadius: 0,
                                            px: 2,
                                        }}
                                    >
                                        <ListItemText primary={link.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Box>
                {/* Horizontal nav for md+ */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Button
                                key={link.href}
                                component={link.external ? 'a' : Link}
                                href={link.href}
                                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                sx={{
                                    color: '#E30613',
                                    fontFamily: 'Josefin Sans',
                                    fontWeight: isActive ? 900 : 400,
                                    fontSize: '1.35rem',
                                    textTransform: 'none',
                                    px: 2,
                                    borderBottom: isActive ? '2px solid #E30613' : 'none',
                                    borderRadius: 0,
                                }}
                            >
                                {link.label}
                            </Button>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
} 