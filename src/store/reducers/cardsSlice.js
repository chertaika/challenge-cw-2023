import { createSlice } from '@reduxjs/toolkit';
import fetchCards from './cardsQuery';

const initialState = {
  cards: [],
  isLoading: false,
  errors: '',
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.fulfilled.type, (state, action) => {
        state.isLoading = false;
        state.errors = '';
        state.cards = action.payload;
      })
      .addCase(fetchCards.pending.type, (state) => {
        state.isLoading = true;
        state.errors = '';
      })
      .addCase(fetchCards.rejected.type, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
        state.cards = [];
      });
  },
});

export default cardsSlice.reducer;
