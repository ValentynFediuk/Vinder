import React, {useEffect} from 'react';
import styles from './Navbar.module.scss';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getUser} from "../../../store/reducers/ActionCreators";
import {useRouter} from "next/router";

export const Navbar = () => {
    // const dispatch = useAppDispatch()
    // const {user} = useAppSelector(state => state.userSlice)
    // const router = useRouter()
    //
    // useEffect(() => {
    //     dispatch(getUser())
    // }, [])
    //
    // const logout = () => {
    //     window.localStorage.removeItem('token')
    //     router.push('/auth/signin')
    // }

    return (
        // <div className={styles.navbar}>
        //     <h1>{user.name}</h1>
        //     <button onClick={() => logout()}>Log out</button>
        // </div>
      <div>navbar</div>
    )
}
