import styled from 'styled-components'
import { colors, metrics } from '../../../theme'

export const Container = styled.div`
  padding-top: 90px;
`

export const Content = styled.div`
  padding-left: 10%;
  padding-top: 80px;
  
  @media only screen and (max-width: ${metrics.middleScreen}px) {
    padding-left: 10px;
  }
`