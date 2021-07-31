
import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

export const wrapper = createWrapper(initStore, { debug: true });
