import * as yup from 'yup'

export const REGISTRATION_SCHEMA = yup.object({
    fullname: 
        yup.string().required("Please enter first name"),
    email: 
        yup.string().email('Invalid email address').required('Please enter email'),
    password: 
        yup.string().min(6, 'Password must be at least 6 characters').max(8, 'Password must be 8 characters').required('Please enter password'),
    confirmPassword: 
        yup.string().required("Please enter confirmPassword").oneOf([yup.ref('password'), null], 'Passwords must match'),
    mobileNumber:
        yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('A phone number is required'),
    birthday: 
        yup.date()
})