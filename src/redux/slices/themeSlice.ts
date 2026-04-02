import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type ThemeState = {
  theme: 'light' | 'dark';
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light'
  } as ThemeState,
  reducers: {
    switchTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  }
})

export const {switchTheme} = themeSlice.actions;
