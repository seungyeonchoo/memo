import { createSlice } from '@reduxjs/toolkit';

export const initialSignin = { email: '', password: '' };
export const initialSignup = { email: '', password: '', password_confirm: '', name: '' };
export const initialGoal = {
  due_date: '',
  goal_name: '',
  description: '',
  userId: '',
  date: '',
  is_public: false,
  is_complete: false,
};

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    signin: initialSignin,
    signup: initialSignup,
    goalInput: initialGoal,
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
