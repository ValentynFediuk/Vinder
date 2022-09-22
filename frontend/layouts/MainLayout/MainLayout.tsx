import React from 'react';
import {MainLayoutProps} from './MainLayout.props';
import styles from './MainLayout.module.scss';
import {Navbar} from "../../components/ui/Navbar/Navbar";

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {

    return (
        <div className={styles.layout}>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>

            </footer>
        </div>
    );

}


export default MainLayout;