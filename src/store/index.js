import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import inputSlice from './slices/inputSlice';

const rootReducer = combineReducers({
  input: inputSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
