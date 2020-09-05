import React from 'react'

import { Contents } from './styles'
import Button from '../Button'
import resultsImg from '../../assets/results.svg'
import Card from '../Card'

const Results: React.FC = () => {
  return (
    <Card>
      <Contents>
        <img src={resultsImg}></img>
        <h1>Results</h1>
        <span>
          You got <strong>4</strong> correct answers
        </span>

        <Button variant="outline">Try again</Button>
      </Contents>
    </Card>
  )
}

export default Results
