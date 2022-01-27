import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  MAX_SCALE_END_TIME,
  MIN_SCALE_END_TIME,
} from '../../constants/filterConstants';

interface IEndTimeLimits {
  minLimit?: number;
  maxLimit?: number;
}
interface IEndTimeCurrent {
  minCurrent?: number;
  maxCurrent?: number;
}

interface IFilterByEndTime {
  endTimeLimits: IEndTimeLimits;
  endTimeCurrent: IEndTimeCurrent;
}

const initialState: IFilterByEndTime = {
  endTimeLimits: {
    minLimit: MIN_SCALE_END_TIME,
    maxLimit: MAX_SCALE_END_TIME,
  },
  endTimeCurrent: {
    minCurrent: undefined,
    maxCurrent: undefined,
  },
};

const filterByEndTimeSlice = createSlice({
  name: 'routesByEndCityFilter',
  initialState,
  reducers: {
    setFilterByEndTime: (state, action: PayloadAction<IEndTimeCurrent>) => {
      const { minCurrent, maxCurrent } = action.payload;
      state.endTimeCurrent.minCurrent = minCurrent;
      state.endTimeCurrent.maxCurrent = maxCurrent;
    },

    resetFilterByEndTime(state, action: PayloadAction<IEndTimeLimits>) {
      const { minLimit, maxLimit } = action.payload;
      state.endTimeCurrent.minCurrent = minLimit;
      state.endTimeCurrent.maxCurrent = maxLimit;
    },
  },
});

export const { setFilterByEndTime, resetFilterByEndTime } =
  filterByEndTimeSlice.actions;
export const filterByEndTimeReducer = filterByEndTimeSlice.reducer;
