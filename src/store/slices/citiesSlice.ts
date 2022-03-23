import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICity } from './../../types';

export const getCitiesAsync = createAsyncThunk(
  'city/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ICity[]>(
        'http://localhost:5000/api/city'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Sorry, failed loading cities list');
    }
  }
);

interface ICities {
  cities: ICity[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ICities = {
  cities: [],
  isLoading: false,
  error: '',
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: {
    [getCitiesAsync.fulfilled.type]: (
      state,
      action: PayloadAction<ICity[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.cities = action.payload;
    },
    [getCitiesAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCitiesAsync.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectCitiesAdapter = (state: ICities) => state.cities;
export const citiesReducer = citiesSlice.reducer;
