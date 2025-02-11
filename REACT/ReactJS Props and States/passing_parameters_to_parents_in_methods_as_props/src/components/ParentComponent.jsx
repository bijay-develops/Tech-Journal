// ParentComponent.js

import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
 
        this.greetParent = this.greetParent.bind(this)
    }
     
    greetParent(name) {
        alert(`Hello ${name}`)
    }
 
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent;
