import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    authToggle: false,
    createGoalToggle: false,
    editGoalToggle: false,
    sortToggle: false,
    filterToggle: false,
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
    sortToggleChange: state => {
      state.sortToggle = !state.sortToggle;
    },
    filterToggleChange: state => {
      state.filterToggle = !state.filterToggle;
    },
  },
});

export const {
  authToggleChange,
  createGoalToggleChange,
  editGoalToggleChange,
  sortToggleChange,
  filterToggleChange,
} = toggleSlice.actions;

export default toggleSlice.reducer;
