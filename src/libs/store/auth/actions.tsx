// @flow
import { AuthActionTypes } from "./constants";

type AuthAction = { type: string; payload: {} | string };

// common success
export const authApiResponseSuccess = (
  actionType: string,
  data: any
): AuthAction => ({
  type: AuthActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const authApiResponseError = (
  actionType: string,
  error: string
): AuthAction => ({
  type: AuthActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const loginUser = (
  username: string,
  password: string,
  role: string
): AuthAction => ({
  type: AuthActionTypes.LOGIN_USER,
  payload: { username, password, role },
});

export const logoutUser = (): AuthAction => ({
  type: AuthActionTypes.LOGOUT_USER,
  payload: {},
});
