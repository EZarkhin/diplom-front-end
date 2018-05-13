import React, { Component } from 'react'
import { Header, SideBar, Unit } from '../../blocks'
import { Container, Content } from './styles'
import { DefaultScreen } from '../../ui/Responsive'

class MainPage extends Component {
  componentWillMount() {
    this.props.onGetUnits()
    this.props.onGetWorkers()
    this.props.onGetTypes()
  }

  renderUnits = () => {
    return this.props.unit.units.map((unit, index) => {
      const workersArray = []
      this.props.worker.workers.map(worker => {
        if (worker.workIn === unit.title) workersArray.push(worker)
      })
      return <Unit key={index} unit={unit} workers={workersArray} />
    })
  }
  render() {
    const { types } = this.props.type
    return (
      <Container>
        <Header isMain position="fixed" types={types} />
        <DefaultScreen>
          <SideBar position="fixed" types={types} />
        </DefaultScreen>
        <Content>{this.renderUnits()}</Content>
      </Container>
    )
  }
}

export default MainPage
