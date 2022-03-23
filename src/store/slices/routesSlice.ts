import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiGet } from '../../api';
import { IRoute } from '../../types';

export const getRoutesAsync = createAsyncThunk(
  'route/fetchAll',
  async (endpoint: string, thunkAPI) => {
    try {
      const response = await apiGet(endpoint);
      const fetchedData = response.data;
      fetchedData.forEach((item: IRoute) => {
        item.price = Number(item.price);
      });

      return fetchedData;
    } catch (e) {
      return thunkAPI.rejectWithValue('Sorry, failed loading bus routes list');
    }
  }
);

interface IRoutes {
  routes: IRoute[];
  isRoutesLoading: boolean;
  routesError: string | null;
}

const initialState: IRoutes = {
  routes: [],
  isRoutesLoading: false,
  routesError: '',
};

const routesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: {
    [getRoutesAsync.fulfilled.type]: (
      state,
      action: PayloadAction<IRoute[]>
    ) => {
      state.isRoutesLoading = false;
      state.routesError = '';
      state.routes = action.payload;
    },
    [getRoutesAsync.pending.type]: (state) => {
      state.isRoutesLoading = true;
    },
    [getRoutesAsync.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isRoutesLoading = false;
      state.routesError = action.payload;
    },
  },
});

export const selectRoutesAdapter = (state: IRoutes) => state.routes;
export const routesReducer = routesSlice.reducer;
