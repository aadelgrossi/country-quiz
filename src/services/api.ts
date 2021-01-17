import { Country } from '../models'

export const getCountries = async (countries: string): Promise<Country[]> => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha?codes=${countries}&fields=name;capital;flag`
  )
  return res.json()
}
