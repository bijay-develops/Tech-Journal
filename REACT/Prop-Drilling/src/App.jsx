// Code: Prop Drilling
import './App.css'
import { useState } from 'react'
import PropDrillingInfo from './components/propDrillingInfo'
import PropDrillingExplaination from './components/propDrillingExplanation'

function App() {

const [explain, setExplain] = useState(false);

  return (
    <>
      <div>
        <h1>Prop Drilling</h1>
        <PropDrillingInfo />
        <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>
          In this example, the message is passed from Parent to Grandchild through the Child, 
          even though the Child does not use it. This can become unmanageable as the app scales.
        </p>
      </div>
      
      <hr></hr>
      <br />
      
      <div>
        { explain ? (
          <PropDrillingExplaination />
          ):(
            <button onClick={() => setExplain(true)}>Explain</button>
          )
        }
      </div>
      
    </>
  )
}

export default App
