import get from 'lodash/get'
import merge from 'lodash/merge'
import pick from 'lodash/pick'
import assign from 'lodash/assign'
import forEach from 'lodash/forEach'
import isEmpty from 'lodash/isEmpty'
import request from 'superagent'

import { API_CALL } from './ids'

const sendMethod = HTTPMethod =>
  HTTPMethod === 'post' || HTTPMethod === 'put' || HTTPMethod === 'patch'
    ? 'send'
    : 'query'

export const ApiService = {
  apiCall: (
    url = process.env.REACT_APP_SERVER_URL || 'https://intense-inlet-23457.herokuapp.com',
    endpoint = '',
    method = 'GET',
    query = {},
    headers = {},
    attachType = 'images',
    attach = {}
  ) => {
    const HTTPMethod = method.toLowerCase()

    return new Promise(function(resolve, reject) {
      let req

      if (isEmpty(attach)) {
        req = request[HTTPMethod](url + endpoint)
          [sendMethod(HTTPMethod)](query)
          .set(headers)
      } else {
        req = request[HTTPMethod](url + endpoint).set(headers)
      }

      if (attach.length) {
        forEach(attach, file => {
          req.attach(attachType, file)
        })
      }

      req.end((error, response) => (error ? reject(error) : resolve(response)))
    })
  }
}

const nextAction = (action, data) => {
  const next = merge({}, action, data)
  delete next[API_CALL]
  return next
}

export default store => next => action => {
  if (action.type !== API_CALL || !action.fields) return next(action)
  const {
    url,
    endpoint,
    headers,
    method,
    query,
    types,
    attachType,
    attach
  } = action.fields

  const signature = Date.now()

  const completeHeaders = assign(
    isEmpty(attach) && { 'Content-Type': 'application/json' },
    headers
  )

  const fsaFields = pick(action.fields, 'payload', 'error', 'meta')
  const isLoadRequest =
    !method ||
    method.toUpperCase() === 'GET' ||
    method.toUpperCase() === 'PATCH' ||
    method.toUpperCase() === 'POST'

  next(
    nextAction(fsaFields, {
      type: types.REQUEST,
      meta: merge({ signature }, isLoadRequest && { endpoint, isRequest: true })
    })
  )

  const onError = error => {
    const responseBody = error.response.body

    const data = {
      payload: error.response ? responseBody : {},
      type: types.FAILURE,
      meta: {
        signature,
        httpCode: error.status,
        endpoint
      },
      error: true
    }

    next(nextAction(fsaFields, data))

    return data
  }

  const onSuccess = response => {
    const meta = merge(
      { signature },
      isLoadRequest && { endpoint, isSuccess: true }
    )
    const payload = get(response, 'body')
    const data = { meta, payload, type: types.SUCCESS }
    next(nextAction(fsaFields, data))

    return data
  }

  const apiRequest = ApiService.apiCall(
    url,
    endpoint,
    method,
    query,
    completeHeaders,
    attachType,
    attach
  )
  return apiRequest
    .then(onSuccess, onError)
    .catch(error => console.log('apiRequest Error', error))
}
