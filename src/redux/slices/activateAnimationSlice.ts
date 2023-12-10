import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TShowStatus} from "@/types";

export const activateAnimationSlice = createSlice({
    name: 'activationsStatus',
    initialState: {active: true} as TShowStatus,
    reducers: {
        activate: (state: TShowStatus, action: PayloadAction<boolean>) => {
            state.active = action.payload;
        }
    }
});

export const {activate} = activateAnimationSlice.actions;