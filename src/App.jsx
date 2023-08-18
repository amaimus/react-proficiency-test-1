import { useEffect } from 'react'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshCatFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  useEffect(refreshCatFact, [])

  return (
    <>
      <h1>Kittens app 😺😹🐈</h1>
      <button onClick={refreshCatFact}> Get new Kitten </button>

      { fact && <h1>{fact}</h1> }
      { imageURL &&
        <img src={imageURL}
             alt={`Image extracted usign the firts three words of: "${fact}"`}
        /> }
    </>
  )
}
