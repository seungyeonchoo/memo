import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    createToggle: false,
    editToggle: false,
    // detailToggle: { _toggle: false, goal: null },
    detailToggle: false,
    sideToggle: false,
  },
  reducers: {
    createToggleChange: state => {
      state.createToggle = !state.createToggle;
    },
    editToggleChange: state => {
      state.editToggle = !state.editToggle;
    },
    sideToggleChange: state => {
      state.sideToggle = !state.sideToggle;
    },
    // detailToggleChange: (state, action) => {
    //   if (!action) state.detailToggle._toggle = !state.detailToggle._toggle;
    //   else {
    //     state.detailToggle._toggle = !state.detailToggle._toggle;
    //     state.detailToggle.goal = action.payload;
    //   }
    // },
    detailToggleChange: state => {
      state.detailToggle = !state.detailToggle;
    },
  },
});

export const { createToggleChange, editToggleChange, detailToggleChange, sideToggleChange } =
  toggleSlice.actions;

export default toggleSlice.reducer;
