import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'fill' | 'outline'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'fill',
  ...rest
}) => {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  )
}

export default Button
