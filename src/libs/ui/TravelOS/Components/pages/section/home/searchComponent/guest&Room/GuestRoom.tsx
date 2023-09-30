import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface MyComponentProps {
  mainConnentFill: any;
  selectClose: any;
  mainConnentEmpty: any;
}
const GuestRoom = (props: MyComponentProps) => {
  const { mainConnentFill, selectClose, mainConnentEmpty } = props;
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

  const openGuestRoom = () => {
    setExpanded(!expanded);
    mainConnentFill('guest');
  };
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
  const closeExpandedGuest = () => {
    mainConnentEmpty();
    setExpanded(false);
  };
  useEffect(() => {
    if (selectClose === 'stay' || selectClose === 'dest') {
      closeExpandedGuest();
    }
  }, [selectClose]);

  return (
    <div className="guest_inputParent">
      <Box onClick={() => openGuestRoom()}>
        <Box color={'primary.main'} bgcolor={'primary.contrastText'}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Box>
              <Typography
                className="destination_select_second"
                color={'primary.light'}
              >
                Guest and Rooms
              </Typography>{' '}
            </Box>
            <Box>
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
          <div className="dateShow_text destination_select">
            <Typography
              className="destination_select"
              color={'primary.main'}
              // marginY={2}
              marginTop={2}
              marginBottom={2}
            >
              {show ? (
                <>
                  {' '}
                  {`${getGuestRoom.rooms} Rooms (${getGuestRoom.adults} Adult, ${getGuestRoom.children} Children)`}
                </>
              ) : (
                <>
                  <Typography></Typography>
                </>
              )}
            </Typography>
          </div>
        </Box>
      </Box>
      {expanded ? (
        <Box className="open_guestDropdown">
          <Box>
            <Typography className="destination_type_css">ROOM</Typography>
          </Box>
          {guestBox?.map((item, index) => {
            return (
              <>
                {guestBox.length > 1 ? (
                  <Box display={'flex'} justifyContent={'end'} marginRight={3}>
                    <ClearIcon
                      className="guest_room_deletIcon"
                      onClick={() => {
                        Remove(index);
                      }}
                    />
                  </Box>
                ) : (
                  ''
                )}

                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={6} padding={3}>
                    <Box
                      display={'flex '}
                      justifyContent={'space-between'}
                      borderBottom={3}
                      borderColor={'#252525'}
                    >
                      <Box display={'flex'} alignItems={'center'}>
                        <Typography className="guest_adultChild_fontStyle">
                          ADULTS
                        </Typography>
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
                      <Box display={'flex'} alignItems={'center'}>
                        <Typography className="guest_adultChild_fontStyle">
                          CHILDREN
                        </Typography>
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
          <Grid
            container
            spacing={2}
            columns={{ xs: 4, sm: 8, md: 12 }}
            className="guest_grindPrnt"
          >
            <Grid item xs={6} className="guest_addMainPrnt1">
              <Box>
                <AddIcon className="guest_add_style" />
                <a
                  className="destination_type_Btn_css"
                  onClick={() => {
                    addBox();
                  }}
                >
                  ADD ANOTHER ROOM
                </a>
              </Box>
            </Grid>
            <Grid item xs={6} className="guest_addMainPrnt2">
              <Box>
                <Button
                  className="guest_confirm_btnStyle"
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default GuestRoom;
