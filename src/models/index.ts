export interface Country {
  name: string
  capital: string
  flag: string
  region: string
}

export type QuestionType = 'capital' | 'flag'

export interface IQuestion {
  type: QuestionType
  correctAnswer: Country
  choices: Country[]
}

export type QuizStatus = 'standby' | 'ongoing' | 'end'

export interface IQuiz {
  score: number
  status: QuizStatus
  currentQuestion: number
}

export interface Difficulty {
  name: string
  numQuestions: number
  countries: string
}
