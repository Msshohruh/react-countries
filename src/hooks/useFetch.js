import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [mainData, setmainData] = useState(null)
    const [IsPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [allCategories, setCategories] = useState([])
    // console.log('useFetch', url)

    const fetchUrl = useCallback(async () => {
        // console.log('useCallback')
        setIsPending(true)
        setError(null)
        try {
          const req = await fetch(url);

          if (!req.ok) {
            throw new Error('Something wrong with URL')
          }

          const json = await req.json();

          setmainData(json);
          setData(json)
          setIsPending(false);
          setCategories(['All', ...new Set(json.map((country) => {
            return country.region
          }))])
          
        } catch (err) {
          setIsPending(false);
          setError(err.message)
        }
    }, [url])

    useEffect(() => {
        fetchUrl()
    }, [fetchUrl])

    const filterCategory = (category) => {
      if (category !== 'All') {
        const filteredData = mainData.filter((country) => {
        return country.region === category
      })
      setData(filteredData)
      } else {
        setData(mainData)
      }
      
    }
    const filterCountry = (name) => {
      if (name) {
        const filteredData = mainData.filter((country) => {
          const countryName = country.name.common.toLowerCase()
          return countryName.includes(name.toLowerCase())
        })
        setData(filteredData)
      } else {
        setData(mainData)
      }
    }
  return {data, IsPending, error, filterCategory, allCategories, filterCountry}
}
