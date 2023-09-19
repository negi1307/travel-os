import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Typography, Box, Grid, MenuItem, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './StayDate.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import './StayDate.css';

import '../destination/Destination.css';

const StayDate = () => {
  const [expanded, setExpanded] = useState(false);

  const [value, setValue] = useState<any>([null, null]); // Initial date range is null
  const [errorFirtsData, setErrorFirstDate] = useState(false);
  const [errorSecondData, setErrorSecondDate] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [getDate, setGetDate] = useState({
    firstDate: '',
    secondDate: '',
  });

  // console.log(nDate, nDates);
  // const handleConfirm = () => {
  //   setErrorShow(true);
  //   if (value?.[0] !== null) {
  //     setErrorFirstDate(false);

  //     if (value?.[1] !== null) {
  //       let dates = value?.[1]?.toJSON().slice(0, 10);
  //       let nDates =
  //         dates.slice(8, 10) +
  //         '/' +
  //         dates.slice(5, 7) +
  //         '/' +
  //         dates.slice(0, 4);
  //       setGetDate({ ...getDate, secondDate: nDates });

  //       setErrorSecondDate(false);

  //       setExpanded(false);
  //     } else {
  //       setErrorSecondDate(true);
  //     }
  //   } else {
  //     setErrorFirstDate(true);
  //   }
  // };

  useEffect(() => {
    if (value?.[0] !== null) {
      let date = value?.[0]?.toJSON().slice(0, 10);
      let nDate =
        date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);
      setGetDate({ ...getDate, firstDate: nDate });
      let dates = value?.[1]?.toJSON().slice(0, 10);

      if (value?.[1] !== null) {
        let nDates =
          dates.slice(8, 10) +
          '/' +
          dates.slice(5, 7) +
          '/' +
          dates.slice(0, 4);
        setGetDate({ ...getDate, secondDate: nDates });
        setExpanded(false);
      } else {
      }
    } else {
    }
  }, [value?.[0], value?.[1]]);
  return (
    <div className="date_pickerBox">
      <Accordion
        expanded={expanded}
        sx={{
          backgroundColor: 'white',
        }}
      >
        <AccordionSummary
          onClick={() => setExpanded(!expanded)}
          expandIcon={<ExpandMoreIcon color="primary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box pl={2}>
            <Typography color={'primary'}>
              {' '}
              {getDate.secondDate !== '' ? (
                <>
                  <Typography
                    className="destination_select"
                    color={'primary.light'}
                    marginY={5}
                  >
                    Stay Date
                  </Typography>
                  <Box marginY={1}>
                    <Typography
                      // color={'warning.main'}
                      className="destination_select"
                      marginTop={2}
                      marginBottom={2}
                    >
                      {`${getDate.firstDate}-${getDate.secondDate}`}
                    </Typography>
                  </Box>
                </>
              ) : (
                <>
                  <Typography
                    paddingY={1}
                    className="destination_select_first"
                    color={'primary.light'}
                  >
                    Stay Date
                  </Typography>
                </>
              )}
            </Typography>
          </Box>
        </AccordionSummary>
        <Box width={'112%'}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ backgroundColor: '#252525' }}>
              <DateRangeCalendar
                sx={{ color: 'primary.main' }}
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
              <Box textAlign={'center'}>
                <Typography color={'error'}>
                  {errorFirtsData ? (
                    <>Please Select First Date</>
                  ) : (
                    <>
                      {errorSecondData ? <>Please Select Second Date</> : <></>}
                    </>
                  )}
                </Typography>
              </Box>
              {/* <Box display={'flex'}>
                <Box width={'100%'}></Box>
                <Box
                  pb={3}
                  display={'flex'}
                  justifyContent={'center'}
                  width={'100%'}
                >
                  <Button
                    onClick={handleConfirm}
                    className="confirmDatebutton"
                    variant="contained"
                  >
                    CONFIRM DATES
                  </Button>
                </Box>
              </Box> */}
            </Box>
          </LocalizationProvider>
        </Box>
      </Accordion>
    </div>
  );
};

export default StayDate;
