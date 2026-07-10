import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
    }
    fetchData()
  }, [url])

  return { data }
}

export default useFetch