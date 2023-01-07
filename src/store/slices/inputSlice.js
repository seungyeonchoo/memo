import { createSlice } from '@reduxjs/toolkit';
import InputUtils from '../../utils/InputUtils';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    goalInput: InputUtils.initialGoal,
  },
  reducers: {
    goalInputChange: (state, action) => {
      state.goalInput = action.payload;
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
