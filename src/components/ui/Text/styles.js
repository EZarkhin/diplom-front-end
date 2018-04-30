import styled from 'styled-components'

import { colors } from '../../../theme'

export const P = styled.p`
  font-family: ${props => (props.fontFamily ? `avenir-${props.fontFamily}` : 'avenir-regular')};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '14px')};
  line-height: ${props => (props.lineHeight ? `${props.lineHeight}px` : '20px')};
  color: ${props => props.color || colors.gray1000};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  text-align: ${props => props.textAlign || 'left'};
`
const h1 = P.withComponent('h1')
const h2 = P.withComponent('h2')
const h3 = P.withComponent('h3')
const a = P.withComponent('a')

export const H1 = h1.extend`
  font-family: ${props => (props.fontFamily ? `avenir-${props.fontFamily}` : 'avenir-bold')};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '32px')};
  line-height: ${props => (props.lineHeight ? `${props.lineHeight}px` : '38px')};
  padding: 5px;
`

export const H2 = h2.extend`
  font-family: ${props => (props.fontFamily ? `avenir-${props.fontFamily}` : 'avenir-medium')};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '16px')};
  line-height: ${props => (props.lineHeight ? `${props.lineHeight}px` : '22px')};
`

export const H3 = h3.extend`
  font-family: ${props => (props.fontFamily ? `avenir-${props.fontFamily}` : 'avenir-medium')};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '16px')};
  line-height: ${props => (props.lineHeight ? `${props.lineHeight}px` : '22px')};
`

export const A = a.extend`
  font-family: ${props => (props.fontFamily ? `avenir-${props.fontFamily}` : 'avenir-regular')};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '16px')};
  line-height: ${props => (props.lineHeight ? `${props.lineHeight}px` : '22px')};
  cursor: pointer;
`
