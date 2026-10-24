import {createSlice} from "@reduxjs/toolkit";

type ThemeState = {
  theme: 'light' | 'dark';
}

// Used on the first visit only; afterwards redux-persist restores the saved theme
function getSystemTheme(): ThemeState['theme'] {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: getSystemTheme()
  } as ThemeState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  }
})

export const {toggleTheme} = themeSlice.actions;
