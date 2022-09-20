import React from 'react';
import { AuthLayoutProps } from './AuthLayout.props';
import styles from './AuthLayout.module.scss';

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
    <div className={styles.layout}>
        <header>

        </header>
        <main>{children}</main>
        <footer>

        </footer>
    </div>
);

export default AuthLayout;