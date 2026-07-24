import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Réponse réseau incorrecte')
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch