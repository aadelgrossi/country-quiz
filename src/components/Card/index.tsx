import React from 'react'

import { Container } from './styles'

interface CardProps {
  hasImage?: boolean
}

const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}

export default Card
