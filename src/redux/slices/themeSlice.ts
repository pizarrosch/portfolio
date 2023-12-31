import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TTheme} from "@/types";

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light'
  } as TTheme,
  reducers: {
    switchTheme: (state: TTheme, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  }
})

export const {switchTheme} = themeSlice.actions;