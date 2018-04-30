import styled from 'styled-components'

import { colors } from '../../../theme'

export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: 0 10px 0 -15px;
  width: 20px;
  height: 20px;

  & .path {
    stroke: ${props => (props.spinnerColor ? props.spinnerColor : colors.white)};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
