import React from 'react'
import { useState } from 'react'
import '../App.css'

const LogicalAndOperator = () => {
    const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
    <button className="btn-login" onClick={() => setIsLogged(!isLogged)}>
        Login
    </button>
    {isLogged && <h1>Welcome back, User!</h1>}
</div>
  )
}

export default LogicalAndOperator