// Code: Prop Drilling
import './App.css'
import { use, useState } from 'react'
import PropDrillingInfo from './components/propDrillingInfo'
import PropDrillingExplaination from './components/propDrillingExplanation'
import UsingContextApi from './components/usingContextApi'

function App() {

const [explain, setExplain] = useState(false);
const [context, setContext] = useState(false);
const [parent, setParent] = useState(false);

  return (
    <>
      <div>
        <h1>Prop Drilling</h1>
        {
          parent ? (
            <PropDrillingInfo />
          ):(
            <button style={{color: 'red'}} onClick={() => setParent(true) }>Parent</button>
          )
        }
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
      <br></br>

      <hr></hr>
      <h1>How to avoid Prop Drilling</h1>
      <div>
        {
            context ? (
              <UsingContextApi />
            ):(
              <button onClick={() => setContext(true)}>Using Context API</button>
            )
        }
      </div>
      
    </>
  )
}

export default App
