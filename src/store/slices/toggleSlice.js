import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    authToggle: false,
    createGoalToggle: false,
    editGoalToggle: false,
    sortToggle: false,
    filterToggle: false,
    detailToggle: { toggle: false, goal: null },
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
    detailToggleChange: (state, action) => {
      if (!state.detailToggle.toggle && !state.detailToggle.goal) {
        state.detailToggle.toggle = !state.detail.toggle;
        state.detailToggle.goal = action.payload;
      }

      if (state.detailToggle.toggle) state.detailToggle.goal = action.payload;
    },
  },
});

export const {
  authToggleChange,
  createGoalToggleChange,
  editGoalToggleChange,
  sortToggleChange,
  filterToggleChange,
  detailToggleChange,
} = toggleSlice.actions;

export default toggleSlice.reducer;
