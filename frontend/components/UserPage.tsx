import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import MainLayout from "../layouts/MainLayout/MainLayout";
import {getUser} from "../store/reducers/ActionCreators";
import UserAvatar from "../images/user-avatar.svg"
export const UserPage = () => {

    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.userSlice)

    useEffect(() => {
        dispatch(getUser())
    }, [])

    return (
        <MainLayout user={user}>
            <UserAvatar height={400} />
        </MainLayout>
    )
}