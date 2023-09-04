import React from 'react';
import {
  Container,
  Typography,
  Button,
  ThemeProvider,
  Grid,
  Box,
  TextField,
  createTheme,
} from '@mui/material';
// import { makeStyles } from '@mui/styles';
import './registerGuidelines.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
const RegistraterGuidelines = (props: any) => {
  const { connectUpdate, meneItme } = props;
  const { t } = useTranslation();

  const { title, registrationGudl, registrationBtn } = meneItme[1];
  const theme = useTheme();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Box height={'100vh'} display="flex" flexDirection="column">
        <Box display="flex">
          <ArrowBackIosNewIcon
            className="back_arrow"
            onClick={() => {
              connectUpdate(1);
            }}
          />

          <Typography
            variant="body1"
            color="#8f7f67"
            marginTop="15px"
            fontSize="23px"
          >
            {t(`${meneItme?.[2]?.back}`)}
          </Typography>
        </Box>
        <Box margin="auto">
          <Box display="flex" justifyContent={'center'}>
            <Typography
              variant={!matches ? 'h5' : 'h3'}
              color={'rgb(214, 182, 118)'}
            >
              {t(registrationGudl)}
            </Typography>
          </Box>

          <Box marginTop={2} display="flex" justifyContent={'center'}>
            {title?.map((item: any) => {
              return (
                <>
                  <Box
                    width={!matches ? '95%' : '50%'}
                    marginTop={!matches ? '10px' : '50px'}
                    textAlign={!matches ? 'center' : 'center'}
                    lineHeight={!matches ? '1px' : "'40px'"}
                  >
                    <Typography variant="body1" color="pramiry">
                      {t(`${item?.point1}`)}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box>
          <Box mt={3} display="flex" justifyContent={'center'}>
            <Typography>
              <Button
                variant="contained"
                color="primary"
                // className="continueButton"
                onClick={() => {
                  connectUpdate(3);
                }}
              >
                {t(registrationBtn)}
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RegistraterGuidelines;
