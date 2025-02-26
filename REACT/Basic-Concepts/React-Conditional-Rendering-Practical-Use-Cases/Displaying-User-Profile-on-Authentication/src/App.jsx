import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div>
      {isAuthenticated ? (
        <h1>User Profile</h1>
      ):(
        <button onClick={() => setIsAuthenticated(true)}>Login</button>
      )}
    </div>

  )
}

export default App