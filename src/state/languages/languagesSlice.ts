import { createSlice } from '@reduxjs/toolkit';
import { getLanguages } from '../../api/languagesApi';

interface languagesState {
  data: language;
  status: string;
}

interface language {
  languages: { [key: string]: number };
  total: number;
}

const initialState = { status: 'resolved', data: { total: 0, languages: { '': 0 } } } as languagesState;

const languageSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    resetState(state) {
      state.data.languages = {};
      state.data.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.status = 'resolved';
      for (const key in action.payload) {
        state.data.total += action.payload[key];
        if (!Object(state.data.languages).hasOwnProperty(key)) {
          state.data.languages = { ...state.data.languages, [key]: action.payload[key] };
        } else {
          state.data.languages[key] += action.payload[key];
        }
      }
    });
    builder.addCase(getLanguages.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});
export const { resetState } = languageSlice.actions;
export default languageSlice.reducer;
