import { createSlice } from '@reduxjs/toolkit';
import InputUtils from '../../utils/InputUtils';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    signin: InputUtils.initialSignin,
    signup: InputUtils.initialSignup,
    goalInput: InputUtils.initialGoal,
    todoInput: InputUtils.initialTodo,
    commentInput: InputUtils.initialComment,
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
