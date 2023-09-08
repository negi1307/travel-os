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
import ErrorHandlingLogin from './errorLogin/ErrorHandlingLogin';
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

  //start login form data get & error handling
  const [parentOutData, setParentOutData] = useState<any>({
    first: '',
    second: '',
  });
  const [childInComing, setChildIncoming] = useState<any>('');

  const parentDataOut = (a: any, b: any) => {
    if (b === 'input') {
      setParentOutData({ first: a, second: b });
    } else if (b === 'btn') {
      setParentOutData({ first: a, second: b });
    }
  };

  const childDataIn = (item: any) => {
    setChildIncoming(item);
  };
  //end login form data get & error handling

  // model forget/ChangePassword
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${meneItme[0]?.backgroundImage})`,
        }}
        className="form_style_hight"
        display={'flex'}
        flexDirection={'column'}
      >
        <Box className="login_top_btn">
          <Box marginTop={4}>
            <Button
              variant={'contained'}
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
              <Typography variant={'body2'}>
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
                <img src={meneItme[0]?.logo} alt="" width={'35%'} />
              </Box>
              {/* <Box textAlign={'center'}>
                <Typography variant={'body1'} color="warning.contrastText">
                  {t(`${meneItme[0]?.logoName}`)}{' '}
                </Typography>
              </Box> */}
            </Box>
            <Box>
              <Box marginTop={4}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position={'start'}>
                        <AccountCircleOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  className="input_Style"
                  name="email"
                  onChange={(e) => {
                    parentDataOut(e, 'input');
                  }}
                >
                  <PersonIcon />
                </TextField>
                <Box marginTop={2}>
                  <span>
                    {childInComing.typeOne === 'email' ? (
                      <>
                        {childInComing.typeTwo === 'error' ? (
                          <>
                            <Typography color={'error'}>
                              {t(`${logErrorEmailRquid}`)}
                            </Typography>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <>
                        {childInComing.typeOne === 'emailValid' ? (
                          <>
                            {childInComing.typeTwo === 'error' ? (
                              <>
                                <Typography color={'error'}>
                                  {t(`${logErrorEmailVlid}`)}
                                </Typography>
                              </>
                            ) : (
                              <></>
                            )}
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
                        <InputAdornment position={'start'}>
                          <LockOutlinedIcon />
                        </InputAdornment>
                      </>
                    ),
                  }}
                  className="input_Style"
                  name="password"
                  onChange={(e) => {
                    parentDataOut(e, 'input');
                  }}
                />
                <Box marginTop={2}>
                  <span>
                    {childInComing.typeOne === 'password' ? (
                      <>
                        {childInComing.typeTwo === 'error' ? (
                          <>
                            <Typography color={'error'}>
                              {t(`${logErroPassword}`)}
                            </Typography>
                          </>
                        ) : (
                          <></>
                        )}
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
                  variant={'contained'}
                  color={'primary'}
                  onClick={() => {
                    parentDataOut('button', 'btn');
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
                  color={'warning.contrastText'}
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
        <ErrorHandlingLogin
          parentsDataIn={parentOutData}
          ChildDataOut={childDataIn}
        />
      </>
    </>
  );
};

export default Login;
