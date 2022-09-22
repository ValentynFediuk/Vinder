import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUser} from "./ActionCreators";

interface UserState {
    user: {
        id: number | null;
        name: string;
        email: string;
    } | any
}

const initialState: UserState = {
    user: {
        id: null,
        name: '',
        email: ''
    },
} as UserState

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled.type, (state, action: PayloadAction) => {
            state.user = action.payload
        })
        // [getUser.fulfilled.type]: (state, action: PayloadAction) => {
        //     state.user = action.payload;
        // },
    },
})

export default userSlice.reducer;
