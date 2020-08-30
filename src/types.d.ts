export interface ICountry {
  name: string
  capital: string
  flag: string
  region: string
}

export interface IQuestion {
  type: IQuestionType
  correctAnswer: ICountry
  choices: ICountry[]
}

export type Status = 'standby' | 'ongoing' | 'success' | 'fail'

export interface IQuiz {
  score: number
  status: Status
  currentQuestion: number
}
