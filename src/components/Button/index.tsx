import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'fill' | 'outline'
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'fill' }) => {
  return <Container variant={variant}>{children}</Container>
}

export default Button
