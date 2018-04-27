import { combineReducers } from 'redux'

import user from './user'
import unit from './unit'
import type from './type'
import worker from './worker'

export default combineReducers({ user, unit, type, worker })