import { createSlice } from '@reduxjs/toolkit';

export const initialSignin = { email: '', password: '' };
export const initialSignup = { email: '', password: '', password_confirm: '', name: '' };
export const initialTodo = { todo: '' };
export const initialMemo = { memo: '' };
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
