import { createSlice } from '@reduxjs/toolkit';

const paramSlice = createSlice({
  name: 'param',
  initialState: {
    sortParams: { _sort: 'date', _order: 'asc' },
    filterParams: { is_complete: null, is_public: null },
  },
  reducers: {
    sortParamChange: (state, action) => {
      state.sortParams = action.payload;
    },
    filterParamChange: (state, action) => {
      state.filterParams = action.payload;
    },
  },
});

export const { sortParamChange, filterParamChange } = paramSlice.actions;
export default paramSlice.reducer;
