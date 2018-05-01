import React, { Component } from 'react'
import { Formik } from 'formik'
import { Container, Title, ItemContainer, ItemTitle, Text, Site, Image, InnerContainer, Form, StyledInput, Error, ErrorText, Submit } from './styles'
import { Worker } from '../Worker'
import { images, colors } from '../../../theme'


class Unit extends Component {
  state = {
    isOpen: false,
    edit: false,
    sendedForm: false
  }
  clickSendForm = () => this.setState({ sendedForm: true })
  renderForm = ({
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
            placeholder="Название"
            value={values.title}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Тип</ItemTitle>
          <StyledInput
            error={(errors.type && sendedForm) || (errors.type && touched.type)}
            name="type"
            placeholder="Тип"
            value={values.type}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Управляет</ItemTitle>
          <StyledInput
            error={(errors.director && sendedForm) || (errors.password && touched.director)}
            name="director"
            placeholder="Директор"
            value={values.director}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Адрес</ItemTitle>
          <StyledInput
          error={(errors.adress && sendedForm) || (errors.adress && touched.adress)}
          name="adress"
          placeholder="Адрес"
          value={values.adress}
          onChange={handleChange}
        />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Сайт</ItemTitle>
          <StyledInput
            error={(errors.site && sendedForm) || (errors.site && touched.site)}
            name="site"
            placeholder="Вэбсайт"
            value={values.site}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Телефон</ItemTitle>
          <StyledInput
            error={(errors.telephone && sendedForm) || (errors.telephone && touched.telephone)}
            name="telephone"
            placeholder="Телефон"
            value={values.telephone}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Вышестоящее отделение</ItemTitle>
          <StyledInput
            error={(errors.higherUnit && sendedForm) || (errors.higherUnit && touched.higherUnit)}
            name="higherUnit"
            placeholder="Название отделения"
            value={values.higherUnit}
            onChange={handleChange}
          />
        </ItemContainer>
        <Submit type="submit" onPress={this.clickSendForm}>
          Edit
        </Submit>
        <Submit type="button" onPress={this.toggleEdit}>
          Close
        </Submit>
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
  handleSubmit = ({ title, director, adress, site, telephone, type, higherUnit }) => {
    const { onEdit } = this.props
    const token = localStorage.getItem('token')
    onEdit({ title, director, adress, site, telephone, type, higherUnit, token }).then(res => {
      if (res.error) { alert(res.payload.errMessage)}
      else {
      
      this.setState({edit: false})
      }
    })
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
      <Image src={images.edit} onClick={this.toggleEdit} />
    </InnerContainer>
    )
  }
  renderFormik = () => {
    const { title, director, adress, site, telephone, type, higherUnit } = this.props.unit
    const values = { title, director, adress, site, telephone, type, higherUnit }
    return <Formik initialValues={values}
    render={this.renderForm}
    onSubmit={this.handleSubmit} />
  }
  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen})
  }
  toggleEdit = () => {
    this.setState({ edit: !this.state.edit})
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
        {this.state.edit ? this.renderFormik() : this.renderContent()}
        {this.state.isOpen && this.renderWorkers()}
      </Container>
    )
  }
}

export { Unit }
