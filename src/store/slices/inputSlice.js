import { createSlice } from '@reduxjs/toolkit';
import { initialGoal, initialMemo, initialTodo } from '../../utils/initialInputs';

export const initialSignin = { email: '', password: '' };
export const initialSignup = { email: '', password: '', password_confirm: '', name: '' };

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    signin: initialSignin,
    signup: initialSignup,
    goalInput: initialGoal,
    todoInput: initialTodo,
    memoInput: initialMemo,
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
    todoInputChange: (state, action) => {
      state.todoInput = action.payload;
    },
    memoInputChange: (state, action) => {
      state.memoInput = action.payload;
    },
  },
});

export const { goalInputChange, signinChange, signupChange, todoInputChange, memoInputChange } =
  inputSlice.actions;
export default inputSlice.reducer;
