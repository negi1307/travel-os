import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const footerData = [
    {
      footerType: 'ABOUT JUMEIRAH GROUP',
    },
    {
      footerType: 'HOTEL DEVELOPMENT',
    },
    {
      footerType: 'RESIDENCES',
    },
    {
      footerType: 'PRESS CENTRE',
    },
    {
      footerType: 'PRIVACY POLICY',
    },
    {
      footerType: 'TERMS & CONDITIONS',
    },
  ];

  const footerData2 = [
    {
      footerType: 'PHISHING',
    },
    {
      footerType: 'CONTACT US',
    },
    {
      footerType: 'COVID-19 UPDATES',
    },
  ];

  return (
    <Box border={1} sx={{ backgroundColor: '#252525' }}>
      <Container>
        <Box display={'flex'} paddingY={5} justifyContent={'space-between'}>
          <Box display={'flex'}>
            <Box>
              {footerData?.map((item) => {
                return (
                  <>
                    <Typography color={'primary'} marginY={4} variant={'body2'}>
                      {item.footerType}
                    </Typography>
                  </>
                );
              })}
            </Box>
            <Box marginLeft={5}>
              {footerData2?.map((item) => {
                return (
                  <>
                    <Typography color={'primary'} marginY={4} variant={'body2'}>
                      {item.footerType}
                    </Typography>
                  </>
                );
              })}
            </Box>
          </Box>
          <Box marginY={4}>
            <Typography variant="h2" color={'primary'}>
              Sign up to the Jumeirah newsletter
            </Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Box>
                <Typography color={'primary'}>
                  {' '}
                  <FacebookIcon />
                </Typography>
              </Box>
              <Box>
                <Typography color={'primary'}>
                  {' '}
                  <InstagramIcon />
                </Typography>
              </Box>
              <Box>
                <Typography color={'primary'}>
                  {' '}
                  <TwitterIcon />
                </Typography>
              </Box>
              <Box>
                <Typography color={'primary'}>
                  {' '}
                  <YouTubeIcon />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box>
        <Typography textAlign={'center'} color={'primary'}>
          COPYRIGHT JUMEIRAH INTERNATIONAL LLC $(YEAR)
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
