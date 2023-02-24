import React, {useEffect} from 'react';
import {AuthLayoutProps} from './AuthLayout.props';
import styles from './AuthLayout.module.scss';
import {useRouter} from "next/router";

const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {
    const router = useRouter();

    useEffect(() => {
        window.localStorage.getItem('token') && router.push('/user')
    }, [])

    return (
        <div className={styles.layout}>
            <header>

            </header>
            <main>{children}</main>
            <footer>

            </footer>
        </div>
    )
}
export default AuthLayout;