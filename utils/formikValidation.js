import * as yup from 'yup'

export const REGISTRATION_SCHEMA = yup.object({
    fullname: yup.string().required("Please enter first name"),
    email: yup.string().email('Invalid email address').required('Please enter email'),
    password: yup.string().min(6, 'Password must be at least 6 characters').max(8, 'Password must be 8 characters').required('Please enter password'),
    confirmPassword: yup.string().required("Please enter confirmPassword").oneOf([yup.ref('password'), null], 'Passwords must match'),
})