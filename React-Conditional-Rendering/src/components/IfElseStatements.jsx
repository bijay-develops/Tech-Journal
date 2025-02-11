import React, { useState } from 'react';
import '../App.css';
function IfElseStatements() {
    const [isLogged, setIsLogged] = useState(false);

    // Conditional rendering using if-else statements
        if (isLogged) {
            return <h1>Welcome back, User!</h1>;
        } else {
            return (
                <button className='btn-login' 
                onClick={() => setIsLogged(true)}
                >
                    Login
                </button>
            );
        }
  
}

export default IfElseStatements;
