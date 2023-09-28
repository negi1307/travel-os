// import jwtDecode from 'jwt-decode';
import axios from 'axios';
import config from '../../../app/config';
// import config from '../../config';

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = config.API_URL;

axios.interceptors.request.use(
  function (config) {
    config.headers['x-device-details'] = '';
    config.headers['language'] = '';
    config.headers['x-partner-code'] = '';
    console.log('INTERCEPTERS REQUEST :', config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// intercepting to capture errors
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;

    if (error && error.response && error.response.status === 404) {
      // window.location.href = '/not-found';
    } else if (error && error.response && error.response.status === 403) {
      window.location.href = '/access-denied';
    } else {
      switch (error.response.status) {
        case 401:
          message = 'Invalid credentials';
          break;
        case 403:
          message = 'Access Forbidden';
          break;
        case 404:
          message = 'Sorry! the data you are looking for could not be found';
          break;
        default: {
          message =
            error.response && error.response.data
              ? error.response.data['message']
              : error.message || error;
        }
      }
      return Promise.reject(message);
    }
  }
);

const AUTH_SESSION_KEY = 'hyper_user';

/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token: any) => {
  if (token) axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
  else delete axios.defaults.headers.common['Authorization'];
};

const getUserFromSession = () => {
  const user = sessionStorage.getItem(AUTH_SESSION_KEY);
  return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};
class APICore {
  /**
   * Fetches data from given url
   */
  get = (url: any, params: any) => {
    let response;
    if (params) {
      var queryString = params
        ? Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&')
        : '';
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }
    return response;
  };

  getFile = (url: any, params: any) => {
    let response;
    if (params) {
      var queryString = params
        ? Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&')
        : '';
      response = axios.get(`${url}?${queryString}`, { responseType: 'blob' });
    } else {
      response = axios.get(`${url}`, { responseType: 'blob' });
    }
    return response;
  };

  getMultiple = (urls: any, params: any) => {
    const reqs = [];
    let queryString = '';
    if (params) {
      queryString = params
        ? Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&')
        : '';
    }

    for (const url of urls) {
      reqs.push(axios.get(`${url}?${queryString}`));
    }
    return axios.all(reqs);
  };

  /**
   * post given data to url
   */
  create = (url: any, data: any) => {
    return axios.post(url, data);
  };

  /**
   * Updates patch data
   */
  updatePatch = (url: any, data: any) => {
    return axios.patch(url, data);
  };

  /**
   * Updates data
   */
  update = (url: any, data: any) => {
    return axios.put(url, data);
  };

  /**
   * Deletes data
   */
  delete = (url: any) => {
    return axios.delete(url);
  };

  /**
   * post given data to url with file
   */
  createWithFile = (url: any, data: any) => {
    const formData = new FormData();
    for (const k in data) {
      formData.append(k, data[k]);
    }

    const config = {
      headers: {
        ...axios.defaults.headers,
        'content-type': 'multipart/form-data',
      },
    };
    return axios.post(url, formData);
  };

  /**
   * post given data to url with file
   */
  updateWithFile = (url: any, data: any) => {
    const formData = new FormData();
    for (const k in data) {
      formData.append(k, data[k]);
    }

    const config = {
      headers: {
        ...axios.defaults.headers,
        'content-type': 'multipart/form-data',
      },
    };
    return axios.patch(url, formData);
  };

  isUserAuthenticated = () => {
    const user = this.getLoggedInUser();
    if (!user || (user && !user.token)) {
      return false;
    }
    if (!user.token) {
      return false;
    }
    return true;
    // const decoded = jwtDecode(user.token);
    // const currentTime = Date.now() / 1000;
    // if (decoded.exp < currentTime) {
    //     console.warn('access token expired');
    //     return false;
    // } else {
    //     return true;
    // }
  };

  setLoggedInUser = (session: any) => {
    if (session)
      sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
    else {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    }
  };

  /**
   * Returns the logged in user
   */
  getLoggedInUser = () => {
    return getUserFromSession();
  };

  setUserInSession = (modifiedUser: any) => {
    let userInfo = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (userInfo) {
      const { token, user } = JSON.parse(userInfo);
      this.setLoggedInUser({ token, ...user, ...modifiedUser });
    }
  };
}

/*
Check if token available in session
*/
let user = getUserFromSession();
if (user) {
  const { token } = user;
  if (token) {
    setAuthorization(token);
  }
}

export { APICore, setAuthorization };
