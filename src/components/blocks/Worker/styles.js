import styled from 'styled-components'
import { colors, metrics } from '../../../theme'

export const Container = styled.div`
  display: flex;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-direction: row;
  flex-grow: 1;
  align-content: center;
  justify-content: space-between;
  margin: 10px 20px;
  padding: 15px;
  width: 95%;
  height: 100%;

  @media only screen and (max-width: ${metrics.smallScreen}px) {
    flex-direction: column;
    max-width: 80%;
  }
`
export const ItemTitle = styled.text`
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5px;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${metrics.smallScreen}px) {
    margin: 10px 0px;
  }
`
export const Title = styled.text`
  font-size: 25px;
  font-weight: bold;
`

export const Site = styled.a`
  font-size: 18px;
`
export const Image = styled.img`
  width: 32px;
  height: 32px;
  align-self: center;
  z-index: 10;
`
export const Text = styled.text`
  font-size: 18px;
`



