import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TShowStatus} from "@/types";

export const showStatusSlice = createSlice({
    name: 'showStatus',
    initialState: {show: false} as TShowStatus,
    reducers: {
        show: (state: TShowStatus, action: PayloadAction<TShowStatus>) => {
           return action.payload
        }
    }
});

export const {show} = showStatusSlice.actions;