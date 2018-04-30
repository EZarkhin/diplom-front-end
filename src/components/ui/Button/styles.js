import styled from 'styled-components'
import { colors } from '../../../theme'

export const ButtonContainer = styled.button`
  background: ${props => props.backgroundColor || colors.green};
  padding: ${props => props.padding || '0 30px 0 30px'};
  border: none;
  opacity: 1;
  height: 44px;
  border-radius: 0;
  cursor: pointer;
  color: white;
  font-weight: bold;
  ${props => props.disabled && `opacity: 0.8;`};
  transition: background 300ms ease;
  &:hover {
    ${props => !props.disabled && `background: #6a66ff;`};
  }
`

export const Context = styled.div`
  flex-direction: row;
  display: flex;
`

export const Spinner = styled.div`
  position: relative;
  min-height: 20px;
  min-width: 25px;
  margin-right: 10px;
`
