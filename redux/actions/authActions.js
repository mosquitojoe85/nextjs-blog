import { LOGIN } from '../types';

export const login = (payload) => (
  { type: LOGIN, ...payload }
);

export const signup = () => ({});
