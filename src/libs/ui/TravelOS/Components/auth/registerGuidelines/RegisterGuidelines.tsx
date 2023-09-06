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
  console.log(theme, 'testing');

  return (
    <>
      <Box display="flex" flexDirection="column" height={'100vh'}>
        <Box display="flex" marginLeft={3} marginTop={3}>
          <Box
            border={2}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={10}
          >
            <Typography color="primary">
              <ArrowBackIosNewIcon
                className="icon_style"
                onClick={() => {
                  connectUpdate(1);
                }}
              />
            </Typography>
          </Box>
          <Box marginLeft={2} display={'flex'} alignItems={'center'}>
            <Typography variant="h6" color="primary">
              {t(`${meneItme?.[2]?.back}`)}
            </Typography>
          </Box>
        </Box>
        <Box margin="auto">
          <Box display="flex" justifyContent={'center'}>
            <Typography variant={'h1'} color="warning.main">
              {t(registrationGudl)}
            </Typography>
          </Box>

          <Box marginTop={4} display="flex" justifyContent={'center'}>
            {title?.map((item: any) => {
              return (
                <>
                  <Box className="guideline_point_style" marginTop={3}>
                    <Typography variant="body1" color="pramiry">
                      {t(`${item?.point1}`)}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box>
          <Box mt={4} display="flex" justifyContent={'center'}>
            <Typography>
              <Button
                variant="contained"
                color="primary"
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
