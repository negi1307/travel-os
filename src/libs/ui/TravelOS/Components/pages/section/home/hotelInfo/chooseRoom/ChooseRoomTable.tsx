import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Grid,
  Divider,
  Switch,
  Box,
  Avatar,
} from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
// import RoomPage from './RoomsPage';
import Room from './room/Room';

const ChooseRoomTable = () => {
  return (
    <div>
      <Box
        sx={{
          padding: 4,
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}
          >
            <IconButton sx={{ color: '#2196F3' }}>
              <ArrowCircleLeftOutlinedIcon />
              <Typography variant="body2">Back</Typography>
            </IconButton>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#666',
              marginBottom: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: 1 }}
            >
              Atlantis the Palm
              <Typography> Dubai</Typography>
            </Typography>
            <IconButton>
              <LocationCityOutlinedIcon />
              <Typography>
                <u>Hotel Info</u>
              </Typography>
            </IconButton>
          </Grid>
          {/* <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', color: '#666', marginBottom: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <HotelIcon sx={{ marginRight: 1, color: '#888' }} />
                        <Typography variant="body2">Luxury 5-star hotel in Dubai</Typography>
                    </Box>
                    <Typography variant="body2">Grouped by: room types</Typography>
                </Grid> */}
          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              sx={{
                color: '#2196F3',
                borderBottom: '2px solid #2196F3',
                paddingBottom: 2,
              }}
            >
              Room & Rates
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* <Divider sx={{ borderBottom: '1px solid #ccc' }} /> */}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#666',
              marginBottom: 2,
            }}
          >
            <Typography variant="body2">12 room types / 30 rates</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch />
              <Typography variant="body2" sx={{ marginRight: 1 }}>
                View rates without tax
              </Typography>
            </Box>
            <Typography variant="body2">Grouped by: room types</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color={'primary'}>
              Choose Room
            </Typography>
            <Accordion
              sx={{
                border: '2px solid #2196F3',
                marginTop: '15px',
                marginBottom: '15px',
                boxShadow: 'none',
                minHeight: 'unset',
                '& .MuiAccordionSummary-root .css-o4b71y-MuiAccordionSummary-content':
                  {
                    margin: '0',
                  },
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                  gap: '12px',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownCircleOutlinedIcon color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ flexGrow: 5, fontWeight: 'light', fontSize: '14px' }}
                >
                  Queen Rooms
                </Typography>
                <Typography
                  sx={{ flexGrow: 0, fontWeight: 'light', fontSize: '12px' }}
                >
                  2 Queen Beds
                </Typography>
                <IconButton sx={{ flexGrow: 2 }}>
                  <PersonOutlineOutlinedIcon />
                  <Typography sx={{ fontWeight: 'light', fontSize: '12px' }}>
                    x3
                  </Typography>
                </IconButton>
                <Typography
                  sx={{ flexGrow: 1, fontWeight: 'light', fontSize: '12px' }}
                >
                  3 Rates
                </Typography>
                <Typography
                  sx={{ flexGrow: 0.5, fontWeight: 'light', fontSize: '14px' }}
                >
                  From AED2050
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Room />
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                border: '2px solid #2196F3',
                // borderRadius: '4px',
                marginBottom: '15px',
                boxShadow: 'none',
                minHeight: 'unset',
                '& .MuiAccordionSummary-root .css-o4b71y-MuiAccordionSummary-content':
                  {
                    margin: '0',
                  },
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                  gap: '12px',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownCircleOutlinedIcon color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ flexGrow: 5, fontWeight: 'light', fontSize: '14px' }}
                >
                  Atlantis Rooms
                </Typography>
                <Typography
                  sx={{ flexGrow: 0, fontWeight: 'light', fontSize: '12px' }}
                >
                  2 Queen Beds
                </Typography>
                <IconButton sx={{ flexGrow: 2 }}>
                  <PersonOutlineOutlinedIcon />
                  <Typography sx={{ fontWeight: 'light', fontSize: '12px' }}>
                    x4
                  </Typography>
                </IconButton>
                <Typography
                  sx={{ flexGrow: 1, fontWeight: 'light', fontSize: '12px' }}
                >
                  2 Rates
                </Typography>
                <Typography
                  sx={{ flexGrow: 0.5, fontWeight: 'light', fontSize: '14px' }}
                >
                  From AED2499
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Another room info
                {/* <RoomPage /> */}
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                border: '2px solid #2196F3',
                // borderRadius: '4px',
                marginBottom: '15px',
                boxShadow: 'none',
                minHeight: 'unset',
                '& .MuiAccordionSummary-root .css-o4b71y-MuiAccordionSummary-content':
                  {
                    margin: '0',
                  },
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                  gap: '12px',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownCircleOutlinedIcon color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ flexGrow: 5, fontWeight: 'light', fontSize: '14px' }}
                >
                  The Palm Rooms
                </Typography>
                <Typography
                  sx={{ flexGrow: 0, fontWeight: 'light', fontSize: '12px' }}
                >
                  1 King Bed
                </Typography>
                <IconButton sx={{ flexGrow: 2 }}>
                  <PersonOutlineOutlinedIcon />
                  <Typography sx={{ fontWeight: 'light', fontSize: '12px' }}>
                    x2
                  </Typography>
                </IconButton>
                <Typography
                  sx={{ flexGrow: 1, fontWeight: 'light', fontSize: '12px' }}
                >
                  5 Rates
                </Typography>
                <Typography
                  sx={{ flexGrow: 0.5, fontWeight: 'light', fontSize: '14px' }}
                >
                  From AED2199
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                ADD PALM ROOMS
                {/* <RoomPage /> */}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ChooseRoomTable;
