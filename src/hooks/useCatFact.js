import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState('')

  const refreshCatFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshCatFact, [])

  return { fact, refreshCatFact }
}
