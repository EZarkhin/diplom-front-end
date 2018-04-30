import React, {PureComponent} from 'react'


import { Container, Block, GoTo } from './styles';

class SideBar extends PureComponent {
  renderTypeButtons = () => {
    const { types } = this.props
    return types.map((type, index) => {
      return (
        <GoTo key={index} onClick={() => this.props.changeType(type.title)}>
          {type.title}
        </GoTo>
      )
    })
  }
  render(){
    return <Container position={this.props.position}>
      {this.renderTypeButtons()}
    </Container>
  }
} 

export { SideBar }