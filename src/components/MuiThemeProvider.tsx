'use client';

import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { ReactNode } from 'react';

const theme = createTheme({
    palette: {
        primary: { main: '#E30613' },
        secondary: { main: '#FFD600' },
        background: { default: '#fff' },
        text: { primary: '#000' },
    },
    typography: {
        fontFamily: 'Josefin Sans, Arial, sans-serif',
    },
});

export default function MuiThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
} 