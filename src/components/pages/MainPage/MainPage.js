import React, { Component } from 'react'
import { Header, SideBar, Footer, Unit } from '../../blocks' 
import { Container, Content } from './styles'
import { Mobile, DefaultScreen } from '../../ui/Responsive'

class MainPage extends Component {
  componentWillMount() {
    this.props.onGetUnits().then(res => console.log(res))
    this.props.onGetWorkers().then(res => console.log(res))
    this.props.onGetTypes().then(res => console.log(res))
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
