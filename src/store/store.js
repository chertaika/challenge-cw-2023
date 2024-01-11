import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './reducers/cardsSlice';

const store = configureStore({
  reducer: { cards: cardsReducer },
});

export default store;
