import * as yup from 'yup'

export const Schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})