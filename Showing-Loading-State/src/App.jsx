import {useState, useEffect} from 'react';
import './App.css'
import React from 'react'

const App = () => {
const [isLoading, setIsLoading] = useState(true)
const [data, setData] = useState(null)

useEffect(() => {
  setTimeout(() => {
    setData('Fetched Data');
    setIsLoading(false)
  }, 2000)
  }, []);


  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>{data}</h1>
      )}
    </div>
  )
}

export default App