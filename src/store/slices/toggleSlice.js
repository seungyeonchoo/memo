import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    authToggle: false,
    addGoal: false,
  },
  reducers: {
    authToggleChange: state => {
      state.authToggle = !state.authToggle;
    },
    addGoalChange: state => {
      state.addGoal = !state.addGoal;
    },
  },
});

export const { authToggleChange, addGoalChange } = toggleSlice.actions;
export default toggleSlice.reducer;
