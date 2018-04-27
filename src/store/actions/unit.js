import { apiCall } from './api'
import { createAsyncAction } from '../../helpers/redux'

export const GET_UNITS = createAsyncAction('unit/GET_UNITS')
export const getUnits = () => {
  return apiCall({
    endpoint: '/api/unit',
    types: GET_UNITS
  })
}

export const GET_UNIT = createAsyncAction('unit/GET_UNIT')
export const getUnit = id => {
  return apiCall({
    endpoint: `/api/unit/${id}`,
    types: GET_UNIT
  })
}

export const ADD_UNIT = createAsyncAction('unit/ADD_UNIT')
export const addUnit = (body) => {
  return apiCall({
    endpoint: `/api/unit`,
    types: ADD_UNIT,
    method: 'post',
    query: body
  })
}

export const EDIT_UNIT = createAsyncAction('unit/EDIT_UNIT')
export const editUnit = (body, id) => {
  return apiCall({
    endpoint: `/api/unit/${id}`,
    types: EDIT_UNIT,
    method: 'put',
    query: body
  })
}

export const DELETE_UNIT = createAsyncAction('unit/DELETE_UNIT')
export const deleteUnit = id => {
  return apiCall({
    endpoint: `/api/unit/${id}`,
    types: DELETE_UNIT,
    method: 'delete'
  })
}