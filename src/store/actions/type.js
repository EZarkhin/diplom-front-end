import { apiCall } from './api'
import { createAsyncAction } from '../../helpers/redux'

export const GET_TYPES = createAsyncAction('type/GET_TYPES')
export const getTypes = () => {
  return apiCall({
    endpoint: '/api/type',
    types: GET_TYPES
  })
}

export const GET_TYPE = createAsyncAction('type/GET_TYPE')
export const getType = id => {
  return apiCall({
    endpoint: `/api/type/${id}`,
    types: GET_TYPE
  })
}

export const ADD_TYPE = createAsyncAction('type/ADD_TYPE')
export const addType = (body) => {
  return apiCall({
    endpoint: `/api/type`,
    types: ADD_TYPE,
    method: 'post',
    query: body
  })
}

export const EDIT_TYPE = createAsyncAction('type/EDIT_TYPE')
export const editType = (body, id) => {
  return apiCall({
    endpoint: `/api/type/${id}`,
    types: EDIT_TYPE,
    method: 'put',
    query: body
  })
}

export const DELETE_TYPE = createAsyncAction('type/DELETE_TYPE')
export const deleteType = id => {
  return apiCall({
    endpoint: `/api/type/${id}`,
    types: DELETE_TYPE,
    method: 'delete'
  })
}