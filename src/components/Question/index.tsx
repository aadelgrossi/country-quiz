import React from 'react'

import Card from '../Card'
import Choice from '../Choice'

const Question: React.FC = () => {
  return (
    <Card>
      <h2>This is a question</h2>
      <Choice>
        <span>A</span>
        <span>Vietnam</span>
      </Choice>
      <Choice>
        <span>B</span>
        <span>Malaysia</span>
      </Choice>
      <Choice>
        <span>C</span>
        <span>Sweden</span>
      </Choice>
      <Choice>
        <span>D</span>
        <span>Austria</span>
      </Choice>
    </Card>
  )
}

export default Question
