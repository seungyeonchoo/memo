import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    signin: { email: '', password: '' },
    signup: { email: '', password: '', password_confirm: '', name: '' },
    goalInput: {
      due_date: '',
      goal_name: '',
      description: '',
      userId: '',
      date: '',
      is_public: false,
      is_complete: false,
      is_edit: false,
    },
  },
  reducers: {
    goalInputChange: (state, action) => {
      state.goalInput = action.payload;
    },
    signinChange: (state, action) => {
      state.signin = action.payload;
    },
    signupChange: (state, action) => {
      state.signup = action.payload;
    },
  },
});

export const { goalInputChange, signinChange, signupChange } = inputSlice.actions;
export default inputSlice.reducer;
