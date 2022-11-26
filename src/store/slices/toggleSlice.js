import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    authToggle: false,
  },
  reducers: {
    authToggleChange: state => {
      state.authToggle = !state.authToggle;
    },
  },
});

export const { authToggleChange } = toggleSlice.actions;
export default toggleSlice.reducer;
