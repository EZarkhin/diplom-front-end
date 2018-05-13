import { apiCall } from './api'
import { createAsyncAction } from '../../helpers/redux'

export const GET_USERS = createAsyncAction('user/GET_USERS')
export const getUsers = () => {
  return apiCall({
    endpoint: '/api/user',
    types: GET_USERS
  })
}

export const GET_USER = createAsyncAction('user/GET_USER')
export const getUser = id => {
  return apiCall({
    endpoint: `/api/user/${id}`,
    types: GET_USER
  })
}

export const REGISTER_USER = createAsyncAction('user/REGISTER_USER')
export const registerUser = body => {
  return apiCall({
    endpoint: `/api/register`,
    types: REGISTER_USER,
    method: 'post',
    query: body
  })
}
export const AUTH_USER = createAsyncAction('user/AUTH_USER')
export const authUser = body => {
  console.log(body)
  return apiCall({
    endpoint: `/api/auth`,
    types: AUTH_USER,
    method: 'post',
    query: body
  })
}
export const EDIT_USER = createAsyncAction('user/EDIT_USER')
export const editUser = (body, id) => {
  return apiCall({
    endpoint: `/api/user/${id}`,
    types: EDIT_USER,
    method: 'put',
    query: body
  })
}

export const DELETE_USER = createAsyncAction('user/DELETE_USER')
export const deleteUser = id => {
  return apiCall({
    endpoint: `/api/user/${id}`,
    types: DELETE_USER,
    method: 'delete'
  })
}
