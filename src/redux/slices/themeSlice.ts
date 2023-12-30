import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {activateAnimationSlice} from "@/redux/slices/activateAnimationSlice";

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'sun' as string,
  reducers: {
    lightTheme: (state: string) => {
      state = 'sun'
    },
    darkTheme: (state: string) => {
      state = 'dark'
    },
    darkHelloweenTheme: (state: string) => {
      state = 'helloween'
    }
  }
})

export const {lightTheme, darkTheme, darkHelloweenTheme} = themeSlice.actions;