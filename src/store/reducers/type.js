import {
  GET_TYPES,
  GET_TYPE,
  ADD_TYPE,
  EDIT_TYPE,
  DELETE_TYPE
} from '../actions/type'
import { createReducer } from '../../helpers/redux'

const initialState = {
  types: [],
  type: {}
}

const handlers = {
  [GET_TYPES.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      types: payload
    }
  },
  [GET_TYPES.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [GET_TYPES.REQUEST]: state => {
    return {
      ...state
    }
  },
  [ADD_TYPE.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      types: state.categories.concat(payload),
      type: payload
    }
  },
  [ADD_TYPE.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [ADD_TYPE.REQUEST]: state => {
    return {
      ...state
    }
  },
  [EDIT_TYPE.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      type: payload
    }
  },
  [EDIT_TYPE.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [EDIT_TYPE.REQUEST]: state => {
    return {
      ...state
    }
  },
  [DELETE_TYPE.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      type: {}
    }
  },
  [DELETE_TYPE.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [DELETE_TYPE.REQUEST]: state => {
    return {
      ...state
    }
  },
  [GET_TYPE.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      type: payload
    }
  },
  [GET_TYPE.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [GET_TYPE.REQUEST]: state => {
    return {
      ...state
    }
  }
}

export default createReducer(initialState, handlers)
