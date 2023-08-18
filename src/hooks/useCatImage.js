import { useState, useEffect } from 'react'
import { CAT_ENDPOINT_IMAGE_URL } from '../enums/catsApis'

export function useCatImage ({ fact }) {
  const [imageURL, setImageURL] = useState(null)

  const getUrlFromFact = ({ fact }) => {
    const threeFirstWords = fact.split(' ', 3).join(' ')
    return `${CAT_ENDPOINT_IMAGE_URL}/${threeFirstWords}`
  }

  useEffect(() => {
    if (!fact) return
    const newImageUrl = getUrlFromFact({ fact })

    setImageURL(newImageUrl)
  }, [fact])

  return { imageURL }
}
