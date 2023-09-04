import React, { useEffect, useState } from 'react';
import {
  Grid,
  Button,
  TextField,
  Typography,
  Link,
  Select,
  MenuItem,
  InputAdornment,
  FormControl,
  Box,
} from '@mui/material';
import './Login.css';
import ForgetChangePassword from '../../../../../models/forgetChangePassword/ForgetChangePassword';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useMediaQuery } from '@mui/material';
const Login: React.FC = (props: any) => {
  const { connectUpdate, meneItme } = props;
  const { t } = useTranslation();
  const matches = useMediaQuery('(min-width:600px)');

  const [selected, setSelected] = useState('');
  const handleChangeLanguage = (e: any) => {
    const getLanguage = e.target.value;
    i18next.changeLanguage(getLanguage);
    setSelected(getLanguage);
  };

  // login form data get
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const [errorCheck, setErrorCheck] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [errorPassword, setPassword] = useState(false);
  const [comfim, setComfim] = useState(false);

  const onchangetInput = (e: any) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const onSubmitInput = () => {
    setErrorCheck(true);
    if (comfim) {
      console.log(loginInput);
    }
  };
  useEffect(() => {
    if (errorCheck) {
      if (loginInput.email !== '') {
        setErrorEmail(false);
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (loginInput.email.match(validRegex)) {
          setValidEmail(false);
          if (loginInput.password !== '') {
            setPassword(false);
            setComfim(true);
          } else {
            setPassword(true);
            setComfim(false);
          }
        } else {
          setValidEmail(true);
          setPassword(false);
          setComfim(false);
        }
      } else {
        setErrorEmail(true);
        setPassword(false);
        setComfim(false);
      }
    }
  }, [errorCheck, loginInput.email, loginInput.password]);

  // model forget/ChangePassword
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid
        direction={'column'}
        alignItems={'end'}
        className="form_style_hight"
        style={{
          backgroundImage: `url(${meneItme[0]?.backgroundImage})`,
        }}
      >
        <Box display="flex" justifyContent={'end'} marginY={matches ? 5 : 1}>
          <Box className="media_Btn_size">
            <Button
              variant="contained"
              className="navbarRegisterBtn media_Btn_size"
              onClick={() => {
                connectUpdate(2);
              }}
            >
              {t(`${meneItme[0]?.register}`)}
            </Button>
          </Box>
          <Box marginRight={matches ? 0 : 4}>
            <FormControl>
              <label>{t(`${meneItme[0]?.language}`)}</label>
              <Select
                className="languageChangeBtn "
                value={selected}
                label="Language"
                onChange={(e) => {
                  handleChangeLanguage(e);
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="chi">Chinese </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Grid
          container
          height={'100vh'}
          xs={12}
          justifyContent={'center'}
          alignItems={'center'}
          className="login_background"
        >
          <Grid
            container
            alignItems={'center'}
            justifyItems={'center'}
            spacing={'20px'}
            direction={'column'}
            xs={12}
            md={5}
            lg={4}
            xl={4}
            sm={12}
          >
            <Typography color={'white'} variant="h4">
              {meneItme[0]?.logo}
            </Typography>
            <Typography color={'white'} marginTop={'-10px'} variant="body1">
              {t(`${meneItme[0]?.logoName}`)}{' '}
            </Typography>
            <TextField
              InputProps={{
                inputProps: {
                  style: { color: 'white' },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleOutlinedIcon className="usernameFieldIcon" />
                  </InputAdornment>
                ),
              }}
              className="textfieldUsername"
              name="email"
              onChange={(e) => {
                onchangetInput(e);
              }}
            >
              <PersonIcon />
            </TextField>
            <span>
              {errorEmail ? (
                <>
                  <span style={{ color: 'red' }}>Please Enter Your Email</span>
                </>
              ) : (
                <>
                  {validEmail ? (
                    <>
                      <span style={{ color: 'red' }}>
                        Please Enter Valid Email Address
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </span>

            <TextField
              InputProps={{
                inputProps: {
                  style: { color: 'white' },
                },
                startAdornment: (
                  <>
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  </>
                ),
              }}
              className="textfieldUsername "
              name="password"
              onChange={(e) => {
                onchangetInput(e);
              }}
            />
            <span>
              {errorPassword ? (
                <>
                  <span style={{ color: 'red' }}>Please Enter Password</span>
                </>
              ) : (
                <></>
              )}
            </span>
            <Button
              variant="contained"
              color="primary"
              className="login_btn_width"
              onClick={() => {
                onSubmitInput();
              }}
            >
              {t(`${meneItme[0]?.loginBtn}`)}
            </Button>
            <Link
              marginTop={'10px'}
              underline="none"
              color={'white'}
              fontSize={'15px'}
              fontWeight={'100'}
              className="forgotPasswordLink"
              variant="body2"
              onClick={() => {
                handleOpen();
              }}
            >
              {t(`${meneItme[0]?.forgot}`)}
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <>
        <ForgetChangePassword open={open} handleClose={handleClose} />
      </>
    </>
  );
};

export default Login;
