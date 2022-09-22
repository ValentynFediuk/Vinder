import * as yup from 'yup';

export const SignInFormSchema = yup.object({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Field is required'),
    password: yup
        .string()
        .max(30, 'Must be 30 characters or less')
        .required('Field is required'),
});
