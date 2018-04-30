import React, { Component } from 'react'
import { Container, Title, ItemContainer, ItemTitle, Text, Site, Image, InnerContainer, Form, StyledInput, Error, ErrorText } from './styles'
import { Worker } from '../Worker'
import { images, colors } from '../../../theme'
import { Button } from '../../ui/Button'

class Unit extends Component {
  state = {
    isOpen: false,
    editState: false
  }
  renderRegisterForm = ({
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    dirty,
    isValid,
    touched,
    values,
    isSubmitting
  }) => {
    const { sendedForm } = this.state
    return (
      <Form onSubmit={handleSubmit}>
        <ItemContainer>
          <ItemTitle>Название</ItemTitle>
          <StyledInput
            error={(errors.title && sendedForm) || (errors.title && touched.title)}
            name="title"
            placeholder="Username"
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Управляет</ItemTitle>
          <StyledInput
            error={(errors.director && sendedForm) || (errors.password && touched.director)}
            name="director"
            placeholder="Password"
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Адрес</ItemTitle>
          <StyledInput
          error={(errors.adress && sendedForm) || (errors.adress && touched.adress)}
          name="adress"
          placeholder="adress"
          onChange={handleChange}
        />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Сайт</ItemTitle>
          <StyledInput
            error={(errors.site && sendedForm) || (errors.site && touched.site)}
            name="site"
            placeholder="Вэбсайт"
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Телефон</ItemTitle>
          <StyledInput
            error={(errors.telephone && sendedForm) || (errors.telephone && touched.telephone)}
            name="telephone"
            placeholder="Телефон"
            onChange={handleChange}
          />
        </ItemContainer>
        <Button type="submit" onPress={this.clickSendForm}>
          Register
        </Button>
        <Error>
          {sendedForm &&
            !isValid && (
              <ErrorText fontSize="20" padding="20px">
                Please make sure all fields are not empty
              </ErrorText>
            )}
        </Error>
      </Form>
    )
  }
  renderContent = () => {
    return (
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
    )
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
        {this.renderContent()}
        {this.state.isOpen && this.renderWorkers()}
      </Container>
    )
  }
}

export { Unit }
