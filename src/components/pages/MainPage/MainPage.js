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

  renderUnits = () => {
    return this.props.unit.units.map((unit, index) => {
      const workersArray = [];
      this.props.worker.workers.map(worker => {
        if(worker.workIn===unit.title) workersArray.push(worker)
      })
      console.log(workersArray)
      return <Unit unit={unit} workers={workersArray} key={index}/>
    })
  }
  render() {
    const { types } = this.props.type
    return <Container> 
      <Header position="fixed" types={types} isMain/>
      <DefaultScreen><SideBar position="fixed" types={types}/></DefaultScreen>
      <Content>{this.renderUnits()}</Content>
     
    </Container>
  }
}

export default MainPage
