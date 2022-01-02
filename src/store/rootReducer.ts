import { combineReducers } from '@reduxjs/toolkit';
import { companiesReducer } from './slices/companiesSlice';
import { routesReducer } from './slices/routesSlice';

const rootReducer = combineReducers({
  companies: companiesReducer,
  routes: routesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
