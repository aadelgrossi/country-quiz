import { ICountry } from '../types'

const countries =
  'af;ao;ar;am;au;bs;bb;be;bo;bw;br;bg;ca;cl;cn;co;cg;cr;cu;cz;do;ec;eg;fi;fr;de;gr;gl;hk;is;in;iq;ie;il;it;jm;jp;kr;kw;lb;lu;my;mx;nz;no;pk;pa;py;pe;ph;pt;pr;qa;ru;sa;sg;za;es;se;ch;tw;th;tr;gb;us;uy;ve'

export const getCountries = async (): Promise<ICountry[]> => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha?codes=${countries}&fields=name;capital;region;flag`
  )
  return res.json()
}
