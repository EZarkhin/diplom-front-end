import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware as router } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import api from './middleware/api'

import rootReducer from './reducers'

export default ({ history }) => {
  let store
  const middleware = [thunk, api, router(history)]

  const enhancer = applyMiddleware(...middleware)

  if (process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, composeWithDevTools(enhancer))
  } else {
    store = createStore(rootReducer)
  }

  return store
}
