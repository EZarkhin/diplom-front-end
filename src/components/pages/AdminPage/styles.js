import styled from 'styled-components'
import { metrics } from '../../../theme'

export const Container = styled.div`
  background: linear-gradient(to right, #e7e7e7, #ffffff);
  min-height: 100vh;
`

export const Content = styled.div`
  padding-left: 10%;
  padding-top: 80px;

  @media only screen and (max-width: ${metrics.middleScreen}px) {
    padding-left: 10px;
  }
`
