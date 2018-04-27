import {
  GET_UNITS,
  GET_UNIT,
  ADD_UNIT,
  EDIT_UNIT,
  DELETE_UNIT
} from '../actions/unit'
import { createReducer } from '../../helpers/redux'

const initialState = {
  units: [],
  unit: {}
}

const handlers = {
  [GET_UNITS.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      units: payload
    }
  },
  [GET_UNITS.FAILURE]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [GET_UNITS.REQUEST]: state => {
    return {
      ...state
    }
  },
  [ADD_UNIT.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      units: state.units.concat(payload),
      unit: payload,
    }
  },
  [ADD_UNIT.FAILURE]: (state, { payload }) => {
    return {
      ...state,
    }
  },
  [ADD_UNIT.REQUEST]: state => {
    return {
      ...state,
    }
  },
  [EDIT_UNIT.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      unit: payload,
    }
  },
  [EDIT_UNIT.FAILURE]: (state, { payload }) => {
    return {
      ...state,
    }
  },
  [EDIT_UNIT.REQUEST]: state => {
    return {
      ...state,
    }
  },
  [DELETE_UNIT.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      unit: {}
    }
  },
  [DELETE_UNIT.FAILURE]: (state, { payload }) => {
    return {
      ...state,
    }
  },
  [DELETE_UNIT.REQUEST]: state => {
    return {
      ...state,
    }
  },
  [GET_UNIT.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      unit: payload,
    }
  },
  [GET_UNIT.FAILURE]: (state, { payload }) => {
    return {
      ...state,
    }
  },
  [GET_UNIT.REQUEST]: state => {
    return {
      ...state,
    }
  }
}

export default createReducer(initialState, handlers)
