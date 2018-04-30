import styled from 'styled-components'
import { colors, metrics } from '../../../theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.gray1000};
  align-items: center;
  position: ${props => (props.position ? props.position : 'relative')};
  ${props => props.position === 'fixed' && `top: 80px`};
  ${props => props.position === 'fixed' && `bottom: 0`};
  ${props => props.position === 'fixed' && `z-index: 9999`};
  width: 10%;
  @media only screen and (max-width: ${metrics.smallScreen}px) {
    justify-content: flex-start;
  }
`

export const GoTo = styled.text`
  position: relative;
  display: inline-block;
  font-family: 'avenir-regular';
  text-align: center;
  color: ${colors.white};
  font-size: 17px;
  ${props => props.padding && `padding: ${props.padding}`};
  cursor: pointer;
  text-decoration: none;
  padding: 10px 20px;
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid ${colors.green};
    transform: scaleX(0);
    width: 100%;
    transition: transform 250ms;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`