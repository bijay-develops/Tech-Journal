// ChildComponent.js

import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler("Child")}>
                Greet Parent from child
            </button>
        </div>
    )
}

export default ChildComponent;
