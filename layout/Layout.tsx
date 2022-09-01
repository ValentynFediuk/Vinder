import React from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div className={styles.layout}>
        <header>
            h
        </header>
        <main>{children}</main>
        <footer>
            f
        </footer>
    </div>
);

export default Layout;