import React, { Component } from 'react'
import { Formik } from 'formik'

import { Header, Sidebar, Footer, Unit } from '../../blocks' 
import { colors } from '../../../theme'
import { Button } from '../../ui/Button'
import { loginValidationSchema } from './config'
import {
  Container,
  HeaderBG,
  Text,
  Error,
  HeaderContainer,
  Form,
  StyledInput,
  Block
} from './styles'

class AdminPage extends Component {
  state = {
    sendedForm: false,
    register: false
  }
  handleSubmit = ({ username, password }) => {
    const { onLogin } = this.props
    onLogin({ username, password }).then(res => {
      if (res.error) { alert(res.payload.errMessage)}
      else {
      localStorage.setItem('token', res.payload.token)
      localStorage.setItem('access', res.payload.type)
      localStorage.setItem('username', res.payload.username)
      }
    })
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
        <StyledInput
          error={(errors.username && sendedForm) || (errors.username && touched.username)}
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <StyledInput
          error={(errors.password && sendedForm) || (errors.password && touched.password)}
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <Button type="submit" onPress={this.clickSendForm}>
          Login
        </Button>
        <Error>
          {sendedForm &&
            !isValid && (
              <Text color={colors.red} fontSize="20" padding="20px">
                Please make sure all fields are not empty
              </Text>
            )}
        </Error>
      </Form>
    )
  }
  render() {
    return (
      <Container>
        <Header position='fixed' />
        <Block>
          <Formik
            render={this.renderForm}
            validationSchema={loginValidationSchema}
            onSubmit={this.handleSubmit}
          />
        </Block>
      </Container>)
  }
}

export default AdminPage
