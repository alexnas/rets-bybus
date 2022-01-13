import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  BUS_ROUTES_SORT_PARAMS,
  ISortParamSpecs,
} from '../../constants/sortConstants';

const { START_CITY } = BUS_ROUTES_SORT_PARAMS;

interface ISortState {
  sortParams: ISortParamSpecs;
}

const initialState: ISortState = {
  sortParams: START_CITY,
};

const sortSlice = createSlice({
  name: 'routeSort',
  initialState,
  reducers: {
    setSortParams(state, action: PayloadAction<ISortParamSpecs>) {
      state.sortParams = action.payload;
    },

    initSortParams(state) {
      return initialState;
    },
  },
});

export const { initSortParams, setSortParams } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
