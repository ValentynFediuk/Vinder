import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../http/axios";

export const getUser = createAsyncThunk(
    '/auth/get-user',
    async (_, thunkAPI) => {
        try {
            const response = await $api.post<IUser[]>('auth/get-user', {
                token: window.localStorage.getItem('token')
            })
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Didn't get user")
        }
    }
)

export const uploadAvatar = createAsyncThunk(
    'auth/upload-avatar',
    async (file: any, thunkAPI) => {
        try {
            const response = await $api.post<IUser[]>('/files/upload',
              file
            )

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Didn't upload avatar")
        }
    }
)
