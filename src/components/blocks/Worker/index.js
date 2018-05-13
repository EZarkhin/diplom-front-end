import React, { Component } from 'react'
import {
  Container,
  Title,
  ItemContainer,
  ItemTitle,
  Text,
  Site,
  Image,
  Form,
  StyledInput,
  Error,
  ErrorText,
  Submit
} from './styles'
import { images } from '../../../theme'

class Worker extends Component {
  state = {
    isOpen: false
  }

  toggleOpen = () => {
    console.log(this.state.isOpen)
    this.setState({ isOpen: !this.state.isOpen })
  }

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
          <ItemTitle>ФИО</ItemTitle>
          <StyledInput
            error={(errors.name && sendedForm) || (errors.name && touched.name)}
            name="name"
            placeholder="ФИО"
            value={values.name}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Работает в</ItemTitle>
          <StyledInput
            error={
              (errors.workIn && sendedForm) || (errors.workIn && touched.workIn)
            }
            name="workIn"
            placeholder="Работает в"
            value={values.workIn}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Должность</ItemTitle>
          <StyledInput
            error={
              (errors.position && sendedForm) ||
              (errors.position && touched.position)
            }
            name="position"
            placeholder="Должность"
            value={values.position}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Телефон</ItemTitle>
          <StyledInput
            error={
              (errors.phone && sendedForm) || (errors.phone && touched.phone)
            }
            name="phone"
            placeholder="Телефон"
            value={values.phone}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Электронная почта</ItemTitle>
          <StyledInput
            error={
              (errors.email && sendedForm) || (errors.email && touched.email)
            }
            name="email"
            placeholder="Электронная почта"
            value={values.email}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Телефон</ItemTitle>
          <StyledInput
            error={
              (errors.telephone && sendedForm) ||
              (errors.telephone && touched.telephone)
            }
            name="telephone"
            placeholder="Телефон"
            value={values.telephone}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Аудитория</ItemTitle>
          <StyledInput
            error={
              (errors.auditory && sendedForm) ||
              (errors.auditory && touched.auditory)
            }
            name="auditory"
            placeholder="Аудитория"
            value={values.auditory}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Корпус</ItemTitle>
          <StyledInput
            error={
              (errors.housing && sendedForm) ||
              (errors.housing && touched.housing)
            }
            name="housing"
            placeholder="Корпус"
            value={values.housing}
            onChange={handleChange}
          />
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Часы приема</ItemTitle>
          <StyledInput
            error={
              (errors.hours && sendedForm) || (errors.hours && touched.hours)
            }
            name="hours"
            placeholder="Часы приема"
            value={values.hours}
            onChange={handleChange}
          />
        </ItemContainer>
        <Submit type="submit" onPress={this.clickSendForm}>
          Сохранить
        </Submit>
        <Submit type="button" onPress={this.toggleEdit}>
          Закрыть
        </Submit>
        <Error>
          {sendedForm &&
            !isValid && (
              <ErrorText fontSize="20" padding="20px">
                Убедитесь, что все поля заполнены
              </ErrorText>
            )}
        </Error>
      </Form>
    )
  }
  handleSubmit = ({
    name,
    workIn,
    position,
    phone,
    email,
    auditory,
    housing,
    hours
  }) => {
    const { onWorkerEdit, refreshWorkers, refreshUnit } = this.props
    const token = localStorage.getItem('token')
    onWorkerEdit(
      {
        name,
        workIn,
        position,
        phone,
        email,
        auditory,
        housing,
        hours,
        token
      },
      this.props.wo._id
    ).then(res => {
      if (res.error) {
        alert(res.payload.errMessage)
      } else {
        refreshUnit()
        refreshWorkers()
        this.setState({ edit: false })
      }
    })
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
          <Text>
            {this.props.worker.auditory} корпус {this.props.worker.housing}
          </Text>
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Часы приема</ItemTitle>
          <Text>{this.props.worker.hours}</Text>
        </ItemContainer>
        {this.props.isAdmin && (
          <Image src={images.edit} onClick={this.toggleEdit} />
        )}
      </Container>
    )
  }
}

export { Worker }
