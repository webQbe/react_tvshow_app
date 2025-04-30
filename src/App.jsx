import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header' // import Header component
import CharacterGrid from './components/characters/CharacterGrid' 
import './App.css'

const App = () => {

  /* Define states */
  const [items, setItems] = useState([])           // To store response data
  const [isLoading, setIsLoading] = useState(true) // To store loading status

  useEffect(() => { // Run once upon loading

    // Fetch cast data from TVMaze API
    const fetchItems = async () => {
      const result = await axios(`https://api.tvmaze.com/shows/169/cast`)

      console.log(result.data) // Log response data
      setItems(result.data)    // Update items state
      setIsLoading(false)      // Set isLoading state to false
    }

    fetchItems()
  },[])

  return (
    <div className="container">
      
      <Header /> 

      <CharacterGrid 
          isLoading={isLoading} // Pass the states as props
          items={items} 
      />

    </div>
  )
}

export default App
