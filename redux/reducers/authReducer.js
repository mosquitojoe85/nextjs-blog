import { HYDRATE } from 'next-redux-wrapper';
import { LOGIN } from '../types';

const initialState = {
  token: null,
  name: '',
  email: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case LOGIN:
      return { ...state, name: action.name };
    default:
      return state;
  }
};

export default authReducer;
