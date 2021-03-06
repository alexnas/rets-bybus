import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import orderBy from 'lodash/orderBy';
import { START_CITY } from '../../constants/sortConstants';
import { IRoute } from '../../types';

interface IFilterByStartCity {
  filterByStartCity: { [startCityName: string]: boolean };
}

const initialState: IFilterByStartCity = {
  filterByStartCity: {},
};

const filterByStartCitySlice = createSlice({
  name: 'routesByStartCityFilter',
  initialState,
  reducers: {
    initializeFilterByStartCity(state, action: PayloadAction<IRoute[]>) {
      state.filterByStartCity = {};
      const routes = action.payload;
      const sortedByStartCity = orderBy(routes, START_CITY);
      sortedByStartCity.forEach((route) => {
        state.filterByStartCity[route.start_city.city.name] = false;
      });
    },

    setStartCityFilterParams: (
      state,
      action: PayloadAction<{ startCityName: string; filterState: boolean }>
    ) => {
      const { startCityName, filterState } = action.payload;
      state.filterByStartCity[startCityName] = filterState;
    },
  },
});

export const { initializeFilterByStartCity, setStartCityFilterParams } =
  filterByStartCitySlice.actions;
export const filterByStartCityReducer = filterByStartCitySlice.reducer;
