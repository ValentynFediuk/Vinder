import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import MainLayout from "../layouts/MainLayout/MainLayout";
import {getUser} from "../store/reducers/ActionCreators";

export const UserPage = () => {
    const [profile, setProfile] = useState<any>({})

    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.userSlice)

    useEffect(() => {

        dispatch(getUser())
        setProfile(user)

    }, [])

    return (
        <MainLayout>
            <h1>{user.email}</h1>
        </MainLayout>
    )
}