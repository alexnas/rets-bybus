import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import orderBy from 'lodash/orderBy';
import { COMPANY_NAME } from '../../constants/sortConstants';
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
      state.filterByCompany = {};
      const routes = action.payload;
      const sortedByCompany = orderBy(routes, COMPANY_NAME);
      sortedByCompany.forEach((route) => {
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
