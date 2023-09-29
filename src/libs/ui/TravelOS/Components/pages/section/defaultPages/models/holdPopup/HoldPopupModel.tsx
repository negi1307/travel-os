import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { verify } from '../../../../../../../../../../public/staticImage/defaultImage/Image';

const HoldPopupModel = ({ open, onClose }: any) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0057B7',
          borderRadius: '16px',
          // width: '811px',
          // maxWidth: '80vw',
          // height: '569px',
        },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center' }}>
        {/* <VerifiedIcon fontSize="large" color="primary" sx={{ color: 'white' }} /> */}
        <img
          src={verify}
          alt="Hotel"
          style={{ width: '82.78px', maxHeight: '85.58px', marginTop: '100px' }}
        />
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFFEFE',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            // width: '736px',
            fontFamily: 'Atlantis Resorts',
            fontSize: '35px', // Adjust the font size
            lineHeight: '38.96px',
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Your booking has been confirmed.
          <br />
          You will receive a confirmation email on your registered email
          address.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button
          onClick={onClose}
          color="primary"
          variant="contained"
          sx={{
            height: '60px',
            backgroundColor: 'white',
            color: '#0057B7',
            // borderRadius: '8px',
            minWidth: '180px',
            marginBottom: '100px',
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
