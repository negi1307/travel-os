import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';

const NotificationModel = ({ openNotification, handleClose }: any) => {
  return (
    <>
      <Dialog
        open={openNotification}
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          sx: {
            backgroundColor: '#0057B7',
            position: 'absolute',
            top: '0px',
            right: '10px',
            borderRadius: '12px',
          },
        }}
      >
        <DialogTitle
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid white',
            color: 'white',
            padding: '15px 15px',
          }}
        >
          <strong>Notification </strong>
          <IconButton
            edge="end"
            sx={{ color: 'white' }}
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            color: 'white',
            display: 'flex',
            alignContent: 'center',
            padding: '15px 25px',
          }}
        >
          <AccessTimeFilledIcon fontSize="large"></AccessTimeFilledIcon> &nbsp;
          &nbsp; &nbsp;
          <div>
            <Typography variant="h6">
              Your Booking is about to expire <br />
              <Typography variant="subtitle1">
                Please make Payment to avoid cancellation.
              </Typography>
              <Typography
                variant="subtitle2"
                color="white"
                sx={{ paddingTop: '5px', cursor: 'pointer' }}
              >
                Mark as Unread
              </Typography>
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NotificationModel;
