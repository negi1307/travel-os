// import { Box, Container, Typography } from '@mui/material';
// import React from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import './Footer.css';

// type Props = {};

// const Footer = (props: Props) => {
//   return (
//     <Box
//       className="footer_parentBox"
//       display={'flex'}
//       pt={5}
//       pb={3}
//       width={'100%'}
//       flexDirection={'column'}
//       justifyContent={'flex-end'}
//       bgcolor={'info'}
//     >
//       <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
//         <Box
//           display={'flex'}
//           pt={6}
//           pb={3}
//           justifyContent={'center'}
//           flexDirection={'row'}
//           width={'100%'}
//         >
//           <Box
//             justifyContent={'center'}
//             display={'flex'}
//             flexDirection={'row'}
//             width={'70%'}
//           >
//             <Box width={'60%'}>
//               <Box flexDirection={'column'} display={'flex'}>
//                 <Typography variant="subtitle2" p={1}>
//                   ABOUT JUMERIAH GROUP
//                 </Typography>
//                 <Typography variant="subtitle2" p={1}>
//                   HOTEL DEVELOPEMENT
//                 </Typography>
//                 <Typography variant="subtitle2" p={1}>
//                   RESIDENCIES
//                 </Typography>
//                 <Typography variant="subtitle2" p={1}>
//                   PRESS CENTER
//                 </Typography>
//                 <Typography variant="subtitle2" p={1}>
//                   PRIVACY POLICY
//                 </Typography>
//                 <Typography variant="subtitle2" p={1}>
//                   TERMS & CONDITIONS
//                 </Typography>
//               </Box>
//             </Box>
//             <Box width={'100%'}>
//               <Typography p={1} variant="subtitle2">
//                 PHISHING
//               </Typography>
//               <Typography p={1} variant="subtitle2">
//                 CONTACT US
//               </Typography>
//               <Typography p={1} variant="subtitle2">
//                 COVID-19 UPDATES
//               </Typography>
//             </Box>
//             <Box width={'100%'}>
//               <Box>
//                 <Typography variant="h6">
//                   Sign up to Jumeiriah newsletter
//                 </Typography>
//               </Box>
//               <Box
//                 display={'flex'}
//                 width={'50%'}
//                 justifyContent={'space-between'}
//                 mt={1}
//               >
//                 <FacebookIcon />
//                 <InstagramIcon />
//                 <TwitterIcon />
//                 <YouTubeIcon />
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//         <Box display={'flex'} justifyContent={'center'}>
//           <Typography variant="subtitle2">
//             <span>Ⓒ</span> COPYRIGHT JUMEIRAH INTERNATION LLC $ 2023
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;
import { Box, Container, Typography, IconButton } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

const Footer = (props: any) => {
  const { meneItme } = props;
  const { faceBookIcon, instagramIcon, twitterIcon, youTubeIcon } =
    meneItme?.[8]?.footerIcon?.[0];

  console.log(meneItme?.[8]?.footerIcon?.[0], 'kkkks');
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
    <Box
      className="footer_parentBox"
      bgcolor="info.dark"
      display={'flex'}
      pt={5}
      pb={3}
      width={'100%'}
      flexDirection={'column'}
      justifyContent={'flex-end'}
    >
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        bgcolor="info.dark"
      >
        <Box display={'flex'} justifyContent={'space-between'}>
          <Box display={'flex'}>
            <Box>
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
            <Box marginLeft={5} paddingLeft={5}>
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
          <Box paddingRight={5}>
            <Box>
              <Typography
                variant="h5"
                marginTop={4}
                className="footer_right_side_text"
              >
                Sign up to Jumeiriah newsletter
              </Typography>
            </Box>
            <Box display={'flex'}>
              <Box>
                {/* <FacebookIcon /> */}
                <img src={faceBookIcon} alt="" />
              </Box>
              <Box marginX={4}>
                {/* <InstagramIcon /> */}
                <img src={instagramIcon} alt="" />
              </Box>
              <Box>
                {/* <TwitterIcon /> */}
                <img src={twitterIcon} alt="" />
              </Box>
              <Box marginX={4}>
                {/* <YouTubeIcon /> */}
                <img src={youTubeIcon} alt="" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'} marginTop={5}>
          <Typography variant="subtitle1">
            <span>Ⓒ</span> COPYRIGHT JUMEIRAH INTERNATION LLC $ 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
