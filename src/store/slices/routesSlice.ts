import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRoute } from '../../types';

export const getRoutesAsync = createAsyncThunk(
  'route/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IRoute[]>(
        'http://localhost:5000/api/route'
      );

      const fetchedData = response.data;

      fetchedData.forEach((item) => {
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
