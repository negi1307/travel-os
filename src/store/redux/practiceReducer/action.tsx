import * as actionType from './constants';

export const loginNgoActions = (params: string) => async (dispatch: any) => {
  dispatch({
    type: actionType.FIRST_LOADING,
    payload: params,
  });
};
