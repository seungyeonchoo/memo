import { createSlice } from '@reduxjs/toolkit';

export const initialProfileToggle = { notice: false, message: false, imminent: false };

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    authToggle: false,
    createGoalToggle: false,
    editGoalToggle: false,
    sortToggle: false,
    filterToggle: false,
    commentToggle: false,
    detailToggle: { _toggle: false, goal: null },
    sideToggle: false,
    profileToggle: initialProfileToggle,
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
    profileToggleChange: (state, action) => {
      state.profileToggle = { ...initialProfileToggle, ...action.payload };
    },
    commentToggleChange: state => {
      state.commentToggle = !state.commentToggle;
    },
    sideToggleChange: state => {
      state.sideToggle = !state.sideToggle;
    },
    detailToggleChange: (state, action) => {
      if (!action) state.detailToggle._toggle = !state.detailToggle._toggle;
      else {
        state.detailToggle._toggle = !state.detailToggle._toggle;
        state.detailToggle.goal = action.payload;
      }
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
  profileToggleChange,
  commentToggleChange,
  sideToggleChange,
} = toggleSlice.actions;

export default toggleSlice.reducer;
