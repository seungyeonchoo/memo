import { createSlice } from '@reduxjs/toolkit';
import { initialComment, initialGoal, initialTodo } from '../../utils/initialInputs';

export const initialSignin = { email: '', password: '' };
export const initialSignup = { email: '', password: '', password_confirm: '', name: '' };

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    signin: initialSignin,
    signup: initialSignup,
    goalInput: initialGoal,
    todoInput: initialTodo,
    commentInput: initialComment,
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
    commentInputChange: (state, action) => {
      state.commentInput = action.payload;
    },
  },
});

export const { goalInputChange, signinChange, signupChange, todoInputChange, commentInputChange } =
  inputSlice.actions;
export default inputSlice.reducer;
