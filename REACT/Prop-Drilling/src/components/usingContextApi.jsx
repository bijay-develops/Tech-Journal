import React, {createContext, useContext} from 'react';

const UserContext = createContext();

const UsingContextApi =() => {
    const userName = 'Bijay';
    return(
        <UserContext.Provider value={userName}>
            <Parent />
        </UserContext.Provider>
    );
}

const Parent =() =>{}

const Child =() => {}

const Grandchild =() => {}

export default UsingContextApi;