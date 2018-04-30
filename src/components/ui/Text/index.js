import React from 'react'

import { A, P, H1, H2, H3 } from './styles'

const Text = props => {
  const handleRenderWithType = () => {
    switch (props.type) {
      case 'h1':
        return <H1 {...props}>{props.children}</H1>
      case 'h2':
        return <H2 {...props}>{props.children}</H2>
      case 'h3':
        return <H3 {...props}>{props.children}</H3>
      case 'a':
        return <A {...props}>{props.children}</A>
      default:
        return <P {...props}>{props.children}</P>
    }
  }
  return handleRenderWithType()
}

export { Text }
