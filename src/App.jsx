import { useEffect, useState } from 'react'
import { useCatImage } from './hooks/useCatImage.js'
import { getRandomFact } from './services/facts.js'

export function App () {
  const [fact, setFact] = useState('')
  const { imageURL } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  return (
    <>
      <h1>Kittens app 😺😹🐈</h1>
      <button onClick={handleClick}> Get new Kitten </button>
      { fact && <h1>{fact}</h1>}
      { imageURL &&
        <img src={imageURL}
             alt={`Image extracted usign the firts three words of: "${fact}"`}
        /> }
    </>
  )
}
