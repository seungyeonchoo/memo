import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: { inputState: {} },
  reducers: {
    inputChange: (state, action) => {
      state.inputState = action.payload;
    },
  },
});

export const { inputChange } = inputSlice.actions;
export default inputSlice.reducer;
