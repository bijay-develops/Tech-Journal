import React from 'react'

const FruitList = () => {
    const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig'];
  return (
    <div> 
        <ul>
            {fruits.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default FruitList