
import { useState } from 'react'
import Header from './components/Header'
import FiltersBar from './components/FiltersBar'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [region, setRegion] = useState("all");
  
  return (
    <div className="bg-indigo-50">
     <Header />
     <FiltersBar 
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}
       region={region}
       setRegion={setRegion}
     />
   
    </div>
  )
}

export default App
