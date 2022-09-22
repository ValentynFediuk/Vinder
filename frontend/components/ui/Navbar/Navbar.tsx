import React, {FC, useEffect} from 'react';
import styles from './Navbar.module.scss';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getUser} from "../../../store/reducers/ActionCreators";

export const Navbar = () => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.userSlice)

    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <div className={styles.navbar}>
            <h1>{user.name}</h1>
        </div>
    )
}
