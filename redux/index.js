
import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import reducer from './reducers';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
  ));
};

export const wrapper = createWrapper(initStore, { debug: true });
