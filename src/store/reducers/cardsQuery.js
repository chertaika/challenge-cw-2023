import { createAsyncThunk } from '@reduxjs/toolkit';
import getInitialData from '../../utils/Api';
import { REQUEST_ERROR_MESSAGE } from '../../utils/constants';
import useFormatData from '../../hooks/useFormatData';

const fetchCards = createAsyncThunk(
  'cards/get',
  async (_, thunkApi) => {
    try {
      const baseCards = await getInitialData();
      return useFormatData(baseCards);
    } catch (error) {
      return thunkApi.rejectWithValue(REQUEST_ERROR_MESSAGE);
    }
  },
);

export default fetchCards;
