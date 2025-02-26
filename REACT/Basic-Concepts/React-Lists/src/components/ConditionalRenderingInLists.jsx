
const ConditionalRenderingInLists = () => {
    const users = [
        {id: 1, name: "Bijay", age: 23},
        {id: 2, name: "Raj", age: 24},
        {id: 3, name: "Rahul", age: 35}
    ];

  return (
    <ul>
        {users.map((user) => (
            user.age >= 30 ? (
                <li key={user.id}>{user.name} is over 30 years.</li>
            ):(
                <li key={user.id}>{user.name} is under 30 years</li>
            )
        ))}
    </ul>
  )
}

export default ConditionalRenderingInLists