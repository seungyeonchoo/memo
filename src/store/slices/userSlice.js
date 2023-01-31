import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { user_id: '' },
  reducers: {
    saveUserId: (state, action) => {
      state.user_id = action.payload;
    },
  },
});

export const { saveUserId } = userSlice.actions;
export default userSlice.reducer;
