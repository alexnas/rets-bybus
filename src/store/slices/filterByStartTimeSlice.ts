import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IStartTimeLimits {
  minLimit: number;
  maxLimit: number;
}
interface IStartTimeCurrent {
  minCurrent: number | null;
  maxCurrent: number | null;
}

const initialState: IStartTimeCurrent = {
  minCurrent: null,
  maxCurrent: null,
};

const filterByStartTimeSlice = createSlice({
  name: 'routesByEndCityFilter',
  initialState,
  reducers: {
    setFilterByStartTime(state, action: PayloadAction<IStartTimeCurrent>) {
      const { minCurrent, maxCurrent } = action.payload;
      state.minCurrent = minCurrent;
      state.maxCurrent = maxCurrent;
    },

    resetFilterByStartTime(state, action: PayloadAction<IStartTimeLimits>) {
      const { minLimit, maxLimit } = action.payload;
      state.minCurrent = minLimit;
      state.maxCurrent = maxLimit;
    },
  },
});

export const { setFilterByStartTime, resetFilterByStartTime } =
  filterByStartTimeSlice.actions;
export const filterByStartTimeReducer = filterByStartTimeSlice.reducer;
