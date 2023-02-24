import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import MainLayout from "../layouts/MainLayout/MainLayout";
import {getUser, uploadAvatar} from "../store/reducers/ActionCreators";
import UserAvatar from "../images/user-avatar.svg"
import Dropzone from "react-dropzone";
export const UserPage = () => {
    // const dispatch = useAppDispatch()
    // const {user} = useAppSelector(state => state.userSlice)
    //
    // useEffect(() => {
    //     dispatch(getUser())
    // }, [])
    //
    // const foo = (e: any) => {
    //     const formData = new FormData()
    //     formData.append('file', e.target.files[0])
    //     dispatch(uploadAvatar(formData))
    // }

    return (
        <div>UserPage</div>
    )
}