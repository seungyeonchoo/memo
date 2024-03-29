import { createSlice } from '@reduxjs/toolkit';
import DateUtils from '../../utils/DateUtils';
import InputUtils from '../../utils/InputUtils';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    goalInput: InputUtils.initialGoal,
    groupGoalInput: InputUtils.initialGroupGoal,
    dateInfo: {
      date: DateUtils.convert(new Date()),
      week: DateUtils.getWeekList(DateUtils.convert(new Date())),
    },
  },
  reducers: {
    goalInputChange: (state, action) => {
      state.goalInput = action.payload;
    },
    groupGoalInputChange: (state, action) => {
      state.groupGoalInput = action.payload;
    },
    dateInfoUpdate: (state, action) => {
      state.dateInfo = action.payload;
    },
  },
});

export const { goalInputChange, groupGoalInputChange, dateInfoUpdate } = inputSlice.actions;
export default inputSlice.reducer;
