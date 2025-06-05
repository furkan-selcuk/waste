import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching skip data
export const fetchSkips = createAsyncThunk(
  'skips/fetchSkips',
  async ({ postcode, area }) => {
    const response = await axios.get(
      `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
    );
    return response.data;
  }
);

const initialState = {
  items: [],
  status: 'idle', 
  error: null,
  selectedSkip: null,
  filters: {
    minSize: null,
    maxSize: null,
    allowedOnRoad: null,
    allowsHeavyWaste: null
  }
};

const skipSlice = createSlice({
  name: 'skips',
  initialState,
  reducers: {
    setSelectedSkip: (state, action) => {
      state.selectedSkip = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkips.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSkips.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSkips.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSelectedSkip, setFilters, clearFilters } = skipSlice.actions;

// Selectors
export const selectAllSkips = (state) => state.skips.items;
export const selectSkipStatus = (state) => state.skips.status;
export const selectSkipError = (state) => state.skips.error;
export const selectSelectedSkip = (state) => state.skips.selectedSkip;
export const selectSkipFilters = (state) => state.skips.filters;

export default skipSlice.reducer; 