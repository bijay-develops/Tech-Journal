import React from 'react'

const ListWithClickEvent = () => {
    const COMPANY = ["Ram", "Sham", "Hari"];
    const handleClick = (COMPANY) => {  //For handling the click functionality
        alert(`You clicked on ${COMPANY}`);
    }

  return (
    <ul>
        {COMPANY.map((COMPANY) => (
            <button key={COMPANY} onClick={() => handleClick(COMPANY)}>
                {COMPANY}
            </button>
        ))}
    </ul>
  )
}

export default ListWithClickEvent