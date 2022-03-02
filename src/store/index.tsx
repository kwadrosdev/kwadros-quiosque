import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initStore = createStore(
  rootReducer,
  {},
  process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware()) : applyMiddleware()
);

export type RootState = ReturnType<typeof initStore.getState>;
export type AppDispatch = typeof initStore.dispatch;
