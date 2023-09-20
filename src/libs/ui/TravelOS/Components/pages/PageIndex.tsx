import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';

import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './PageIndex.css';
import HomeIndex from './section/home/HomeIndex';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// import FilterIndex from './section/home/filterComponent/FilterIndex';

const loading = () => <div className=""></div>;

const PageIndex: React.FC = (props: any) => {
  const { meneItme } = props;
  const pageBackgroudImage = meneItme?.[5];

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
        <AutoPlaySwipeableViews interval={4000}>
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
          <HomeIndex />
          {/* <Suspense fallback={loading()}>
            <Outlet />
          </Suspense> */}
        </Box>
      </Box>
      <Box>
        <Footer meneItme={meneItme} />
      </Box>
    </div>
  );
};

export default PageIndex;
