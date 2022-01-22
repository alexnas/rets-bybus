import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRoute } from '../../types';

interface IFilterByStartCity {
  filterByStartCity: { [startCityName: string]: boolean };
}

const initialState: IFilterByStartCity = {
  filterByStartCity: {},
};

const FilterByStartCitySlice = createSlice({
  name: 'routesByStartCityFilter',
  initialState,
  reducers: {
    initializeFilterByStartCity(state, action: PayloadAction<IRoute[]>) {
      const routes = action.payload;
      routes.forEach((route) => {
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
  FilterByStartCitySlice.actions;
export const filterByStartCityReducer = FilterByStartCitySlice.reducer;
