import React, { createContext, useContext } from 'react'
const UserContext = createContext();
const useUser = () => {
  return useContext(UserContext);
};

const UsingCustomHooks = () => {
  const userName  = 'Bijay';
  return (
    <>
        <UserContext.Provider value={userName}>
          <Component />
        </UserContext.Provider>
    </>
  )
}

const Component = () => {
  return (
    <>
        <Child />
    </>
  )
};

const Child = () => {
  return <GrandChild />;
};

const GrandChild = () => {
  const userName = useUser();
  return <p>Hello, {userName}!</p>;
};

export default UsingCustomHooks