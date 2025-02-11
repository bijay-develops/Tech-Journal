
import React, { useState } from 'react';
import '../App.css';

const TernaryOperator = () => {
    const [isLogged, setIsLogged] = useState(false);
    
    // Conditional rendering using ternary operator
    return (
        <div>
            {isLogged ? (
                <h1>Welcome back, User!</h1>
            ) : (
                <button className='btn-login' onClick={() => setIsLogged(true)}>Login</button>
            )}
        </div>
    )
}

export default TernaryOperator;