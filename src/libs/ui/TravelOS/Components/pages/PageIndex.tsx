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

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

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
        {/* <Box className="footer_parentBox">
          <Footer />
        </Box> */}
      </Box>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default PageIndex;
