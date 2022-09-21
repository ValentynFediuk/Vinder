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
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)
