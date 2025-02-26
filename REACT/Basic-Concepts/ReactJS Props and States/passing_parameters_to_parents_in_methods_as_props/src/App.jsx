// App.js 

import './App.css';
import React from 'react';

// imports component
import ParentComponent from './components/ParentComponent';

function App() {
    return (
        <div className="App">
            <h1>-----------METHODS AS PROPS-------------</h1>
            <ParentComponent />

        </div>
    );
}

export default App;
