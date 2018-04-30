import styled from 'styled-components'
import { colors, metrics } from '../../../theme'

export const StyledInput = styled.input`
  background-color: ${colors.gray600};
  color: ${colors.white};
  height: ${props => (props.height ? props.height : '50')}px;
  width: ${props => (props.width ? props.width : '300')}px;
  padding: 0 20px;
  position: relative;
  font-size: 16px;
  line-height: 22px;
  font-family: avenir-regular;
  margin: 0;
  overflow: visible;
  text-transform: none;
  box-shadow: none;
  border: 1px solid ${colors.gray200};
  transition: all 0.2s;
  &:focus {
    outline: none;
    border: 1px solid ${colors.white};
  }
  &:placeholder-shown {
    background-color: ${colors.gray600};
  }
  &::placeholder {
    color: ${colors.gray100};
    font-size: 14px;
  }
  &:disabled {
    background-color: ${colors.gray200};
    color: ${colors.gray100};
    cursor: not-allowed;
  }
  ${props => props.error && `border-color: ${colors.red}`};

  @media only screen and (max-width: ${metrics.middleScreen}px) {
    width: 100%;
  }
  @media only screen and (max-width: ${metrics.smallScreen}px) {
    width: 70%;
  }
`
