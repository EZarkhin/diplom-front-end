import React, { Component } from 'react'
import { Header, Sidebar, Footer, Unit } from '../../blocks' 

import { Container } from './styles'

class AdminPage extends Component {
  render() {
    return (
      <Container>
        <Header position='fixed' />
        Admin
      </Container>)
  }
}

export default AdminPage
