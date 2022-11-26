import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import inputSlice from './slices/inputSlice';
import toggleSlice from './slices/toggleSlice';

const rootReducer = combineReducers({
  input: inputSlice,
  toggle: toggleSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export default store;
