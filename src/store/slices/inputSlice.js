import { createSlice } from '@reduxjs/toolkit';
import InputUtils from '../../utils/InputUtils';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    goalInput: InputUtils.initialGoal,
    groupGoalInput: InputUtils.initialGroupGoal,
  },
  reducers: {
    goalInputChange: (state, action) => {
      state.goalInput = action.payload;
    },
    groupGoalInputChange: (state, action) => {
      state.groupGoalInput = action.payload;
    },
  },
});

export const { goalInputChange, groupGoalInputChange } = inputSlice.actions;
export default inputSlice.reducer;
