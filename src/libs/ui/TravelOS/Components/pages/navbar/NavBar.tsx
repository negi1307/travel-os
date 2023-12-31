import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import HomeIcon from '@mui/icons-material/Home';
import SpeedIcon from '@mui/icons-material/Speed';
import InsightsIcon from '@mui/icons-material/Insights';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HelpIcon from '@mui/icons-material/Help';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

// import './NavBar.css';
import { logoutUser } from '../../../../../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useLocation } from 'react-router-dom';

import { useStyles } from '../../../../../../ui';

interface MyComponentProps {
  meneItme: any; // Declare the prop here
}

const NavBar = (props: MyComponentProps) => {
  const { meneItme } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  const {
    home_navBar_icon,
    home,
    speed,
    user,
    information,
    hotel,
    bell,
    navBar_bground,
  } = meneItme?.[7]?.homepg?.[0]?.nvBarIcon?.[0];
  const { nvBarHome, nvBarDashbaod, nvBarMyAccount, nvBarFAQs, nvBarHoteInfo } =
    meneItme?.[7]?.homepg?.[0]?.nvBarText?.[0];
  // common use margine,border,bgColor
  let marginLeft2 = 2;
  let borderRadius5 = 5;
  let paddingX2 = 2;
  let marginX4 = 5;
  let bgcolorPrimaryMain = 'primary.main';
  const [mobileNavBar, setMobileNavbar] = useState(false);
  let windowFind = window.innerWidth;
  const location = useLocation();
  const dispatch = useDispatch();

  const store = useSelector((state: any) => state);
  const userd = store?.Auth?.user;
  const navigate = useNavigate();

  // navBar data
  const navBarLink = [
    {
      pathname: '/dashboard/home',
      linkName: nvBarHome,
      linkIcon: home,
    },
    {
      pathname: '/dashboard/dashboards',
      linkName: nvBarDashbaod,
      linkIcon: speed,
    },
    {
      pathname: '/dashboard/myaccount',
      linkName: nvBarMyAccount,
      linkIcon: user,
    },
    {
      pathname: '/dashboard/faq',
      linkName: nvBarFAQs,
      linkIcon: information,
    },
    {
      pathname: '/dashboard/hotelinfo',
      linkName: nvBarHoteInfo,
      linkIcon: hotel,
    },
  ];
  // navBar data

  useEffect(() => {
    if (userd == null) {
      navigate('/');
    }
  }, [userd]);

  console.log(windowFind, 'winnnn');
  useEffect(() => {
    if (windowFind <= 960) {
      setMobileNavbar(false);
    } else {
      setMobileNavbar(true);
    }
  }, [windowFind]);
  return (
    <div>
      <Box
        display={'flex'}
        height={'102px'}
        paddingLeft={4}
        paddingRight={4}
        alignItems={'center'}
        justifyContent={'space-between'}
        className="navbar_parent"
        position={'relative'}
      >
        <Box
          className="z_index mobile_navbar padding_widt"
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexGrow={1}
          flexShrink={1}
          flexBasis={1}
          position={'relative'}
        >
          <Box className="website_logo">
            <Box>
              <img
                src={home_navBar_icon}
                alt="companyLogo"
                className="navBar_left_side_logo_wt_ht"
              />
              <Box display={'flex'} justifyContent={'center '}>
                <Typography className="navBar_left_side_Text_font_style">
                  BUSINESS CONNECT
                </Typography>
              </Box>
            </Box>

            <Box
              className="only_ShowMobile"
              onClick={() => {
                setMobileNavbar(!mobileNavBar);
              }}
            >
              <MenuIcon sx={{ color: 'black' }} />
            </Box>
          </Box>
          {mobileNavBar ? (
            <>
              <Box
                display={'flex'}
                flexGrow={1}
                flexShrink={1}
                flexBasis={1}
                paddingLeft={4}
                alignItems={'center'}
                className="mobile_innerLinkBox padding_width "
              >
                {navBarLink?.map((item) => {
                  return (
                    <>
                      <Box
                        marginX={3}
                        paddingX={paddingX2}
                        display={'flex'}
                        className={
                          location?.pathname === item.pathname
                            ? 'navbar_linkcss inner_link'
                            : 'inner_link'
                        }
                      >
                        <Box>
                          <img src={item.linkIcon} alt="" />
                        </Box>
                        <Box
                          className="navbar_linkFont "
                          marginLeft={marginLeft2}
                        >
                          <Typography>
                            <Link to={item.pathname} className="navBar_link">
                              {t(`${item.linkName}`)}
                            </Link>
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  );
                })}

                <Box
                  className="inner_link only_ShowMobile "
                  position={'relative'}
                  display={'flex'}
                  alignItems={'center'}
                  alignContent={'end'}
                >
                  <Box>
                    <img className="bell_image" src={bell} alt="" />
                  </Box>
                  <Box>
                    <Typography className="navbar_linkFont">Ruben</Typography>
                  </Box>
                  <Box>
                    {' '}
                    <KeyboardArrowDownIcon
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </>
          ) : (
            ''
          )}
        </Box>
        <Box
          className="toggle_parent z_index padding_width mobile_nvbDisplayNone"
          // position={'relative'}
          // display={'flex'}
          // alignItems={'center'}
          // alignContent={'end'}
        >
          <Box>
            <img src={bell} alt="" />
          </Box>
          <Box marginX={3}>
            <Typography className="navBar_rightRuberFontStyle">
              Ruben
            </Typography>
          </Box>
          <Box color="primary.main">
            {' '}
            <KeyboardArrowDownIcon
              onClick={() => {
                dispatch(logoutUser());
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default NavBar;
