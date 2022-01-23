import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import orderBy from 'lodash/orderBy';
import { END_CITY } from '../../constants/sortConstants';
import { IRoute } from '../../types';

interface IFilterByEndCity {
  filterByEndCity: { [endCityName: string]: boolean };
}

const initialState: IFilterByEndCity = {
  filterByEndCity: {},
};

const filterByEndCitySlice = createSlice({
  name: 'routesByEndCityFilter',
  initialState,
  reducers: {
    initializeFilterByEndCity(state, action: PayloadAction<IRoute[]>) {
      state.filterByEndCity = {};
      const routes = action.payload;
      const sortedByEndCity = orderBy(routes, END_CITY);
      sortedByEndCity.forEach((route) => {
        state.filterByEndCity[route.end_city.city.name] = false;
      });
    },

    setEndCityFilterParams: (
      state,
      action: PayloadAction<{ endCityName: string; filterState: boolean }>
    ) => {
      const { endCityName, filterState } = action.payload;
      state.filterByEndCity[endCityName] = filterState;
    },
  },
});

export const { initializeFilterByEndCity, setEndCityFilterParams } =
  filterByEndCitySlice.actions;
export const filterByEndCityReducer = filterByEndCitySlice.reducer;
