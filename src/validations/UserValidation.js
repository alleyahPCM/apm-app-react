import * as yup from "yup";

export const userSchema = yup.object().shape({
    fname: yup.string().required(),
    lname: yup.string().required(),
    age: yup.string().required().matches(/^(0?[1-9]|[1-9][0-9]|[1][0-9]{2})$/, "Invalid age!"),
    gender: yup.string().required(),
    email: yup.string().email().required().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email!"),
    password: yup.string().min(8).required().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must contain at least 1 number and uppercase letter!"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match!"),
    terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions!')
})