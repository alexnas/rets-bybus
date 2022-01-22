import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRoute } from '../../types';

export interface IFilterByCompany {
  filterByCompany: { [companyName: string]: boolean };
}

const initialState: IFilterByCompany = {
  filterByCompany: {},
};

const filterByCompanySlice = createSlice({
  name: 'routesByCompanyFilter',
  initialState,
  reducers: {
    initializeFilterByCompany(state, action: PayloadAction<IRoute[]>) {
      const routes = action.payload;
      routes.forEach((route) => {
        state.filterByCompany[route.company.name] = false;
      });
    },

    setCompanyFilterParams: (
      state,
      action: PayloadAction<{ companyName: string; filterState: boolean }>
    ) => {
      const { companyName, filterState } = action.payload;
      state.filterByCompany[companyName] = filterState;
    },
  },
});

export const { initializeFilterByCompany, setCompanyFilterParams } =
  filterByCompanySlice.actions;
export const filterByCompanyReducer = filterByCompanySlice.reducer;
