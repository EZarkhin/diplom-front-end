import React, { Component } from 'react'
import { Container, Title, ItemContainer, ItemTitle, Text, Site, Image, InnerContainer } from './styles'
import { Worker } from '../Worker'
import { images } from '../../../theme'

class Unit extends Component {
  state = {
    isOpen: false
  }
  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen})
  }
  renderWorkers = () => {
    console.log(this.props.workers)
    return this.props.workers.map((worker, index) => {
      return <Worker key={index} worker={worker} />
    })
  }
  render() {
    return (
      <Container>
        <InnerContainer>
          <ItemContainer>
            <ItemTitle>Название</ItemTitle>
            <Title>{this.props.unit.title}</Title>
          </ItemContainer>
          <ItemContainer>
            <ItemTitle>Управляет</ItemTitle>
            <Text>{this.props.unit.director}</Text>
          </ItemContainer>
          <ItemContainer>
            <ItemTitle>Адрес</ItemTitle>
            <Text>{this.props.unit.adress}</Text>
          </ItemContainer>
          <ItemContainer>
            <ItemTitle>Сайт</ItemTitle>
            <Site href={this.props.unit.site}>{this.props.unit.site}</Site>
          </ItemContainer>
          <ItemContainer>
            <ItemTitle>Телефон</ItemTitle>
            <Text>{this.props.unit.telephone}</Text>
          </ItemContainer>
          <Image src={this.state.isOpen ? images.closeIcon : images.openIcon } onClick={this.toggleOpen} />
        </InnerContainer>
        {this.state.isOpen && this.renderWorkers()}
      </Container>
    )
  }
}

export { Unit }
