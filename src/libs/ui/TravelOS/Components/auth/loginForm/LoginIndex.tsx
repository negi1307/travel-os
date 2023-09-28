import React from 'react';
import Login from './LoginForm';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// import './PageIndex.css';
// import './Login.css';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const LoginIndex = (props: any) => {
  const { meneItme, connectUpdate } = props;
  const pageBackgroudImage = meneItme?.[5];

  return (
    <Box position={'relative'}>
      <Box className="bg_carouselParent">
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            pl: 2,
            // bgcolor: 'background.default',
          }}
        ></Paper>
        <AutoPlaySwipeableViews>
          {pageBackgroudImage?.map((step: any, index: number) => (
            <>
              <Box
                className="carousel_parentBox"
                component="img"
                width={'100%'}
                height={'100vh'}
                sx={{
                  backgroundImage: `url(${step.imgPath})`,
                }}
              ></Box>
            </>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <Box position={'absolute'} top={0} left={0} right={0} bottom={0}>
        <Login meneItme={meneItme} connectUpdate={connectUpdate} />
      </Box>
    </Box>
  );
};

export default LoginIndex;
