import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const HoldPopupModel = ({ open, onClose }: any) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0057B7',
          borderRadius: '16px',
          width: '80vw', // Adjust the width to a percentage of the viewport
          maxWidth: '500px', // Set a maximum width for larger screens
          padding: '20px',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
        },
      }}
      sx={{
        '@media (max-width: 768px)': { // Adjust styles for screens up to 768px width (tablets and phones)
          width: '90vw', // Make the dialog narrower on smaller screens
          maxWidth: '90vw', // Remove the maximum width constraint
        },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center' }}>
        <VerifiedIcon
          style={{ fontSize: '85px', color: '#FFFEFE' }}
        />
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFFEFE',
          padding: '16px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'cursive',
            fontSize: '40px',
            fontWeight: 700,
            marginBottom: '20px',
          }}
        >
          Booking Confirmed
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'serif',
            fontSize: '24px',
            lineHeight: '1.5',
            fontWeight: 400,
          }}
        >
          Thank you for booking with us! Your reservation has been confirmed. An email confirmation will be sent to your registered email address shortly.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', marginTop: '20px' }}>
        <Button
          onClick={onClose}
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: '#FFFEFE',
            color: '#0057B7',
            minWidth: '150px',
            padding: '12px 24px',
            borderRadius: '25px',
            '&:hover': {
              backgroundColor: '#EDF7F9',
            },
          }}
          disableRipple
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HoldPopupModel;
