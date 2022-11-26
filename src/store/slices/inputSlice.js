import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    inputState: {},
    signin: { email: '', password: '' },
    signup: { email: '', password: '', password_confirm: '', name: '' },
  },
  reducers: {
    inputChange: (state, action) => {
      state.inputState = action.payload;
    },
    signinChange: (state, action) => {
      state.signin = action.payload;
    },
    signupChange: (state, action) => {
      state.signup = action.payload;
    },
  },
});

export const { inputChange, signinChange, signupChange } = inputSlice.actions;
export default inputSlice.reducer;
