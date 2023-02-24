// export interface ButtonProps {
//     onChange?: (e: ChangeEvent<HTMLInputElement>) => void
//     helperText?: string
//     value?: string
//     props?: any
// }

import {ButtonHTMLAttributes} from 'react';
import { FieldError } from 'react-hook-form';

export interface ButtonProps
    extends
        ButtonHTMLAttributes<HTMLButtonElement>
{
    helperText?: string
    error?: FieldError;
    label?: string;
    loadingData?: boolean,
}
