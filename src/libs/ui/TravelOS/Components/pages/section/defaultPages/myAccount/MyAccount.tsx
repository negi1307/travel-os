import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Tooltip,
  FormGroup,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../../../../../../../../app/AppMain.css';

const MyAccount = () => {
  const [count, setCount] = useState(0);
  return (
    <Grid justifyContent="center">
      <Box
        sx={{
          padding: '40px',
          borderRadius: '8px',
          backgroundColor: '#EDF7F9',
          paddingTop: '6%',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: 'flex',
            justifyContent: 'start',
            fontFamily: 'TFArrow',
            fontSize: '35px',
            fontWeight: '700',
          }}
        >
          WELCOME, RUBEN
        </Typography>

        <Typography
          sx={{
            marginTop: '8px',
            display: 'flex',
            justifyContent: 'start',
            fontFamily: 'Averta PE',
            fontSize: '16px',
          }}
        >
          Account Email: Ruben@dessertadventures.com.com
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '25px',
            borderBottom: '2px solid #1976D2',
          }}
        >
          <Button variant="text" color="primary">
            Preferences
          </Button>
          <Tooltip
            title="Coming Soon"
            placement="top"
            arrow
            sx={{ borderRadius: '10px', color: '#0057B7' }}
          >
            <Button variant="text" disabled>
              Group Booking
            </Button>
          </Tooltip>
        </Box>

        <Box
          sx={{
            borderRadius: '8px',
            border: '2px solid #1976D2',
            padding: '8px',
            marginTop: '3%',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Typography
                variant="h6"
                sx={{
                  marginTop: '8px',
                  marginBottom: '10px',
                  width: '255px',
                  borderBottom: '1px solid gray',
                }}
              >
                Cancellation Deadline Notification
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  marginBottom: '15px',
                  textAlign: 'start',
                  marginLeft: '5px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Notify Me Before The Cancellation Deadline (Number of Days):
                &nbsp; &nbsp; &nbsp;
                <IconButton
                  size="small"
                  onClick={() => setCount((c) => c - 1)}
                  sx={{ fontSize: '18px', color: '#0057B7' }}
                >
                  <RemoveIcon
                    sx={{
                      fontSize: '20px',
                      color: '#0057B7',
                      borderRadius: '5px',
                      border: '1px solid #0057B74D',
                      backgroundColor: '#E7E7E7',
                    }}
                  />
                </IconButton>
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    padding: '2px 12px',
                    border: '.5px solid lightgrey',
                    borderRadius: '5px',
                  }}
                >
                  {count}
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setCount((c) => c + 1)}
                  sx={{ fontSize: '18px', color: '#0057B7' }}
                >
                  <AddIcon
                    sx={{
                      fontSize: '20px',
                      color: '#0057B7',
                      borderRadius: '5px',
                      border: '1px solid #0057B74D',
                      backgroundColor: '#E7E7E7',
                    }}
                  />
                </IconButton>
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ marginTop: '25px' }}>
              <Box display={'flex'}>
                <Box>
                  <Checkbox defaultChecked />
                </Box>
                <Box>
                  <Typography variant="caption" color="initial">
                    I want to receive Email Notification in my primary account
                    email address
                  </Typography>
                </Box>
              </Box>
              {/* <FormGroup>
                <FormControlLabel
                className='my-account-fc-label'
                  control={<Checkbox defaultChecked />}
                  label="I want to receive Email Notification in my primary account email address"
                />
               
              </FormGroup> */}
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            borderRadius: '8px',
            border: '2px solid #1976D2',
            padding: '8px',
            marginTop: '3%',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Typography
                variant="h6"
                sx={{
                  marginTop: '8px',
                  marginBottom: '10px',
                  width: '197px',
                  borderBottom: '1px solid gray',
                }}
              >
                Hold Deadline Notification
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  marginBottom: '15px',
                  textAlign: 'start',
                  marginLeft: '8px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Notify Me Before The Hold Release Deadline (Hours): &nbsp;
                &nbsp; &nbsp;
                <IconButton size="small" onClick={() => setCount((c) => c - 1)}>
                  <RemoveIcon
                    sx={{
                      fontSize: '20px',
                      color: '#0057B7',
                      borderRadius: '5px',
                      border: '1px solid #0057B74D',
                      backgroundColor: '#E7E7E7',
                    }}
                  />
                </IconButton>
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    padding: '2px 12px',
                    border: '.5px solid lightgrey',
                    borderRadius: '5px',
                  }}
                >
                  {count}
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setCount((c) => c + 1)}
                  sx={{ fontSize: '18px', color: '#0057B7' }}
                >
                  <AddIcon
                    sx={{
                      fontSize: '20px',
                      color: '#0057B7',
                      borderRadius: '5px',
                      border: '1px solid #0057B74D',
                      backgroundColor: '#E7E7E7',
                    }}
                  />
                </IconButton>
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ marginTop: '25px' }}>
              {/* <FormGroup>
                <FormControlLabel
                className='my-account-fc-label'
            

                  control={<Checkbox />}
                  label="I want to receive Email Notification in my primary account email address"
                />
              </FormGroup> */}
              <Box display={'flex'}>
                <Box>
                  <Checkbox />
                </Box>
                <Box>
                  <Typography variant="caption" color="initial">
                    I want to receive Email Notification in my primary account
                    email address
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            borderRadius: '8px',
            border: '2px solid #1976D2',
            padding: '8px',
            marginTop: '3%',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Typography
                variant="h6"
                sx={{
                  marginTop: '8px',
                  marginBottom: '10px',
                  width: '160px',
                  borderBottom: '1px solid gray',
                }}
              >
                Currency Preference
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px',
                }}
              >
                <Typography variant="subtitle2" sx={{ marginLeft: '8px' }}>
                  Set my default indication currency:
                </Typography>
                <Select
                  defaultValue="ADM"
                  sx={{
                    width: '10%',
                    height: '23px',
                    marginLeft: 2,
                    fontSize: '12px',
                  }}
                >
                  <MenuItem className="my-ac-select-menu" value="ADM">
                    AED
                  </MenuItem>
                  <MenuItem className="my-ac-select-menu" value="UD">
                    EUR
                  </MenuItem>
                  <MenuItem className="my-ac-select-menu" value="Rp">
                    INR
                  </MenuItem>
                  <MenuItem className="my-ac-select-menu" value="Rupees">
                    USD
                  </MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
        >
          <Button
            variant="contained"
            sx={{
              padding: '18px 70px',
              borderRadius: '0px',
              backgroundColor: '#0057B7',
            }}
          >
            {' '}
            Apply
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default MyAccount;
