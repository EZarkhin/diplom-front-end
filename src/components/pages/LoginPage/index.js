import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Component from './LoginPage'

import { getFullUserData } from '../../../store/selectors/user'

import {authUser, registerUser} from '../../../store/actions/user'

const selector = createStructuredSelector({
  user: getFullUserData
})

const action = {
  onLogin: authUser,
  onRegister: registerUser
}

export default connect(selector, action)(Component)