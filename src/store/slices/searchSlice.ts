import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  initialSearchParams,
  ISearchParams,
} from '../../constants/searchContants';

const initialState = initialSearchParams;

const searchSlice = createSlice({
  name: 'routeSearch',
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<ISearchParams>) => {
      const { startCity, endCity, company } = action.payload;
      state.startCity = startCity;
      state.endCity = endCity;
      state.company = company;
    },
  },
});

export const { setSearchParams } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
