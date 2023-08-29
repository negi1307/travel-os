import * as actionType from './constants';

const INITIAL_STATE = {
  signUpData: [],
  loading: false,
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.FIRST_LOADING:
      return {
        signUpData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export { Reducer };
