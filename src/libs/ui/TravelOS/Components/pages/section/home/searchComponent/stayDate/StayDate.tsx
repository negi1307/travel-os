import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box, Grid, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DummyData } from '../destination/dummydata';

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { DateRange } from '@mui/x-date-pickers-pro';

const StayDate = () => {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([
    dayjs('2022-04-17'),
    dayjs('2022-04-25'),
  ]);
  console.log(value, 'new date');
  // let date = value?.[0]?.toJSON().slice(0, 10);
  // let nDate =
  //   date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);

  // let dates = value?.[1]?.toJSON().slice(0, 10);
  // let nDates =
  //   dates.slice(8, 10) + '/' + dates.slice(5, 7) + '/' + dates.slice(0, 4);

  // console.log(nDate, nDates);
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: '#252525',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box pl={2}>
            <Typography color={'primary'}>Stay Date</Typography>
          </Box>
        </AccordionSummary>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            sx={{ backgroundColor: 'wheat' }}
            components={['DateRangeCalendar', 'DateRangeCalendar']}
          >
            <DateRangeCalendar
              sx={{ color: 'white' }}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Accordion>
    </div>
  );
};

export default StayDate;
