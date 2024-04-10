import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const EDIT_PROFILE_SCHEMA = yup.object({
    fullname: 
        yup.string().required("Please enter first name"),
    email: 
        yup.string().email('Invalid email address').required('Please enter email'),
    mobileNumber:
        yup.string().matches(phoneRegExp, 'Phone number is not valid')
        .required('A phone number is required')
        .max(10)
        .min(10)
})

export const REGISTRATION_SCHEMA = yup.object({
    fullname: 
        yup.string().matches(/(\w.+\s).+/, 'Enter at least 2 names').required('Full name is required'),
    email: 
        yup.string().email('Invalid email address').required('Email is required'),
    password: 
        yup.string().min(6, 'Password must be at least 6 characters').max(8, 'Password can only contain 8 characters').required('Password is required'),
    confirmPassword: 
        yup.string().required("ConfirmPassword is required").oneOf([yup.ref('password'), null], 'Passwords must match'),
    mobileNumber:
        yup.string().matches(phoneRegExp, 'Phone number is not valid')
        .required('A phone number is required')
        .max(10)
        .min(10)
})

export const LOGIN_SCHEMA = yup.object({
    email: 
        yup.string().email('Please enter valid email').oneOf([yup.ref('email'), null],'email is not found').required('Please Enter email'),
    password: 
        yup.string().min(6, 'Password must be at least 6 characters').max(8, 'Password can only contain 8 characters').required('Password is required'),
})
