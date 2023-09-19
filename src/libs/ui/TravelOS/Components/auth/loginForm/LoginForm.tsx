import React, { useEffect, useState } from 'react';
import {
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
import '../../../../TravelOS/Components/pages/style.css';
import ForgetChangePassword from '../../../../../models/forgetChangePassword/ForgetChangePassword';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ErrorHandlingLogin from './errorLogin/ErrorHandlingLogin';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login: React.FC = (props: any) => {
  const { connectUpdate, meneItme } = props;
  const {
    logErrorEmailRquid,
    logErrorEmailVlid,
    logErroPassword,
    psWord_icon,
  } = meneItme?.[3];

  const { t } = useTranslation();

  const [selected, setSelected] = useState('en');
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

  // auth protect routing
  const store = useSelector((state) => state);
  const user = store?.Auth?.user;
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [user]);

  return (
    <>
      {/* <Box className="language_parentBox" marginTop={4}>
        <FormControl>
          <Select
            className="languageChangeBtn "
            value={selected}
            onChange={(e) => {
              handleChangeLanguage(e);
            }}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="chi">CH </MenuItem>
          </Select>
        </FormControl>
      </Box> */}
      <Box className="language_parentBox" marginTop={4}>
        <FormControl>
          <Select
            className="languageChangeBtn "
            value={selected}
            onChange={(e) => {
              handleChangeLanguage(e);
            }}
          >
            <MenuItem className="custom-menu-item text-primary" value="en">
              EN
            </MenuItem>
            <MenuItem className="custom-menu-item text-primary" value="chi">
              CH{' '}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        display={'flex'}
        justifyContent={'center'}
        flex={'auto'}
        flexGrow={1}
        flexShrink={1}
        flexBasis={'0%'}
        marginTop={'5rem'}
      >
        {/* display={'flex'} flexDirection={'column'} alignItems={'center'} */}
        <Box>
          <Box>
            <Box
              position={'relative'}
              height={'7rem'}
              className="logo_parentBox"
            >
              <img src={meneItme[0]?.logo} alt="" />
            </Box>
          </Box>
          <Box>
            <Box marginY={4} position={'relative'}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position={'start'}>
                      <img src={meneItme[0]?.lg_user_logo} alt="" />
                    </InputAdornment>
                  ),
                }}
                className="input_Style"
                placeholder="lorem@ipsum.com"
                name="email"
                onChange={(e) => {
                  parentDataOut(e, 'input');
                }}
              ></TextField>
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
                  endAdornment: (
                    <>
                      <InputAdornment position={'start'}>
                        <img src={meneItme[0]?.psWord_icon} alt="" />
                      </InputAdornment>
                    </>
                  ),
                  startAdornment: (
                    <>
                      <InputAdornment position={'start'}>
                        <img src={meneItme[0]?.lg_user_psword} alt="" />
                      </InputAdornment>
                    </>
                  ),
                }}
                className="input_Style"
                name="password"
                placeholder="******"
                onChange={(e) => {
                  parentDataOut(e, 'input');
                }}
              />
              <Box marginTop={5}>
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
                className="login_button"
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
          <Box
            marginBottom={5}
            display={'flex'}
            justifyContent={'center'}
            alignContent={'center'}
          >
            <Typography variant={'h6'}>
              <Link
                underline="none"
                color={'secondary'}
                onClick={() => {
                  handleOpen();
                }}
              >
                {t(`${meneItme[0]?.forgot}`)}
              </Link>
            </Typography>
          </Box>

          <Button
            variant={'contained'}
            fullWidth
            color={'warning'}
            className="login_button border"
            onClick={() => {
              connectUpdate(2);
            }}
          >
            {t(`${meneItme[0]?.register}`)}
          </Button>
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
