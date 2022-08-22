import React, {ForwardedRef, forwardRef} from 'react';
import {InputProps} from "./Input.props";
import styles from './Input.module.scss';

export const Input = forwardRef(
    ({ error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
        <label className={styles.wrapper}>
            <input placeholder={" "} ref={ref} {...props} />
            <span>Textfield</span>
            {error && <div className={styles.input_error}>{error.message}</div>}
        </label>
    ),
);
