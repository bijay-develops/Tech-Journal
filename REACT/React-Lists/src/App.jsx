import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FruitList from './components/FruitList'

function App() {
  const [items, setItems] = useState(false)
  return (
    <>
    <div>
      {
        items ? (
          <FruitList />
        ):(
          <button onClick={() => setItems(true)}>Show Fruit List</button>
        )
      }
      </div>
      
    </>
  )
}

export default App
