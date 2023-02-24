import {combineReducers, configureStore} from "@reduxjs/toolkit";
// import userSlice from './reducers/UserSlice'
import {userAPI} from "../services/UserService";
import {authAPI} from "../services/AuthService";

const rootReducer = combineReducers({
    // userSlice,
    [userAPI.reducerPath]: userAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(userAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
