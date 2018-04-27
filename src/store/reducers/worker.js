import {
  GET_WORKERS,
  GET_WORKER,
  ADD_WORKERS,
  EDIT_WORKERS,
  DELETE_WORKERS
} from '../actions/worker'
import { createReducer } from '../../helpers/redux'

const initialState = {
  workers: [],
  worker: {}
}

const handlers = {
  [GET_WORKERS.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      workers: payload 
    }
  },
  [GET_WORKERS.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [GET_WORKERS.REQUEST]: state => {
    return {
      ...state
    }
  },
  [ADD_WORKERS.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      workers: state.categories.concat(payload),
      worker: payload
    }
  },
  [ADD_WORKERS.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [ADD_WORKERS.REQUEST]: state => {
    return {
      ...state
    }
  },
  [EDIT_WORKERS.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      worker: payload,
    }
  },
  [EDIT_WORKERS.FAILURE]: (state, { payload }) => {
    return {
      ...state,
    }
  },
  [EDIT_WORKERS.REQUEST]: state => {
    return {
      ...state,
    }
  },
  [DELETE_WORKERS.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      worker: {}
    }
  },
  [DELETE_WORKERS.FAILURE]: (state, { payload }) => {
    return {
      ...state,
    }
  },
  [DELETE_WORKERS.REQUEST]: state => {
    return {
      ...state,
    }
  },
  [GET_WORKER.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      worker: payload,
    }
  },
  [GET_WORKER.FAILURE]: (state, { payload }) => {
    return {
      ...state,
    }
  },
  [GET_WORKER.REQUEST]: state => {
    return {
      ...state,
    }
  }
}

export default createReducer(initialState, handlers)
