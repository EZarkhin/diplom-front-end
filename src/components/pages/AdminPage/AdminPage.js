import React, { Component } from 'react'
import { Header, SideBar, Footer, Unit } from '../../blocks' 
import { Mobile, DefaultScreen } from '../../ui/Responsive'
import { Container, Content } from './styles'

class AdminPage extends Component {
  componentWillMount() {
    this.props.onGetUnits()
    this.props.onGetWorkers()
    this.props.onGetTypes()
  }

  render() {
    const { types } = this.props.type
    return (
      <Container>
        <Header position='fixed' types={types}/>
        <DefaultScreen><SideBar position="fixed" types={types}/></DefaultScreen>
        <Content>Admin</Content>
      </Container>)
  }
}

export default AdminPage
