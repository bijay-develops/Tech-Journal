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

const Parent =() =>{
    return <Child />;
};

const Child =() => {
    return <Grandchild />
}

const Grandchild =() => {
    const userName = useContext(UserContext);       //accessing context value 
    return <p>Hello, {userName}!</p>;

}

export default UsingContextApi;