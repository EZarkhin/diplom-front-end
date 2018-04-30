import React from 'react'

import { Spinner } from '../Spinner'
import { Text } from '../Text'

import { colors } from '../../../theme'

import { ButtonContainer, Context } from './styles'

const Button = ({
  children,
  loading,
  color,
  disabled,
  padding,
  type,
  backgroundColor,
  onPress,
  className,
  spinnerColor
}) => {
  const renderChildren = () => {
    return (
      <Context>
        {loading && <Spinner spinnerColor={spinnerColor} />}
        <Text color={colors.white}>{children}</Text>
      </Context>
    )
  }

  return (
    <ButtonContainer
      backgroundColor={disabled || loading ? colors.gray400 : backgroundColor}
      className={className}
      disabled={disabled || loading}
      padding={padding}
      type={type}
      onClick={onPress}
    >
      {renderChildren()}
    </ButtonContainer>
  )
}

export { Button }
