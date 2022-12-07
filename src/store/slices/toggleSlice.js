import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    authToggle: false,
    createGoalToggle: false,
    editGoalToggle: false,
  },
  reducers: {
    authToggleChange: state => {
      state.authToggle = !state.authToggle;
    },
    createGoalToggleChange: state => {
      state.createGoalToggle = !state.createGoalToggle;
    },
    editGoalToggleChange: state => {
      state.editGoalToggle = !state.editGoalToggle;
    },
  },
});

export const { authToggleChange, createGoalToggleChange, editGoalToggleChange } =
  toggleSlice.actions;
export default toggleSlice.reducer;
