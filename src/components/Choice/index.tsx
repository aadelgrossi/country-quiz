import React from 'react'

import { Container } from './styles'

import { MdClear, MdDone } from 'react-icons/md'

interface ChoiceProps {
  choiceType?: string
  className?: string
  clickAction(): void
}

const Choice: React.FC<ChoiceProps> = ({
  children,
  choiceType = 'answer',
  clickAction,
  className
}) => {
  return (
    <Container
      onClick={clickAction}
      choiceType={choiceType}
      className={className}
    >
      {children}
      {className?.includes('error') && <MdClear size={16}></MdClear>}
      {className?.includes('success') && <MdDone size={16}></MdDone>}
    </Container>
  )
}

export default Choice
