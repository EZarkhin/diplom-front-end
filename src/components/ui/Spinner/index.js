import React from 'react'

import { StyledSpinner } from './styles'

const Spinner = ({ spinnerColor }) => {
  return (
    <StyledSpinner spinnerColor={spinnerColor} viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" fill="none" r="20" strokeWidth="4" />
    </StyledSpinner>
  )
}


export { Spinner }
