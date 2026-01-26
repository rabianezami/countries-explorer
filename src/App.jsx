
import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  
  return (
    <>
     <Header />
     <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
    </>
  )
}

export default App
