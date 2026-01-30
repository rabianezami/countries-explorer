
import { useEffect, useState } from 'react'
import Header from './components/Header'
import FiltersBar from './components/FiltersBar'
import CountryGrid from './components/countryCard/CountryGrid'
import CountrySkeletonGrid from './components/skeleton/CountrySkeletonGrid'


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [region, setRegion] = useState("all")

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [refetchCount, setRefetchCount] = useState(0)

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true)
      setError(null)

      try {
        let url = "https://restcountries.com/v2/all?fields=name,flags,region,population,alpha3Code"

        if (searchTerm.trim().length >= 2) {
          url = `https://restcountries.com/v2/name/${encodeURIComponent(searchTerm.trim())}?fields=name,flags,region,population,alpha3Code`
        } else if (region !== "all") {
          url = `https://restcountries.com/v3.1/region/{region}`
        }

        const res = await fetch(url)
        if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`)

        const data = await res.json()
        setCountries(data)
      } catch (err) {
        console.error(err)
        setError(err.message || "Something went wrong")
        setCountries([])
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [searchTerm, region, refetchCount])


  return (
    <div className="bg-indigo-50">
      <Header />
      <FiltersBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        region={region}
        setRegion={setRegion}
      />

      {loading && <CountrySkeletonGrid />}

      {!loading && error && (
        <div className="text-center mt-8 text-red-500">
          <p>Error: {error}</p>
          <button
            className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
            onClick={() => setRefetchCount(prev => prev + 1)}
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <CountryGrid countries={countries} />
      )}

      {!loading && !error && countries.length === 0 && (
        <p className="text-center mt-8 text-gray-500">No countries found</p>
      )}

    </div>
  )
}

export default App
