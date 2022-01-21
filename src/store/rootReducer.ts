import { combineReducers } from '@reduxjs/toolkit';
import { citiesReducer } from './slices/citiesSlice';
import { companiesReducer } from './slices/companiesSlice';
import { routesReducer } from './slices/routesSlice';
import { sortReducer } from './slices/sortSlice';
import { filterByCompanyReducer } from './slices/filterByCompanySlice';

const rootReducer = combineReducers({
  companies: companiesReducer,
  routes: routesReducer,
  cities: citiesReducer,
  sortParams: sortReducer,
  filterByCompany: filterByCompanyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
