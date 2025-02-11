import React from 'react'
import { useState } from 'react'
import '../App.css'

const SwitchCaseStatements = () => {

    const [status, setStatus] = useState('guest');

    // Conditional rendering using switch-case statements
    const render = () => {
        switch (status) {
            case 'guest': 
                return <button className='btn-login'
                    onClick={() => setStatus('user')}>Login</button>
            case 'user':
                    return (
                        <>
                        <h1>Welcome back, User!</h1>
                        <h2>Are you admin?</h2>
                         {
                            // checking if the user is admin
                            status === 'user' && (
                                <button className='btn-login'
                                onClick={() => setStatus('admin')}
                                >
                                    Yes
                                </button>
                            )
                         }
                        </>
                    )
            case 'admin':
                    return <h1>Admin Dashboard</h1>
            default:
                    return <h1>Unknown status</h1>
        }
    }

  return <div>{render()}</div>
}

export default SwitchCaseStatements