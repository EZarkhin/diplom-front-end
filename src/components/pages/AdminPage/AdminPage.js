import React, { Component } from 'react'
import { Header, SideBar, Unit } from '../../blocks'
import { DefaultScreen } from '../../ui/Responsive'
import { Container, Content } from './styles'

class AdminPage extends Component {
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
      return (
        <Unit
          isAdmin
          key={index}
          refreshUnit={this.props.onGetUnits}
          refreshWorkers={this.props.onGetWorkers}
          unit={unit}
          workers={workersArray}
          onUnitEdit={this.props.onUnitEdit}
        />
      )
    })
  }
  render() {
    const { types } = this.props.type
    return (
      <Container>
        <Header position="fixed" types={types} />
        <DefaultScreen>
          <SideBar position="fixed" types={types} />
        </DefaultScreen>
        <Content>{this.renderUnits()}</Content>
      </Container>
    )
  }
}

export default AdminPage
