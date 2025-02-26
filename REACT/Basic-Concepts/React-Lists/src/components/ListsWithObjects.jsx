import React from 'react'

const users = [
    {id: 1, name: "John", age: 25, email: "john@example.com"},
    {id: 2, name: "Jane", age: 28, email: "jane@example.com"},
    {id: 3, name: "Bob", age: 32, email: "bob@example.com"}
]

const ListsWithObjects = () => {
  return (
    <ul>
        {users.map((user) => (
            <li key={user.id}>
                {user.name} is {user.age} years old and can be reached at {user.email}. 
            </li>
        ))}
    </ul>
  )
}

export default ListsWithObjects