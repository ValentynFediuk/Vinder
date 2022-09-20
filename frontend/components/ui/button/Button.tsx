import React, {FC, PropsWithChildren} from 'react';
import {ButtonProps} from "./button.props";
import styles from './button.module.scss';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => (
    <button className={styles.button} {...props}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
    </button>
)
