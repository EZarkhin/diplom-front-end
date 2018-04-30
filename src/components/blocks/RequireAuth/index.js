import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


import { login } from '../../../routes'

import jwt from 'jsonwebtoken'

export const RequireAuth  = ChildComponent => {
  class Require extends Component {
    render() {
      return jwt.verify(localStorage.getItem('token'), 'Cjcb;bhYsqGbcjc1[eq', (err, decode) => {
        if (err) {
          localStorage.clear()
          return <Redirect to={login} />
        } else return <ChildComponent {...this.props} />
      })
    }
  }

  return Require
}
