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
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import '../../../../TravelOS/Components/pages/style.css';
import ForgetChangePassword from '../../../../../models/forgetChangePassword/ForgetChangePassword';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ErrorHandlingLogin from './errorLogin/ErrorHandlingLogin';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface MyComponentProps {
  meneItme: any; // Declare the prop here
  connectUpdate: any;
}

const Login = (props: MyComponentProps) => {
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

  // password show & hidde
  const [hidde, setHidde] = useState(false);

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

  //language data
  const [show, setShow] = useState(false);
  const [getLanguage, setGetLanguage] = useState('English');
  const onClickGetLanguage = (type: string) => {
    setGetLanguage(type);
    setShow(false);
    let findLanguage =
      type === 'English' ? 'En' : type === '中文' ? 'chi' : 'En';
    i18next.changeLanguage(findLanguage);
  };
  const languageData = [
    { type: 'English' },
    { type: 'Русский' },
    { type: 'Deutsch' },
    { type: 'Español' },
    { type: 'Français' },
    { type: 'العربية' },
    { type: '中文' },
  ];

  // model forget/ChangePassword
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // auth protect routing
  const store = useSelector((state: any) => state);
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
      <Box>
        {/* <FormControl>
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
        </FormControl> */}
        <Box position={'relative'} className="language_dropdownParent">
          <Box
            position={'relative'}
            display={'flex'}
            alignItems={'center'}
            paddingLeft={4}
            marginTop={4}
            className="cursor"
            onClick={() => {
              setShow(!show);
            }}
          >
            <Box>
              <Typography className="login_lngug login_lgnug_">
                {getLanguage === 'English' ? <>En</> : <>{getLanguage}</>}
              </Typography>
            </Box>
            <Box>
              <KeyboardArrowDownIcon className="login_lgnug_" />
            </Box>
          </Box>
          {show ? (
            <Box className="login_lngug_main_box">
              {languageData?.map((item) => {
                return (
                  <>
                    <Typography
                      className={
                        getLanguage === item.type
                          ? 'login_lnguag_text_font_style_active cursor'
                          : 'login_lnguag_text_font_style cursor'
                      }
                      onClick={() => {
                        onClickGetLanguage(item.type);
                      }}
                    >
                      {item.type}
                    </Typography>
                  </>
                );
              })}
            </Box>
          ) : (
            <></>
          )}
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
          <Box>
            <Box className="login_form_main_box">
              <Box>
                <Box
                  // position={'relative'}
                  // height={'7rem'}
                  className="logo_parentBox"
                >
                  <img src={meneItme[0]?.logo} alt="" />
                </Box>
                <Box display={'flex'} justifyContent={'center'}>
                  <Typography className="login_business_font_style">
                    BUSINESS CONNECT
                  </Typography>
                </Box>
              </Box>
              <Box marginTop={4} position={'relative'}>
                <TextField
                  InputProps={{
                    disableUnderline: false,
                    autoFocus: false, // <== added this
                    startAdornment: (
                      <InputAdornment position={'start'}>
                        <img src={meneItme[0]?.lg_user_logo} alt="" />
                      </InputAdornment>
                    ),
                  }}
                  className="input_Style"
                  placeholder="partner@agency.com"
                  name="email"
                  onChange={(e) => {
                    parentDataOut(e, 'input');
                  }}
                ></TextField>
                <Box>
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
                        {hidde ? (
                          <>
                            <InputAdornment
                              position={'start'}
                              className="cursor"
                              onClick={() => {
                                setHidde(!hidde);
                              }}
                            >
                              <VisibilityIcon className="input_password_icon" />
                            </InputAdornment>
                          </>
                        ) : (
                          <>
                            <InputAdornment
                              position={'start'}
                              className="cursor"
                              onClick={() => {
                                setHidde(!hidde);
                              }}
                            >
                              <VisibilityOffIcon className="input_password_icon" />
                              {/* <img src={meneItme[0]?.psWord_icon} alt="" /> */}
                            </InputAdornment>
                          </>
                        )}
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
                  type={hidde ? 'text' : 'password'}
                  onChange={(e) => {
                    parentDataOut(e, 'input');
                  }}
                />
                <Box>
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
              <Box marginTop={3}>
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
              <Box
                marginBottom={3}
                marginTop={1}
                display={'flex'}
                justifyContent={'center'}
                alignContent={'center'}
              >
                <Typography>
                  <Link
                    underline="none"
                    // color={'secondary'}
                    className="login_forget_font_style"
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
        </Box>
        <>
          <ForgetChangePassword open={open} handleClose={handleClose} />
          <ErrorHandlingLogin
            parentsDataIn={parentOutData}
            ChildDataOut={childDataIn}
          />
        </>
      </Box>
    </>
  );
};

export default Login;
