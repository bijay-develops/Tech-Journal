import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FruitList from './components/FruitList'
import ListsWithObjects from './components/ListsWithObjects'
import ConditionalRenderingInLists from './components/ConditionalRenderingInLists'

function App() {
  const [items, setItems] = useState(false);
  const [users, setUserts] = useState(false);
  const [conditional, setConditional] = useState(false);

  return (
    <>
    <h1>Lists in React</h1>
    <div>
      {
        items ? (
          <FruitList />
        ):(
          <button onClick={() => setItems(true)}>1. Rendering list in React</button>
        )
      }
      </div>

<br></br>

      <div>
        {users ? (
          <ListsWithObjects />
        ):(
          <button onClick={() => setUserts(true)}>2. List with Objects</button>
        )}
      </div>

<br></br>

        <div>
          {conditional ? (
            <ConditionalRenderingInLists />
          ):(
            <button onClick={() => setConditional(true)}>3. Conditional rendering in Lists</button>
          )}
        </div>
    </>
  )
}

export default App
