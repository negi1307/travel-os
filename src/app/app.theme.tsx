import bckGroundImg from '../../public/staticImage/background.avif';
import bckGroundImg1 from '../../public/staticImage/background1.avif';
import bckGroundImg2 from '../../public/staticImage/background2.avif';
import jumeirahLogo from '../../public/staticImage/jumeirahLogo.avif';
import downIcon from '../../public/staticImage/downIcon.png';
import mainLogo from '../../public/staticImage/mainLogo.webp';
// new image
// bckgroud image
import bg_banner1 from '../../public/staticImage/bg_banner1.png';
import bg_banner2 from '../../public/staticImage/bg_banner2.png';
import bg_banner3 from '../../public/staticImage/bg_banner3.png';

// login input icon
import atlantis_logo from '../../public/staticImage/Atlantis_Logo_White 1.png';
import lg_user_logo from '../../public/staticImage/lg_user_icon.png';
import lg_user_psword from '../../public/staticImage/lg_user_pswrd.png';
import psWord_icon from '../../public/staticImage/psword_icon.png';

// home pg navBar icon
import home_navBar_icon from '../../public/staticImage/home_nvBar_icon_main.png';
import home from '../../public/staticImage/Home_icon1.png';
import speed from '../../public/staticImage/Speedometer_icon2.png';
import user from '../../public/staticImage/User_icon3.png';
import information from '../../public/staticImage/Information_icon4.png';
import hotel from '../../public/staticImage/Hotel_icon5.png';
import bell from '../../public/staticImage/Bell_icon6.png';
import navBar_bground from '../../public/staticImage/navBar_bground.png';

// footer Icon
import faceBookIcon from '../../public/staticImage/FacebookAppSymbol.png';
import instagramIcon from '../../public/staticImage/Instagram.png';
import youTubeIcon from '../../public/staticImage/Youtube.png';
import twitterIcon from '../../public/staticImage/Twitter.png';

// choose room img
import left_side_arrow from '../../public/staticImage/left_Side_img.png';
import choose_Room_top from '../../public/staticImage/choose_room_img.png';
import choose_Room_section from '../../public/staticImage/choose_room_img1.png';
import choose_user from '../../public/staticImage/choose_user_img.png';
import choose_down_arrow_img from '../../public/staticImage/choose_down_img_arrow.png';

export const meneItme: any = [
  {
    logo: atlantis_logo,
    logoName: 'businessConnect',
    loginBtn: 'login',
    backgroundImage: bg_banner1,
    forgot: 'forgot',
    language: 'language',
    register: 'register',
    lg_user_logo: lg_user_logo,
    lg_user_psword: lg_user_psword,
    psWord_icon,
  },
  {
    registrationGudl: 'guidelinesHeading',
    title: [
      {
        point1: 'guidelines',
      },
    ],
    registrationBtn: 'registration',
  },
  {
    registerTitle: 'registerTitle',
    rgFistName: 'rgFistName',
    rgLastName: 'rgLastName',
    rgNumber: 'rgNumber',
    rgEmail: 'rgEmail',
    rgCode: 'rgCode',
    rgName: 'rgName',
    rgCountry: 'rgCountry',
    rgCity: 'rgCity',
    rgdocument: 'rgdocument',
    rgAddFile: 'rgAddFile',
    rgGuideline: 'rgGuideline',
    rgExpression: 'rgExpression',
    back: 'back',
  },
  {
    logErrorEmailRquid: 'logErrorEmailRquid',
    logErrorEmailVlid: 'logErrorEmailVlid',
    logErroPassword: 'logErroPassword',
  },
  {
    rgErrorFstName: 'rgErrorFstName',
    rgErrorLstName: 'rgErrorLstName',
    rgErrorNumber: 'rgErrorNumber',
    rgErrorEmail: 'rgErrorEmail',
    reErrorCode: 'reErrorCode',
    rgErrorAgencyName: 'rgErrorAgencyName',
    rgErrorCountry: 'rgErrorCountry',
    rgErrorCity: 'rgErrorCity',
    rgErrorFile: 'rgErrorFile',
    rgErrorMessage: 'rgErrorMessage',
  },

  [
    {
      imgPath: bg_banner1,
    },
    {
      imgPath: bg_banner2,
    },
    {
      imgPath: bg_banner3,
    },
  ],
  { downIcon: downIcon },

  {
    homepg: [
      {
        nvBarIcon: [
          {
            home_navBar_icon,
            home,
            speed,
            user,
            information,
            hotel,
            bell,
            navBar_bground,
          },
        ],
        nvBarText: [
          {
            nvBarHome: 'nvBarHome',
            nvBarDashbaod: 'nvBarDashbaod',
            nvBarMyAccount: 'nvBarMyAccount',
            nvBarFAQs: 'nvBarFAQs',
            nvBarHoteInfo: 'nvBarHoteInfo',
          },
        ],
      },
    ],
  },

  {
    footerIcon: [
      {
        faceBookIcon,
        instagramIcon,
        youTubeIcon,
        twitterIcon,
      },
    ],
  },
  {
    chooseRoomImg: [
      {
        left_side_arrow,
        choose_Room_top,
        choose_Room_section,
        hotel,
        choose_user,
        choose_down_arrow_img,
      },
    ],
  },
];
