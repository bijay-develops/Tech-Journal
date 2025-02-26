import React from 'react';
import {Consumer} from '../Context';

const WelcomePage = () => {
    return(
        <div>
            <h1>Welcome User: </h1>
            <Consumer>
                {(value) => (
                    <h2>
                        Name: {value.name} id: {value.id}{""}
                    </h2>
                )}
            </Consumer>
        </div>
    );
}

export default WelcomePage;