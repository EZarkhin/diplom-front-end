import { createReducer } from '../../helpers/redux'
import {
  AUTH_USER,
  REGISTER_USER,
  GET_USERS,
  GET_USER,
  EDIT_USER,
  DELETE_USER
} from '../actions/user'
const initialState = {
  user: {},
  users: []
}

const handlers = {
  [AUTH_USER.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload.user
    }
  },
  [AUTH_USER.FAILURE]: (state, { payload }) => {
    return {
      ...state,
    }
  },
  [AUTH_USER.REQUEST]: state => {
    return {
      ...state,
    }
  },
  [GET_USERS.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      users: payload
    }
  },
  [GET_USERS.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [GET_USERS.REQUEST]: state => {
    return {
      ...state
    }
  },
  [GET_USER.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload
    }
  },
  [GET_USER.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [GET_USER.REQUEST]: state => {
    return {
      ...state
    }
  },
  [REGISTER_USER.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload
    }
  },
  [REGISTER_USER.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [REGISTER_USER.REQUEST]: state => {
    return {
      ...state
    }
  },
  [EDIT_USER.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload
    }
  },
  [EDIT_USER.FAILURE]: (state, { payload }) => {
    return {
      ...state,
    }
  },
  [EDIT_USER.REQUEST]: state => {
    return {
      ...state
    }
  },
  [DELETE_USER.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: {}
    }
  },
  [DELETE_USER.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [DELETE_USER.REQUEST]: state => {
    return {
      ...state
    }
  }
}

export default createReducer(initialState, handlers)
