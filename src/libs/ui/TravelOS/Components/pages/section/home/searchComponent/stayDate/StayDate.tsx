import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Typography, Box, Grid, MenuItem, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import './StayDate.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
// import './StayDate.css';

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@mui/styles';

interface MyComponentProps {
  mainConnentFill: any;
  mainConnentEmpty: any;
  selectClose: any;
}
const useStyles = makeStyles((theme) => ({
  customDatePicker: {
    background: 'none', // Add your custom styles here
  },
}));
const StayDate = (props: MyComponentProps) => {
  const { mainConnentFill, selectClose, mainConnentEmpty } = props;
  const [expanded, setExpanded] = useState(false);

  const [value, setValue] = useState<any>([null, null]); // Initial date range is null
  const [errorFirtsData, setErrorFirstDate] = useState(false);
  const [errorSecondData, setErrorSecondDate] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [getDate, setGetDate] = useState({
    firstDate: '',
    secondDate: '',
  });
  const classes = useStyles();

  const stayDateOpne = () => {
    setExpanded(!expanded);
    mainConnentFill('stay');
  };
  const closeExpandedStay = () => {
    mainConnentEmpty();
    setExpanded(false);
  };

  useEffect(() => {
    if (value?.[0] !== null) {
      let { $D, $M, $y } = value?.[0];
      let nDate = `${$D}/${$M}/${$y}`;
      setGetDate({ ...getDate, firstDate: nDate });

      if (value?.[1] !== null) {
        let { $D, $M, $y } = value?.[1];
        let nDates = `${$D}/${$M}/${$y}`;
        setGetDate({ ...getDate, secondDate: nDates });
        setExpanded(false);
      } else {
      }
    } else {
    }
  }, [value?.[0], value?.[1]]);

  useEffect(() => {
    if (selectClose === 'dest' || selectClose === 'guest') {
      closeExpandedStay();
    }
  }, [selectClose]);
  return (
    <div className="date_pickerBox date_active">
      <Box onClick={() => stayDateOpne()} sx={{ backgroundColor: 'white' }}>
        <Box color={'primary.main'}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Box>
              <Typography
                className="destination_select_second"
                color={'primary.light'}
              >
                Stay Date
              </Typography>{' '}
            </Box>
            <Box>
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
          <div className="dateShow_text destination_select">
            {getDate.secondDate !== '' ? (
              <>{`${getDate.firstDate}-${getDate.secondDate}`}</>
            ) : (
              <></>
            )}{' '}
          </div>
        </Box>
      </Box>
      <Box>
        {expanded === true ? (
          <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box
                sx={{ backgroundColor: '#252525' }}
                className="stayData_zIndex"
              >
                <DateRangeCalendar
                  sx={{ color: 'primary.main' }}
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  // className={classes.customDatePicker}
                  className="dateRange_prnt"
                />
                <Box textAlign={'center'}>
                  <Typography color={'error'}>
                    {errorFirtsData ? (
                      <>Please Select First Date</>
                    ) : (
                      <>
                        {errorSecondData ? (
                          <>Please Select Second Date</>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </Typography>
                </Box>
              </Box>
            </LocalizationProvider>
          </>
        ) : (
          <></>
        )}
      </Box>

      {/* <Accordion
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
            </Box>
          </LocalizationProvider>
        </Box>
      </Accordion> */}
    </div>
  );
};

export default StayDate;
