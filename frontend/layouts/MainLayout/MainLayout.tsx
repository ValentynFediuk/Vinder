import React, {useEffect} from 'react';
import { MainLayoutProps } from './MainLayout.props';
import styles from './MainLayout.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getUser} from "../../store/reducers/ActionCreators";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {




        return (
            <div className={styles.layout}>
                    <header>

                    </header>
                    <main>{children}</main>
                    <footer>

                    </footer>
            </div>
        );

}



export default MainLayout;