import { apiCall } from './api'
import { createAsyncAction } from '../../helpers/redux'

export const GET_WORKERS = createAsyncAction('worker/GET_WORKERS')
export const getWorkers = () => {
  return apiCall({
    endpoint: '/api/worker',
    types: GET_WORKERS
  })
}

export const GET_WORKER = createAsyncAction('worker/GET_WORKER')
export const getWorker = id => {
  return apiCall({
    endpoint: `/api/worker/${id}`,
    types: GET_WORKER
  })
}

export const ADD_WORKERS = createAsyncAction('worker/ADD_WORKERS')
export const addWorkers = (body) => {
  return apiCall({
    endpoint: `/api/worker`,
    types: ADD_WORKERS,
    method: 'post',
    query: body
  })
}

export const EDIT_WORKERS = createAsyncAction('worker/EDIT_WORKERS')
export const editWorkers = (body, id) => {
  return apiCall({
    endpoint: `/api/worker/${id}`,
    types: EDIT_WORKERS,
    method: 'put',
    query: body
  })
}

export const DELETE_WORKERS = createAsyncAction('worker/DELETE_WORKERS')
export const deleteWorkers = id => {
  return apiCall({
    endpoint: `/api/worker/${id}`,
    types: DELETE_WORKERS,
    method: 'delete'
  })
}