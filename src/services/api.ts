import { ICountry } from '../types'

export const getCountries = async (countries: string): Promise<ICountry[]> => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha?codes=${countries}&fields=name;capital;region;flag`
  )
  return res.json()
}
