import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  MAX_SCALE_START_TIME,
  MIN_SCALE_START_TIME,
} from '../../constants/filterConstants';

interface IFilterByStartTime {
  minLimit?: number;
  maxLimit?: number;
  minCurrent?: number;
  maxCurrent?: number;
}

const minHourLimit = +MIN_SCALE_START_TIME.split(':')[0];
const maxHourLimit = +MAX_SCALE_START_TIME.split(':')[0];

const initialState: IFilterByStartTime = {
  minLimit: minHourLimit,
  maxLimit: maxHourLimit,
  minCurrent: minHourLimit,
  maxCurrent: maxHourLimit,
};

const filterByStartTimeSlice = createSlice({
  name: 'routesByStartCityFilter',
  initialState,
  reducers: {
    initializeFilterByStartTime(
      state,
      action: PayloadAction<{
        filterByStartTime: IFilterByStartTime;
      }>
    ) {
      const { minLimit, maxLimit } = action.payload.filterByStartTime;

      state.minLimit = minLimit;
      state.maxLimit = maxLimit;
    },

    resetFilterByStartTime(
      state,
      action: PayloadAction<{
        filterByStartTime: IFilterByStartTime;
      }>
    ) {
      const { minLimit, maxLimit } = action.payload.filterByStartTime;

      state.minLimit = minLimit;
      state.maxLimit = maxLimit;
      state.minCurrent = minLimit;
      state.maxCurrent = maxLimit;
    },

    setFilterByStartTimeParams: (
      state,
      action: PayloadAction<IFilterByStartTime>
    ) => {
      const { minCurrent, maxCurrent } = action.payload;
      state.minCurrent = minCurrent;
      state.maxCurrent = maxCurrent;
    },
  },
});

export const {
  initializeFilterByStartTime,
  resetFilterByStartTime,
  setFilterByStartTimeParams,
} = filterByStartTimeSlice.actions;
export const filterByStartTimeReducer = filterByStartTimeSlice.reducer;
