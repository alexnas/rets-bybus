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
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Sorry, failed loading bus routes list');
    }
  }
);

interface IRoutes {
  routes: IRoute[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IRoutes = {
  routes: [],
  isLoading: false,
  error: '',
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
      state.isLoading = false;
      state.error = '';
      state.routes = action.payload;
    },
    [getRoutesAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getRoutesAsync.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectRoutesAdapter = (state: IRoutes) => state.routes;
export const routesReducer = routesSlice.reducer;
