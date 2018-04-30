import styled from 'styled-components'
import { colors, metrics } from '../../../theme'
import { Input } from '../../ui/Input'

export const HeaderContainer = styled.div``
export const Container = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const StyledInput = styled(Input)`
  margin: 10px 20px;
`
export const Form = styled.form`
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Text = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-size: 17px;
  color: ${colors.red};
`
export const Block = styled.div`
  display: flex;
  position: ${props => (props.position ? props.position : 'relative')};
  ${props => props.background && `background: ${props.background}`};
  ${props => props.width && `width: ${props.width}`}px;
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.margin && `margin: ${props.margin}`};
  ${props => props.opacity && `opacity: ${props.opacity}`};
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'column')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
`
export const Error = Block.extend`
  color: ${colors.white};
  min-height: 60px;
`
