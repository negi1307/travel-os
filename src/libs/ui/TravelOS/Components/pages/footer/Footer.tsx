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

type Props = {};

const Footer = (props: Props) => {
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
        <Box
          display={'flex'}
          pt={6}
          pb={3}
          justifyContent={'center'}
          flexDirection={'row'}
          width={'100%'}
        >
          <Box
            justifyContent={'center'}
            display={'flex'}
            flexDirection={'row'}
            width={'70%'}
          >
            <Box width={'100%'} mt={4}>
              <Box flexDirection={'column'} display={'flex'}>
                <Typography variant="subtitle1" p={3}>
                  ABOUT JUMERIAH GROUP
                </Typography>
                <Typography variant="subtitle1" p={3}>
                  HOTEL DEVELOPEMENT
                </Typography>
                <Typography variant="subtitle1" p={3}>
                  RESIDENCIES
                </Typography>
                <Typography variant="subtitle1" p={3}>
                  PRESS CENTER
                </Typography>
                <Typography variant="subtitle1" p={3}>
                  PRIVACY POLICY
                </Typography>
                <Typography variant="subtitle1" p={3}>
                  TERMS & CONDITIONS
                </Typography>
              </Box>
            </Box>
            <Box mt={4} width={'100%'}>
              <Typography p={3} variant="subtitle1">
                PHISHING
              </Typography>
              <Typography p={3} variant="subtitle1">
                CONTACT US
              </Typography>
              <Typography p={3} variant="subtitle1">
                COVID-19 UPDATES
              </Typography>
            </Box>
            <Box width={'100%'} mt={4}>
              <Box>
                <Typography variant="h5">
                  Sign up to Jumeiriah newsletter
                </Typography>
              </Box>
              <Box
                paddingLeft={2}
                display="flex"
                width="50%"
                justifyContent="space-between"
                mt={3}
              >
                <IconButton style={{ marginRight: '1.5rem' }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton style={{ marginRight: '1.5rem' }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton style={{ marginRight: '1.5rem' }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Typography variant="subtitle1">
            <span>Ⓒ</span> COPYRIGHT JUMEIRAH INTERNATION LLC $ 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
