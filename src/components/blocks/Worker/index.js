import React, { Component } from 'react'
import { Container, Title, ItemContainer, ItemTitle, Text, Site, Image } from './styles'
import { images } from '../../../theme'

class Worker extends Component {
  state = {
    isOpen: false
  }

  toggleOpen = () => {
    console.log(this.state.isOpen)
    this.setState({ isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <Container>
        <ItemContainer>
          <ItemTitle>Должность</ItemTitle>
          <Title>{this.props.worker.position}</Title>
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>ФИО</ItemTitle>
          <Text>{this.props.worker.name}</Text>
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Email</ItemTitle>
          <Site href={this.props.worker.email}>{this.props.worker.email}</Site>
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Телефон</ItemTitle>
          <Text>{this.props.worker.phone}</Text>
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Аудитория</ItemTitle>
          <Text>{this.props.worker.auditory} корпус {this.props.worker.housing}</Text>
        </ItemContainer>
      </Container>
    )
  }
}

export { Worker }
