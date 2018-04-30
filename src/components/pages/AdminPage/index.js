import { connect } from 'react-redux'
import Component from './AdminPage'
import { RequireAuth } from '../../blocks'

export default connect()(RequireAuth(Component))