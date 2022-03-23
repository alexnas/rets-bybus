import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IEndTimeLimits {
  minLimit: number;
  maxLimit: number;
}
interface IEndTimeCurrent {
  minCurrent: number | null;
  maxCurrent: number | null;
}

const initialState: IEndTimeCurrent = {
  minCurrent: null,
  maxCurrent: null,
};

const filterByEndTimeSlice = createSlice({
  name: 'routesByEndCityFilter',
  initialState,
  reducers: {
    setFilterByEndTime(state, action: PayloadAction<IEndTimeCurrent>) {
      const { minCurrent, maxCurrent } = action.payload;
      state.minCurrent = minCurrent;
      state.maxCurrent = maxCurrent;
    },

    resetFilterByEndTime(state, action: PayloadAction<IEndTimeLimits>) {
      const { minLimit, maxLimit } = action.payload;
      state.minCurrent = minLimit;
      state.maxCurrent = maxLimit;
    },
  },
});

export const { setFilterByEndTime, resetFilterByEndTime } =
  filterByEndTimeSlice.actions;
export const filterByEndTimeReducer = filterByEndTimeSlice.reducer;
