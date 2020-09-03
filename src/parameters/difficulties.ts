import { Difficulty } from '../models'

export const difficulties: Difficulty[] = [
  {
    name: 'easy',
    numQuestions: 4,
    numCountries: 10,
    countries: 'au;br;ca;mx;us;fr;it;cn;ru'
  },
  {
    name: 'medium',
    numQuestions: 8,
    numCountries: 20,
    countries: 'au;br;ca;mx;us;fr;it;cn;ru;ec;py;th;pt;cr;in;jp;ie;hk;es'
  },
  {
    name: 'hard',
    numQuestions: 12,
    numCountries: 30,
    countries:
      'au;br;ca;mx;us;fr;it;cn;ru;ec;py;th;pt;cr;in;jp;ie;hk;es;pk;cl;lb;bw;cz;sg;tw;uy;in;gr;pe'
  }
]
