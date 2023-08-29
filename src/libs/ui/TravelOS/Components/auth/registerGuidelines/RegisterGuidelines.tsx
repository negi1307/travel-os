import React from 'react';
import {
  Container,
  Typography,
  Button,
  ThemeProvider,
  Grid,
  TextField,
  createTheme,
} from '@mui/material';
// import { makeStyles } from '@mui/styles';
import './registerGuidelines.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useTranslation } from 'react-i18next';

const RegistraterGuidelines = (props: any) => {
  const { connectUpdate, meneItme } = props;
  const { t } = useTranslation();

  const { title, registrationGudl, registrationBtn } = meneItme[1];

  // console.log(theme.palette.common.white);
  return (
    <>
      {/* Start */}
      {/* Back button */}
      <Grid xs={12} height={'100vh'} container>
        <Grid
          container
          // justifyContent={'center'}
          style={{ backgroundColor: 'black' }}
          xs={12}
        >
          <Grid xs={2} height={'50px'} container>
            <Grid item xs={3}>
              <ArrowBackIosNewIcon
                style={{
                  width: '40px',
                  height: '40px',
                  color: 'white',
                  border: '1px solid #8f7f67',
                  borderRadius: '150px',
                  margin: '12px',
                  padding: '12px',
                }}
                onClick={() => {
                  connectUpdate(1);
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="body1"
                color="#8f7f67"
                marginTop="15px"
                fontSize="23px"
              >
                {t(`${meneItme?.[2]?.back}`)}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            textAlign={'center'}
            xs={12}
            alignItems={'center'}
            direction={'column'}
            container
          >
            <Typography
              variant="h4"
              // style={{ marginTop: '4rem' }}
              color={'rgb(214, 182, 118)'}
            >
              {t(registrationGudl)}
            </Typography>

            {title?.map((item: any) => {
              return (
                <>
                  <Typography
                    variant="body1"
                    width={'75%'}
                    marginTop={'50px'}
                    lineHeight={'40px'}
                    color={'white'}
                    fontSize={'15px'}
                  >
                    {t(`${item?.point1}`)}
                  </Typography>
                </>
              );
            })}

            {/* <Typography
              variant="body1"
              width={'68%'}
              lineHeight={'40px'}
              color={'white'}
              fontSize={'15px'}
            >
              If you choose to partner with us, please click on continue to
              proceed with completing the Expression of Interest by providing us
              with your details.
            </Typography>
            <Typography
              variant="body1"
              width={'58%'}
              lineHeight={'40px'}
              color={'white'}
              fontSize={'15px'}
            >
              Your request will be channeled to our respective teams for review
              and will reach out to you for further discussion.
            </Typography> */}
            <Button
              variant="contained"
              color="primary"
              style={{
                // backgroundColor: 'rgb(214, 182, 118)',
                // color: 'white',
                borderRadius: '0',
                marginTop: '4rem',
                height: '50px',
                // width: '200px',
              }}
              onClick={() => {
                connectUpdate(3);
              }}
            >
              {t(registrationBtn)}
            </Button>
          </Grid>

          {/* Back Button */}
        </Grid>
      </Grid>
    </>
  );
};

export default RegistraterGuidelines;
