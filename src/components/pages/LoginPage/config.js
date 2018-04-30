import Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required()
})

export const registerValidationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
  email: Yup.string().email().required()
})