import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import inputSlice from './slices/inputSlice';
import paramSlice from './slices/paramSlice';
import toggleSlice from './slices/toggleSlice';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
  input: inputSlice,
  toggle: toggleSlice,
  user: userSlice,
  param: paramSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export default store;
