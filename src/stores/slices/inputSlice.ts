import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InputState {
    values: { [key: string]: string };
}

const initialState: InputState = {
    values: {}
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<{ key: string; value: string }>) => {
            const { key, value } = action.payload;
            state.values[key] = value;
        }
    }
})

export const { setInputValue } = inputSlice.actions
export const selectInput = (state: RootState) => state.inputs.values
export default inputSlice.reducer