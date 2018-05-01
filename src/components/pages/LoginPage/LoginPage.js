import React, { Component } from 'react'
import { Formik } from 'formik'
import { Redirect } from 'react-router-dom'
import { Header, Sidebar, Footer, Unit } from '../../blocks' 
import { colors } from '../../../theme'
import { Button } from '../../ui/Button'
import { loginValidationSchema, registerValidationSchema } from './config'
import {
  Container,
  HeaderBG,
  Text,
  Error,
  HeaderContainer,
  Form,
  StyledInput,
  Block,
  ChooseButton
} from './styles'

class AdminPage extends Component {
  state = {
    sendedForm: false,
    register: false,
    auth: false
  }
  componentWillMount() {
    if (localStorage.getItem('token')!==null) this.setState({auth: !this.state.auth})
  }
  handleLoginSubmit = ({ username, password }) => {
    const { onLogin } = this.props
    onLogin({ username, password }).then(res => {
      if (res.error) { alert(res.payload.errMessage)}
      else {
      localStorage.setItem('token', res.payload.token)
      localStorage.setItem('access', res.payload.type)
      localStorage.setItem('username', res.payload.username)
      this.setState({auth: true})
      }
    })
  }
  handleRegisterSubmit = ({ username, password, email }) => {
    const { onRegister } = this.props
    onRegister({ username, password, email }).then(res => {
      if (res.error) { alert(res.payload.errMessage)}
      else {
      localStorage.setItem('token', res.payload.token)
      localStorage.setItem('access', res.payload.type)
      localStorage.setItem('username', res.payload.username)
      this.setState({auth: true})
      }
    })
  }
  clickSendForm = () => this.setState({ sendedForm: true })
 
  renderLoginForm = ({
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
        <StyledInput
          error={(errors.email && sendedForm) || (errors.email && touched.email)}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Button type="submit" onPress={this.clickSendForm}>
          Register
        </Button>
        <Error>
          {sendedForm &&
            !isValid && (
              <Text color={colors.red} fontSize="20" padding="20px">
                Please make sure all fields are not empty
              </Text>
            )}
          {!isValid &&
          touched.email &&
          errors.email &&
          values.email && (
            <Text color={colors.red} fontSize="20" padding="0">
              Please enter a valid email
            </Text>
          )}
        </Error>
      </Form>
    )
  }
  render() {
    if (this.state.auth) return <Redirect to='/'/>
    return (
      <Container>
        <Header position='fixed' />
        <Block>
          <Formik
            render={this.state.register ? this.renderRegisterForm : this.renderLoginForm}
            validationSchema={this.state.register ? registerValidationSchema : loginValidationSchema}
            onSubmit={this.state.register? this.handleRegisterSubmit : this.handleLoginSubmit}
          />
          <ChooseButton onClick={() => this.setState({register: !this.state.register})}>{this.state.register ? 'Войти в аккаунт' : 'Зарегистрироваться'}</ChooseButton>
        </Block>
      </Container>)
  }
}

export default AdminPage
