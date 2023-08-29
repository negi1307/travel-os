import React, { useEffect, useState } from 'react';
import {
  Grid,
  Button,
  TextField,
  Typography,
  Link,
  Box,
  Select,
  InputLabel,
  MenuItem,
  InputAdornment,
  FormControl,
} from '@mui/material';
import './Login.css';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Height } from '@mui/icons-material';

const Login: React.FC = (props: any) => {
  const { connectUpdate, meneItme } = props;
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

  const onchangetInput = (e: any) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const onSubmitInput = () => {
    setErrorCheck(true);
    if (loginInput.email !== '') {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (loginInput.email.match(validRegex)) {
        if (loginInput.password !== '') {
          console.log(loginInput);
        }
      }
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
          } else {
            setPassword(true);
          }
        } else {
          setValidEmail(true);
          setPassword(false);
        }
      } else {
        setErrorEmail(true);
        setPassword(false);
      }
    }
  }, [errorCheck, loginInput.email, loginInput.password]);
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
        <Grid
          marginTop={'15px'}
          justifyContent={'end'}
          direction={'row'}
          container
          xs={12}
          className="login_Registerdiv"
        >
          <Button
            variant="contained"
            onClick={() => {
              connectUpdate(2);
            }}
            style={{ height: '40px', marginTop: '10px', marginRight: '20px' }}
          >
            {t(`${meneItme[0]?.register}`)}
          </Button>
          <Grid width={'150px'} direction={'row'}>
            <Grid item>
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  {t(`${meneItme[0]?.language}`)}
                </InputLabel>

                <Select
                  style={{ width: '150px' }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
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
            </Grid>
          </Grid>
        </Grid>
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
            xs={5}
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
                    <AccountCircleOutlinedIcon style={{ color: 'white' }} />
                  </InputAdornment>
                ),
              }}
              style={{
                border: 'white 2px solid',
                marginBottom: '20px',
                marginTop: '60px',
                width: '60%',
                borderRadius: '10px',
              }}
              name="email"
              onChange={(e) => {
                onchangetInput(e);
              }}
              // placeholder="partner@agency.com"
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
                      <LockOutlinedIcon style={{ color: 'white' }} />
                    </InputAdornment>
                  </>
                ),
              }}
              style={{
                border: 'white 2px solid',
                marginBottom: '20px',
                marginTop: '20px',
                width: '60%',
                borderRadius: '10px',
                color: 'white',
              }}
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
              style={{
                // backgroundColor: 'rgb(214, 192, 138)',
                //   color: {theme().palette.primary.main},
                borderRadius: '0',
                marginTop: '2rem',
                height: '50px',
                width: '60%',
              }}
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
              letterSpacing={'2px'}
              fontSize={'13px'}
              fontWeight={'100'}
              style={{ cursor: 'pointer' }}
              variant="body2"
            >
              {t(`${meneItme[0]?.forgot}`)}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
