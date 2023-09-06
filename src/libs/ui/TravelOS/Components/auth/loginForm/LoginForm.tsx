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
const Login: React.FC = (props: any) => {
  const { connectUpdate, meneItme } = props;
  const { logErrorEmailRquid, logErrorEmailVlid, logErroPassword } =
    meneItme?.[3];

  const { t } = useTranslation();

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
      <Box
        style={{
          backgroundImage: `url(${meneItme[0]?.backgroundImage})`,
        }}
        className="form_style_hight"
        display={'flex'}
        flexDirection={'column'}
      >
        <Box className="login_top_btn">
          <Box marginTop={4}>
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
          <Box marginTop={2}>
            <FormControl>
              <Typography variant="body2">
                {t(`${meneItme[0]?.language}`)}
              </Typography>
              <Select
                className="languageChangeBtn "
                value={selected}
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

        <Box
          display={'flex'}
          justifyContent={'center'}
          flex={'auto'}
          alignItems={'center'}
        >
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Box>
              <Box textAlign={'center'}>
                <Typography variant={'h1'} color="warning.contrastText">
                  {meneItme[0]?.logo}
                </Typography>
              </Box>
              <Box textAlign={'center'}>
                <Typography variant={'body1'} color="warning.contrastText">
                  {t(`${meneItme[0]?.logoName}`)}{' '}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box marginTop={4}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  className="input_Style"
                  name="email"
                  onChange={(e) => {
                    onchangetInput(e);
                  }}
                >
                  <PersonIcon />
                </TextField>
                <Box marginTop={2}>
                  <span>
                    {errorEmail ? (
                      <>
                        <span>{t(`${logErrorEmailRquid}`)}</span>
                      </>
                    ) : (
                      <>
                        {validEmail ? (
                          <>
                            <span>{t(`${logErrorEmailVlid}`)}</span>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </span>
                </Box>
              </Box>
              <Box marginY={4}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <>
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      </>
                    ),
                  }}
                  className="input_Style"
                  name="password"
                  onChange={(e) => {
                    onchangetInput(e);
                  }}
                />
                <Box marginTop={2}>
                  <span>
                    {errorPassword ? (
                      <>
                        <span>{t(`${logErroPassword}`)}</span>
                      </>
                    ) : (
                      <></>
                    )}
                  </span>
                </Box>
              </Box>
              <Box>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    onSubmitInput();
                  }}
                >
                  {t(`${meneItme[0]?.loginBtn}`)}
                </Button>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography variant={'body1'}>
                <Link
                  underline="none"
                  color="warning.contrastText"
                  onClick={() => {
                    handleOpen();
                  }}
                >
                  {t(`${meneItme[0]?.forgot}`)}
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <>
        <ForgetChangePassword open={open} handleClose={handleClose} />
      </>
    </>
  );
};

export default Login;
