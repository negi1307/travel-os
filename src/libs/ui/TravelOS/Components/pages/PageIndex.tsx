import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';

import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './PageIndex.css';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const loading = () => <div className=""></div>;

const PageIndex: React.FC = (props: any) => {
  const { meneItme } = props;
  const pageBackgroudImage = meneItme?.[5];
  console.log(meneItme?.[5], '*image');

  return (
    <div>
      <Box>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            pl: 2,
            bgcolor: 'background.default',
          }}
        ></Paper>
        <AutoPlaySwipeableViews>
          {pageBackgroudImage?.map((step, index) => (
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
      <Box className="main_Box">
        <Box>
          <NavBar meneItme={meneItme} />
        </Box>
        <Box className="center_parentBox">
          <Suspense fallback={loading()}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default PageIndex;
