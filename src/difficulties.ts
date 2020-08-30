interface Difficulty {
  [name: string]: {
    numQuestions: number
    numCountries: number
    countries: string
  }
}

export const difficulties: Difficulty = {
  easy: {
    numQuestions: 4,
    numCountries: 10,
    countries: 'au;br;ca;mx;us;gb;fr;it;cn;ru'
  },
  medium: {
    numQuestions: 8,
    numCountries: 20,
    countries: 'au;br;ca;mx;us;gb;fr;it;cn;ru;ec;py;th;pt;cr;in;jp;ie;hk;es'
  },
  hard: {
    numQuestions: 12,
    numCountries: 30,
    countries:
      'au;br;ca;mx;us;gb;fr;it;cn;ru;ec;py;th;pt;cr;in;jp;ie;hk;es;pk;cl;lb;bw;cz;sg;tw;uy;in;gr;pe'
  }
}
