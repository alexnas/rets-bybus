import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPriceLimits {
  minLimit: number;
  maxLimit: number;
}
export interface IPriceCurrent {
  minCurrent: number | null;
  maxCurrent: number | null;
}

const initialState: IPriceCurrent = {
  minCurrent: null,
  maxCurrent: null,
};

const filterByPriceSlice = createSlice({
  name: 'routesByEndCityFilter',
  initialState,
  reducers: {
    setFilterByPrice(state, action: PayloadAction<IPriceCurrent>) {
      const { minCurrent, maxCurrent } = action.payload;
      state.minCurrent = minCurrent;
      state.maxCurrent = maxCurrent;
    },

    resetFilterByPrice(state, action: PayloadAction<IPriceLimits>) {
      const { minLimit, maxLimit } = action.payload;
      state.minCurrent = minLimit;
      state.maxCurrent = maxLimit;
    },
  },
});

export const { setFilterByPrice, resetFilterByPrice } =
  filterByPriceSlice.actions;
export const filterByPriceReducer = filterByPriceSlice.reducer;
