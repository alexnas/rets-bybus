import { combineReducers } from '@reduxjs/toolkit';
import { citiesReducer } from './slices/citiesSlice';
import { companiesReducer } from './slices/companiesSlice';
import { routesReducer } from './slices/routesSlice';

const rootReducer = combineReducers({
  companies: companiesReducer,
  routes: routesReducer,
  cities: citiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
