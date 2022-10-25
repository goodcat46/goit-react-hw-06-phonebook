import { createSlice } from '@reduxjs/toolkit';

import { filterInitialState } from './initialStateFilter';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    applyFilterAction(state, action) {
      state.filter = action.payload
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { applyFilterAction} = filterSlice.actions;