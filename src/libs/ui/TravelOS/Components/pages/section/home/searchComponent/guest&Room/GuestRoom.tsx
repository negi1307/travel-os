import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

import './guestRoom.css';

import '../destination/Destination.css';

const GuestRoom = () => {
  const [expanded, setExpanded] = useState(false);
  const [guestAdults, setGuestAdults] = useState(0);
  const [guestChildren, setGuestChildren] = useState(0);
  const [guestBox, setGuestBox] = useState([1]);
  const [guestCalculator, setGuestCalculator] = useState(1);
  const [show, seShow] = useState(false);
  const [getGuestRoom, setGetGuestRoom] = useState<any>({
    adults: '',
    children: '',
    rooms: '',
  });

  const addBox = () => {
    setGuestBox([...guestBox, 1]);
    setGuestCalculator(guestCalculator + 1);
  };

  const Remove = (id: any) => {
    const fileterData = guestBox?.filter((ite, index) => id !== index);
    setGuestBox(fileterData);
    setGuestCalculator(guestCalculator - 1);
  };

  const submitGuestRoom = () => {
    seShow(true);
    setExpanded(false);
    setGetGuestRoom({
      ...getGuestRoom,
      adults: guestAdults,
      children: guestChildren,
      rooms: guestCalculator,
    });
  };

  return (
    <div className="guest_inputParent">
      <Accordion
        expanded={expanded}
        sx={{
          backgroundColor: 'white',
        }}
      >
        <AccordionSummary
          onClick={() => setExpanded(true)}
          expandIcon={<ExpandMoreIcon color="primary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box pl={2}>
            <Typography color={'primary'}>
              {show ? (
                <>
                  <Typography
                    className="destination_select"
                    color={'primary.light'}
                  >
                    Guest and Rooms
                  </Typography>
                  <Typography
                    className="destination_select"
                    color={'primary.main'}
                    // marginY={2}
                    marginTop={2}
                    marginBottom={2}
                  >
                    {' '}
                    {`${getGuestRoom.rooms} Rooms (${getGuestRoom.adults} Adult, ${getGuestRoom.children} Children)`}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography
                    paddingY={1}
                    className="destination_select_first"
                    color={'primary.light'}
                  >
                    Guest and Rooms
                  </Typography>
                </>
              )}
              {/* 1 Rooms (2 Adult, 0 Children) */}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box>
              <Typography className="destination_type_css">ROOM</Typography>
            </Box>
            {guestBox?.map((item, index) => {
              return (
                <>
                  {guestBox.length > 1 ? (
                    <Box
                      display={'flex'}
                      justifyContent={'end'}
                      marginRight={3}
                    >
                      <ClearIcon
                        onClick={() => {
                          Remove(index);
                        }}
                      />
                    </Box>
                  ) : (
                    ''
                  )}

                  <Grid container spacing={2}>
                    <Grid item xs={6} padding={3}>
                      <Box
                        display={'flex '}
                        justifyContent={'space-between'}
                        borderBottom={3}
                        borderColor={'#252525'}
                      >
                        <Box>
                          <Typography color={'primary'}>ADULTS</Typography>
                        </Box>
                        <Box display={'flex'}>
                          <Box>
                            <Typography>
                              <RemoveIcon
                                className=" decremen_minus"
                                onClick={() => {
                                  setGuestAdults(guestAdults - 1);
                                }}
                              />
                            </Typography>
                          </Box>
                          <Box marginX={4}>
                            <Typography color={'primary'}>
                              {guestAdults}
                            </Typography>
                          </Box>
                          <Box>
                            <AddIcon
                              className="incremen_plus"
                              onClick={() => {
                                setGuestAdults(guestAdults + 1);
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box marginTop={2}>
                        <Typography className="destination_type_css">
                          12 YEARS AND OLDER
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6} padding={3}>
                      <Box
                        display={'flex '}
                        justifyContent={'space-between'}
                        borderBottom={3}
                        borderColor={'#252525'}
                      >
                        <Box>
                          <Typography color={'primary'}>CHILDREN</Typography>
                        </Box>
                        <Box display={'flex'}>
                          <Box>
                            <Typography>
                              <RemoveIcon
                                className="decremen_minus"
                                onClick={() => {
                                  setGuestChildren(guestChildren - 1);
                                }}
                              />
                            </Typography>
                          </Box>
                          <Box marginX={4}>
                            <Typography color={'primary'}>
                              {guestChildren}
                            </Typography>
                          </Box>
                          <Box>
                            <AddIcon
                              className="incremen_plus"
                              onClick={() => {
                                setGuestChildren(guestChildren + 1);
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box marginTop={2}>
                        <Typography className="destination_type_css">
                          11 YEARS AND YOUNGER
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </>
              );
            })}
            <Grid container spacing={2}>
              <Grid item xs={6} padding={3}>
                <Box
                  display={'flex'}
                  // borderBottom={5}
                  // borderColor={'primary'}
                  justifyContent={'center'}
                  marginY={3}
                >
                  <Button
                    startIcon={<AddIcon />}
                    className="destination_type_Btn_css"
                    color={'primary'}
                    onClick={() => {
                      addBox();
                    }}
                  >
                    ADD ANOTHER ROOM
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6} padding={3}>
                <Box display={'flex'} justifyContent={'center'} marginY={3}>
                  <Button
                    // startIcon={<AddIcon />}
                    variant={'contained'}
                    color={'primary'}
                    onClick={() => {
                      submitGuestRoom();
                    }}
                  >
                    CONFIRM GUESTS
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default GuestRoom;
