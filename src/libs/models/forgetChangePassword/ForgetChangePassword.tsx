import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from '@mui/material/TextField';
import './ForgetChange.css';
const ForgetChangePassword = (props: any) => {
  const { open, handleClose } = props;
  const style = {
    position: 'absolute' as 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="model_padding media_width">
            <Typography id="modal-modal-title" align="center">
              <HighlightOffIcon
                className="close_icon"
                onClick={() => {
                  handleClose();
                }}
              />
            </Typography>
            <Typography
              id="modal-modal-description"
              variant={'h5'}
              align={'center'} //   sx={{ mt: 2 }}
            >
              Forget/Change Password
            </Typography>
            <Typography marginY={3}>
              <TextField
                fullWidth
                //   id="standard-basic"
                //   label="Standard"
                placeholder="Please Enter Your Registered Email"
                variant={'standard'}
              />
            </Typography>
            <Typography>
              <Button
                fullWidth
                variant={'contained'}
                className="btn_hight"
                color={'primary'}
              >
                SEND REQUEST
              </Button>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ForgetChangePassword;
