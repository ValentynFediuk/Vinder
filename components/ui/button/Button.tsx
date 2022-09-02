import React, {ForwardedRef, forwardRef} from 'react';
import {ButtonProps} from "./button.props";
import styles from './button.module.scss';

export const Button = forwardRef(
    ({ error, label, ...props }: ButtonProps, ref: ForwardedRef<HTMLInputElement>) => (
        <a className={styles.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Neon button
        </a>
    ),
);
