import React from 'react'

import Card from '../Card'
import Choice from '../Choice'

const Question: React.FC = () => {
  return (
    <Card>
      <h2>This is a question</h2>
      <Choice clickAction={() => {}}>
        <span>A</span>
        <span>Vietnam</span>
      </Choice>
      <Choice clickAction={() => {}}>
        <span>B</span>
        <span>Malaysia</span>
      </Choice>
      <Choice clickAction={() => {}}>
        <span>C</span>
        <span>Sweden</span>
      </Choice>
      <Choice clickAction={() => {}}>
        <span>D</span>
        <span>Austria</span>
      </Choice>
    </Card>
  )
}

export default Question
