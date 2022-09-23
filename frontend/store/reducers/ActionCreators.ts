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
            const formData = new FormData()
            formData.append('file', file)

            const uploadFile = {name: file.name, progress: 0, id: Date.now()}

            const response = await $api.post<IUser[]>('/users/upload-avatar', {
                // token: window.localStorage.getItem('token')
                uploadFile
            })

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Didn't upload avatar")
        }
    }
)
