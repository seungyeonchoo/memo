import { createSlice } from '@reduxjs/toolkit';

const paramSlice = createSlice({
  name: 'param',
  initialState: { sortParams: { _sort: 'date', _order: 'asc' }, filterParams: {} },
  reducers: {
    sortParamChange: (state, action) => {
      state.sortParams = action.payload;
    },
  },
});

export const { sortParamChange } = paramSlice.actions;
export default paramSlice.reducer;
