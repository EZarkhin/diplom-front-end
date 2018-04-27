import React, { Component } from 'react'
import {} from './styles'

class MainPage extends Component {
  componentWillMount() {
    this.props.onGetUnits().then(res => console.log(res))
    this.props.onGetWorkers().then(res => console.log(res))
    this.props.onGetTypes().then(res => console.log(res))
  }

  render() {
    return <div> Hello </div>
  }
}

export default MainPage
