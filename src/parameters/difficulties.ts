import { Difficulty } from '../models'

export const difficulties: Difficulty[] = [
  {
    name: 'easy',
    numQuestions: 4,
    countries: 'au,br,ca,mx,us,fr,it,cn,ru,at,cu,jm,no,sa,ch,ve,se,pa,il,hr'
  },
  {
    name: 'medium',
    numQuestions: 8,
    countries:
      'au,br,ca,mx,us,fr,it,cn,co,ru,py,th,pt,cr,in,jp,ie,hk,es,at,cu,jm,no,sa,ch,ve,se,pa,il,hr'
  },
  {
    name: 'hard',
    numQuestions: 12,
    countries:
      'au,br,ca,mx,us,fr,it,cn,ru,py,th,pt,cr,jp,ie,hk,es,pk,cl,lb,bw,cz,sg,tw,uy,in,gr,pe,at,cu,jm,no,sa,ch,ve,se,pa,hr,hu,ma'
  }
]
