import React from 'react'

import { Container } from './styles'

interface FlagProps {
  country: string
  url: string
}

const Flag: React.FC<FlagProps> = ({ country, url }) => {
  return (
    <Container>
      <img src={url} alt={country} />
      <h2>Which country does this flag belong to?</h2>
    </Container>
  )
}

export default Flag
