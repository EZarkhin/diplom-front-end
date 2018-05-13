import React, { PureComponent } from 'react'

import { slide as Menu } from 'react-burger-menu'
import { Mobile, DefaultScreen } from '../../ui/Responsive'
import { Container, Block, GoTo, Head, sideBarStyle, CatButton } from './styles'

class Header extends PureComponent {
  state = {
    isMenuOpen: false
  }
  renderTypeButtons = () => {
    const { types } = this.props
    return types.map((type, index) => {
      return (
        <CatButton
          key={index}
          onClick={() => this.props.changeType(type.title)}
        >
          {type.title}
        </CatButton>
      )
    })
  }
  handleMenuStateChange = state => this.setState({ menuOpen: state.isOpen })

  handleMenuClose = () => () => this.setState({ menuOpen: false })
  render() {
    const token = localStorage.getItem('token')
    const access = localStorage.getItem('access')
    return (
      <Container position={this.props.position}>
        <Block>
          <Head to="/">Телефонный справочник</Head>
        </Block>
        <DefaultScreen>
          <Block>
            {token === null ? (
              <GoTo to="/login">Войти</GoTo>
            ) : this.props.isMain ? (
              <GoTo to="/admin">Администритование</GoTo>
            ) : (
              ''
            )}
          </Block>{' '}
        </DefaultScreen>
        <Mobile>
          <Menu
            isOpen={this.state.menuOpen}
            right
            styles={sideBarStyle}
            onStateChange={this.handleMenuStateChange}
          >
            {token === null ? (
              <GoTo to="/login">Войти</GoTo>
            ) : this.props.isMain ? (
              <GoTo to="/admin">Администритование</GoTo>
            ) : (
              ''
            )}
            {this.props.types && this.renderTypeButtons()}
          </Menu>
        </Mobile>
      </Container>
    )
  }
}

export { Header }
