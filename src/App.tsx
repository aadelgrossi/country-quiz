import React from 'react'

import './styles/fonts'
import GlobalStyles from './styles/global'

import Home from './pages/Home'
import { QuizProvider } from './hooks/useQuiz'

const App: React.FC = () => (
  <QuizProvider>
    <Home />
    <GlobalStyles />
  </QuizProvider>
)

export default App
