import React, { useState } from 'react';
import './App.css';
import IfElseStatements from './components/IfElseStatements';
import TernaryOperator from './components/TernaryOperator';
import LogicalAndOperator from './components/LogicalAndOperator';
import SwitchCaseStatements from './components/SwitchCaseStatements';
import DisplayingUserProfileBasedOnAuthentication from './components/Practical use cases/DisplayingUserProfileBasedOnAuthentication';

function App() {
  const [Practical, setPractical] = useState(false);
  
  const PracticalUseCaseButtonHandler = () => {
    setPractical(true);
  } 

  return (
    <>
    { 
      <>
        <h1>For Practical use cases</h1>
        <p>We will demonstrate these in practical scenarios:</p>
        
        {
          Practical ? (
            <DisplayingUserProfileBasedOnAuthentication />
          ) : (
            <button className='' onClick={() => setPractical(true)}>Displaying User Profile Based on Authentication</button>
          )
        }
        
      </>
    }
    <div className="App">
        <h1>Conditional Rendering</h1>
        <p>Click the button to see the conditional rendering in action!</p>

        <div className="">
          <h2>If-Else Statements</h2>
          <IfElseStatements />
        </div>

        <div className="">
          <h2>Ternary Operator</h2>
          <TernaryOperator />
        </div>

        <div className="">
          <h2>Logical AND Operator</h2>
          <LogicalAndOperator />
        </div>

        <div className=""> 
          <h2>Switch Case Statements</h2>
          <SwitchCaseStatements />
        </div>
    </div>
  </>
  );
}

export default App;




