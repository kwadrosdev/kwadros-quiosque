import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from './storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const initStore = createStore(
  persistedReducer,
  {},
  process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware()) : applyMiddleware()
);

export const persistor = persistStore(initStore);

export type RootState = ReturnType<typeof initStore.getState>;
export type AppDispatch = typeof initStore.dispatch;
