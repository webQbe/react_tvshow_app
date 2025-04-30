import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header' // import Header component
import './App.css'

const App = () => {

  /* Define states */
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { // Run once upon loading

    // Fetch cast data from TVMaze API
    const fetchItems = async () => {
      const result = await axios(`https://api.tvmaze.com/shows/169/cast`)

      console.log(result.data) // Log response data
    }

    fetchItems()
  },[])

  return (
    <div className="container">
      <Header /> {/* Render Header */}
    </div>
  )
}

export default App
