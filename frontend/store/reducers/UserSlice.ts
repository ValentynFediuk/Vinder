import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUser} from "./ActionCreators";

interface UserState {
    user: {
        id: number | null;
        name: string;
        email: string;
    }
}

const initialState: UserState = {
    user: {
        id: null,
        name: '',
        email: ''
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [getUser.fulfilled.type]: (state, action: PayloadAction<UserState>) => {
            state.user = action.payload;
        },
    }
})

export default userSlice.reducer;
