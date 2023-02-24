import React, {ForwardedRef, forwardRef} from 'react';
import {InputProps} from "./Input.props";
import styles from './Input.module.scss';

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
    ({ error, label, type, children, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
        <label className={`${styles.wrapper} ${error && 'error'}`}>
            <input placeholder={" "} ref={ref} type={type} {...props} />
            <span>{label}</span>
            {error && <p className={styles.input__error}>{error.message}</p>}
            {children}
        </label>
    ),
);
