import React, { useState } from 'react';
import HoldPopupModel from './holdPopup/HoldPopupModel';
import NotificationModel from './notification/NotificationModel';
import HotelInfoModel from './hotelInfo/HotelInfoModel';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
const ModelIndex = () => {
  const [open, setOpen] = useState<boolean>(false);

  ///--------hotel info
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  //------

  const [openNotification, setOpenNotification] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-evenly  '} marginTop={5}>
        <Box>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open Hold Popup
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" color="primary" onClick={openModal}>
            Open Hotel Info
          </Button>
        </Box>
        <Box>
          {/* <Button variant="contained" color="primary" onClick={handleOpen}>
            Notification
          </Button> */}
        </Box>
      </Box>
      <Box>
        <HoldPopupModel open={open} onClose={() => setOpen(false)} />
      </Box>
      <Box>
        <HotelInfoModel open={isModalOpen} onClose={closeModal} />
      </Box>
      <Box>
        <NotificationModel
          openNotification={openNotification}
          handleClose={handleClose}
        />
      </Box>
    </Box>
  );
};

export default ModelIndex;
