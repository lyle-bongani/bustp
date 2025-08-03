import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function BankingPartners() {
  return (
    <Box sx={{ my: 8, p: 4, background: '#fff', maxWidth: 1100, mx: 'auto', overflowX: 'auto' }}>
      <Typography variant="h3" sx={{ color: '#E30613', mb: 3, fontWeight: 700, textAlign: 'center' }}>
        Banking & Partners
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 4 }, justifyContent: 'center', flexWrap: 'wrap', maxWidth: '100%', overflowX: 'auto' }}>
        <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>Bank Name: Ecobank</Typography>
          <Typography>Account Name: BustopzimTV</Typography>
          <Typography>Account Number: 5783600009627</Typography>
          <Typography>Branch Name: Sam Levy Borrowdale Branch</Typography>
          <Box sx={{ mt: 2 }}>
            <Image src="https://www.greenclimate.fund/sites/default/files/organisation/logo-ecobank.png" alt="Ecobank Logo" width={160} height={64} style={{ height: 64, width: 'auto' }} />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>NGO References</Typography>
          <Box>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Image src="https://landportal.org/sites/default/files/2024-03/Hivos-logo.jpg" alt="Hivos" width={96} height={32} style={{ height: 32, width: 'auto' }} />
              <Box>
                <Typography sx={{ fontWeight: 600 }}>01 Name: Takura Zhangazha</Typography>
                <Typography>Org: Hivos</Typography>
                <Typography>Mobile phone: +263782972589</Typography>
                <Typography>Email: tzhangazha@hivos.org</Typography>
              </Box>
            </Box>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Image src="https://www.luminategroup.com/storage/517/c/magamba-logo@2x-logo.png" alt="Magamba" width={96} height={32} style={{ height: 32, width: 'auto' }} />
              <Box>
                <Typography sx={{ fontWeight: 600 }}>02 Name: Farai Monroe</Typography>
                <Typography>Org: Magamba Network</Typography>
                <Typography>Mobile phone: +263 772 929 231</Typography>
                <Typography>Email: farai@magambanetwork.com</Typography>
              </Box>
            </Box>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Image src="https://www.mediasupport.org/wp-content/uploads/2018/09/Logo-converted_wp.jpg" alt="IMS" width={96} height={32} style={{ height: 32, width: 'auto' }} />
              <Box>
                <Typography sx={{ fontWeight: 600 }}>03 Name: Simbiso Marimbe</Typography>
                <Typography>Org: International Media Support</Typography>
                <Typography>Mobile number: +263 772719709</Typography>
                <Typography>Email: simbiso.marimbe@Inu.se</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Image src="/images/logos/Bustop TV Logo 311px.png" alt="Bustop TV Logo" width={311} height={120} style={{ height: 120, width: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4, flexWrap: 'wrap', overflowX: 'auto', width: '100%', maxWidth: '100vw' }}>
        <a href="https://www.ecobank.com/" target="_blank" rel="noopener noreferrer">
          <Image src="https://www.greenclimate.fund/sites/default/files/organisation/logo-ecobank.png" alt="Ecobank" width={160} height={64} style={{ height: 64, width: 'auto', maxWidth: '100%' }} />
        </a>
        <a href="https://www.hivos.org/" target="_blank" rel="noopener noreferrer">
          <Image src="https://landportal.org/sites/default/files/2024-03/Hivos-logo.jpg" alt="Hivos" width={160} height={64} style={{ height: 64, width: 'auto', maxWidth: '100%' }} />
        </a>
        <a href="https://fojo.se/" target="_blank" rel="noopener noreferrer">
          <Image src="https://fojo.se/en/wp-content/uploads/sites/3/2024/03/Fojo_nude-800.png" alt="Fojo" width={160} height={64} style={{ height: 64, width: 'auto', maxWidth: '100%' }} />
        </a>
        <a href="https://osisa.org/" target="_blank" rel="noopener noreferrer">
          <Image src="https://grassrootsjusticenetwork.org/wp-content/uploads/2018/12/OSISA-Logo.png-high-resolution.png" alt="OSISA" width={160} height={64} style={{ height: 64, width: 'auto', maxWidth: '100%' }} />
        </a>
        <a href="https://www.mediasupport.org/" target="_blank" rel="noopener noreferrer">
          <Image src="https://www.mediasupport.org/wp-content/uploads/2018/09/Logo-converted_wp.jpg" alt="IMS" width={160} height={64} style={{ height: 64, width: 'auto', maxWidth: '100%' }} />
        </a>
        <a href="https://magamba.network/" target="_blank" rel="noopener noreferrer">
          <Image src="https://www.luminategroup.com/storage/517/c/magamba-logo@2x-logo.png" alt="Magamba" width={160} height={64} style={{ height: 64, width: 'auto', maxWidth: '100%' }} />
        </a>
      </Box>
    </Box>
  );
}
