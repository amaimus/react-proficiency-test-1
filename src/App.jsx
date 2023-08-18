import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says'

export function App () {
  const [fact, setFact] = useState('')
  const [imageURL, setImageURL] = useState(null)

  const getUrlFromFact = (fact) => {
    const threeFirstWords = fact.split(' ', 3).join(' ')
    return `${CAT_ENDPOINT_IMAGE_URL}/${threeFirstWords}`
  }

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(res => setFact(res.fact))
  }, [])

  useEffect(() => {
    const result = getUrlFromFact(fact)

    setImageURL(result)
  }, [fact])

  const handleFetchFact = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(res => setFact(res.fact))
  }
  return (
    <div>
      <h1>Kittens app :3</h1>
      <button onClick={handleFetchFact}> Get new Kitten </button>
      { fact && <h1>{fact}</h1>}
      { imageURL &&
        <img src={imageURL}
             alt={`Image extracted usign the firts three words of: "${fact}"`}
        /> }
    </div>
  )
}
