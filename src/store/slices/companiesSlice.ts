import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICompany } from './../../types';

export const getCompaniesAsync = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ICompany[]>(
        'http://localhost:5000/api/company'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Sorry, failed loading companies list');
    }
  }
);

interface ICompanies {
  companies: ICompany[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ICompanies = {
  companies: [],
  isLoading: false,
  error: '',
};

const companiesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [getCompaniesAsync.fulfilled.type]: (
      state,
      action: PayloadAction<ICompany[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.companies = action.payload;
    },
    [getCompaniesAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCompaniesAsync.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectCompaniesAdapter = (state: ICompanies) => state.companies;
export const companiesReducer = companiesSlice.reducer;
