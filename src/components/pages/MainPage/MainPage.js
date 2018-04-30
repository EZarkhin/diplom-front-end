import React, { Component } from 'react'
import { Header, SideBar, Footer, Unit } from '../../blocks' 
import { Container, Content } from './styles'
import { Mobile, DefaultScreen } from '../../ui/Responsive'

class MainPage extends Component {
  componentWillMount() {
    this.props.onGetUnits()
    this.props.onGetWorkers()
    this.props.onGetTypes()
  }

  render() {
    const { types } = this.props.type
    return <Container> 
      <Header position="fixed" types={types} isMain/>
      <DefaultScreen><SideBar position="fixed" types={types}/></DefaultScreen>
      <Content> Hello </Content>
    </Container>
  }
}

export default MainPage
