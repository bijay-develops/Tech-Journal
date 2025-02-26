import React from 'react'

const ListWithClickEvent = () => {
    const COMPANY = ["Ram", "Sham", "Hari"];
    const handleClick = (COMPANY) => {
        alert(`You clicked on ${COMPANY}`);
    }

  return (
    <ul>
        {COMPANY.map((COMPANY) => (
            <li key={COMPANY} onClick={() => handleClick(COMPANY)}>
                {COMPANY}
            </li>
        ))}
    </ul>
  )
}

export default ListWithClickEvent