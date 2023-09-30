import { Box, Grid, Typography } from '@mui/material';

const Footer = (props: any) => {
  const { meneItme } = props;
  const { faceBookIcon, instagramIcon, twitterIcon, youTubeIcon } =
    meneItme?.[8]?.footerIcon?.[0];

  let footerData = [
    {
      item: 'About Kerzner Group',
    },
    {
      item: 'Our Resorts',
    },
    {
      item: 'Press Centre',
    },
    {
      item: 'Privacy Policy',
    },
    {
      item: 'Terms & Conditions',
    },
  ];
  let footerdataleftSide = [{ item: 'Phishing' }, { item: 'Contact Us' }];
  return (
    <>
      <Box className="footer_mainPrntColor">
        <Box className="footer_mainPrnt">
          <Grid
            container
            spacing={2}
            className={'footer_sectionBox'}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={8}>
              <Box display={'flex'}>
                <Box className="footer_leftSide_firstBox">
                  {footerData?.map((items) => {
                    return (
                      <>
                        <Typography className="footer_text_font" marginY={4}>
                          {items.item}
                        </Typography>
                      </>
                    );
                  })}
                </Box>
                <Box className="footer_leftSide_ScondBox">
                  {' '}
                  {footerdataleftSide.map((itees) => {
                    return (
                      <>
                        <Typography className="footer_text_font" marginY={4}>
                          {itees.item}
                        </Typography>
                      </>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Typography marginTop={4} className="footer_right_side_text">
                  Sign up to Jumeiriah newsletter
                </Typography>
              </Box>
              <Box className="social_icons" display={'flex'}>
                <Box>
                  <img src={faceBookIcon} alt="" />
                </Box>
                <Box marginX={4}>
                  <img src={instagramIcon} alt="" />
                </Box>
                <Box>
                  <img src={twitterIcon} alt="" />
                </Box>
                <Box marginX={4}>
                  <img src={youTubeIcon} alt="" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'end'}>
          <Typography>
            <Typography className="footer_text_font" marginBottom={4}>
              2023 © Kerzner International Limited. All Rights Reserved.
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
    // <Box
    //   className="footer_parentBox displayNone"
    //   bgcolor="info.dark"
    //   display={'flex'}
    //   pt={5}
    //   pb={3}
    //   width={'100%'}
    //   flexDirection={'column'}
    //   justifyContent={'flex-end'}
    // >
    //   <Box
    //     display={'flex'}
    //     justifyContent={'center'}
    //     flexDirection={'column'}
    //     bgcolor="info.dark"
    //   >
    //     <Box display={'flex'} justifyContent={'space-between'}>
    //       <Box display={'flex'}>
    //         <Box>
    //           {footerData?.map((items) => {
    //             return (
    //               <>
    //                 <Typography className="footer_text_font" marginY={4}>
    //                   {items.item}
    //                 </Typography>
    //               </>
    //             );
    //           })}
    //         </Box>
    //         <Box marginLeft={5} paddingLeft={5}>
    //           {footerdataleftSide.map((itees) => {
    //             return (
    //               <>
    //                 <Typography className="footer_text_font" marginY={4}>
    //                   {itees.item}
    //                 </Typography>
    //               </>
    //             );
    //           })}
    //         </Box>
    //       </Box>
    //       <Box paddingRight={5}>
    //         <Box>
    //           <Typography
    //             // variant="h5"
    //             marginTop={4}
    //             className="footer_right_side_text"
    //           >
    //             Sign up to Jumeiriah newsletter
    //           </Typography>
    //         </Box>
    //         <Box display={'flex'}>
    //           <Box>
    //             {/* <FacebookIcon /> */}
    //             <img src={faceBookIcon} alt="" />
    //           </Box>
    //           <Box marginX={4}>
    //             {/* <InstagramIcon /> */}
    //             <img src={instagramIcon} alt="" />
    //           </Box>
    //           <Box>
    //             {/* <TwitterIcon /> */}
    //             <img src={twitterIcon} alt="" />
    //           </Box>
    //           <Box marginX={4}>
    //             {/* <YouTubeIcon /> */}
    //             <img src={youTubeIcon} alt="" />
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Box>
    //     <Box display={'flex'} justifyContent={'center'} marginTop={5}>
    //       <Typography className="footer_text_font">
    //         <span>Ⓒ</span> COPYRIGHT JUMEIRAH INTERNATION LLC $ 2023
    //       </Typography>
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default Footer;
