import { CAT_ENDPOINT_RANDOM_FACT } from '../enums/catsApis'

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(res => { return res.fact })
}
