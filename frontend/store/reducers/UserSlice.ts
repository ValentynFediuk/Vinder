import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUser} from "./ActionCreators";
import {uploadAvatar} from "./ActionCreators";

interface UserState {
    user: {
        id: number | null
        name: string
        email: string
        avatar: any
    } | any
}

const initialState: UserState = {
    user: {
        id: null,
        name: '',
        email: '',
        avatar: null
    },
} as UserState

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled.type, (state, action: PayloadAction) => {
                state.user = action.payload
            })
            .addCase(uploadAvatar.fulfilled.type, (state, action: PayloadAction) => {
                state.avatar = action.payload
            })
    },
})

export default userSlice.reducer;
