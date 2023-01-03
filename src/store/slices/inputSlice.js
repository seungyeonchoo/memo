import { createSlice } from '@reduxjs/toolkit';
import Input from '../../components/Common/Input';
import InputUtils from '../../utils/InputUtils';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    signin: InputUtils.initialSignin,
    signup: InputUtils.initialSignup,
    goalInput: InputUtils.initialGoal,
    todoInput: InputUtils.initialTodo,
    commentInput: InputUtils.initialComment,
    groupInput: InputUtils.initailGroup,
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
    groupInputChange: (state, action) => {
      state.groupInput = action.payload;
    },
  },
});

export const {
  goalInputChange,
  signinChange,
  signupChange,
  todoInputChange,
  commentInputChange,
  groupInputChange,
} = inputSlice.actions;
export default inputSlice.reducer;
