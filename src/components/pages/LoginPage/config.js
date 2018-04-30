import Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required().min(6)
})

export const registerValidationSchema = Yup.object().shape({
  username: Yup.string().required().min(4),
  password: Yup.string().required().min(6),
  email: Yup.string().email().required()
})