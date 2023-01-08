import { createSlice } from '@reduxjs/toolkit';
import ParamUtils from '../../utils/ParamUtils';

const paramSlice = createSlice({
  name: 'param',
  initialState: {
    userParams: ParamUtils.initialUserParams,
    goalParams: ParamUtils.initialGoalParams,
    todoParams: ParamUtils.initialTodoParams,
    sortParams: { _sort: 'due_date', _order: 'asc' },
    filterParams: { is_complete: null, is_public: null },
  },
  reducers: {
    goalParamsChange: (state, action) => {
      state.goalParams = { ...state.goalParams, ...action.payload };
    },
    userParamsChange: (state, action) => {
      state.userParams = { ...state.userParams, ...action.payload };
    },
    todoParamsChange: (state, action) => {
      state.todoParams = { ...state.todoParams, ...action.payload };
    },
  },
});

export const { goalParamsChange, userParamsChange, todoParamsChange } = paramSlice.actions;
export default paramSlice.reducer;
