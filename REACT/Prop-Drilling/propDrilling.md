
# Prop drilling

```mermaid 
%%{init: {'themeVariables': {'fontSize': '16px', }}}%%
flowchart TD
    classDef app fill:#b0e0e6,stroke:#333, color: #000000;
    classDef parent fill:#98fb98,stroke:#333, color: #000000;
    classDef child fill:#fffacd,stroke:#333, color: #000000;
    classDef grandchild fill:#AA98A9,stroke:#333, color: #000000;

    App[[App Component]]:::app
    Parent[[Parent Component]]:::parent
    Child[[Child Component]]:::child
    Grandchild[[Grandchild Component]]:::grandchild

    App --> Parent
    Parent --> |" message prop "| Child
    Child --> |" message prop "| Grandchild
    Grandchild --> Display["Message: Hello from Parent"]
    
    linkStyle 1 stroke:#ffa500,stroke-width:2px
    linkStyle 2 stroke:#ffa500,stroke-width:2px

```
<br> 
<br>

# How to avoid prop drilling 

1. <strong> Using Prop Drilling</strong>
   - The React Context API provides a way to share values (like state, functions, or constants) between components without explicitly passing props.

<br>

```javascript
    import React, { createContext, useContext } from 'react';
const UserContext = createContext();
const App = () => {
    const userName = 'friends';
    return (
        <UserContext.Provider value={userName}>
            <Parent />
        </UserContext.Provider>
    );
};
const Parent = () => {
    return <Child />;
};
const Child = () => {
    return <GrandChild />;
};
const GrandChild = () => {
    const userName = useContext(UserContext); // Access context value
    return <p>Hello, {userName}!</p>;
};
export default App;

```
<br>

### Architecture

```mermaid 
    graph TD
    subgraph Context Creation
        A[createContext] --> B[UserContext]
        K1[["Key Points:
        - Creates context object
        - Single source of truth
        - Default value: undefined"]]
    end

    subgraph Provider Setup
        C[App Component] --> D[UserContext.Provider]
        D --> |value='friends'| E[Parent Component]
        K2[["Key Points:
        - Top-level provider
        - Value cascades down
        - Scope: Component subtree"]]
    end

    subgraph Component Hierarchy
        E --> F[Child Component]
        F --> G[GrandChild Component]
        K3[["Key Points:
        - No prop drilling
        - Direct ancestor chain
        - Implicit data flow"]]
    end

    subgraph Context Consumption
        G --> H[useContext: UserContext]
        H --> I[Display 'Hello friends!']
        K4[["Key Points:
        - Direct value access
        - Auto subscription
        - Re-renders on change"]]
    end

    style C fill:#4CAF50,stroke:#388E3C
    style G fill:#2196F3,stroke:#1976D2
    style K1,K2,K3,K4 fill:#FFEB3B,stroke:#FBC02D
    
    classDef provider fill:#4CAF50,stroke:#388E3C,color:white
    classDef consumer fill:#2196F3,stroke:#1976D2,color:white
    classDef keypoints fill:#FFEB3B,stroke:#FBC02D,color:black
    
    class C provider
    class G consumer
    class K1,K2,K3,K4 keypoints
```

<br>

- <u><strong>createContext()</strong></u> creates a context (UserContext) to share data across components.
- The App component uses <strong>UserContext.Provider</strong> to pass userName (‘geeksforgeeks’) as <strong>the context value</strong>.
- <strong>ParentComponent</strong> and its children (ChildComponent, GrandChildComponent) are wrapped by the <strong>provider</strong>.
- <strong>GrandChildComponent</strong> accesses the context value using <strong>useContext(UserContext)</strong>.
- The value (‘friends’) is displayed in p tag as “Hello friends!”.


<br>
<br>


2. <strong>Using custom hooks</strong>
   - Custom hooks are reusable functions in React that encapsulate stateful logic, starting with use (e.g., useFetch). They improve code reusability, keep components clean, and allow sharing logic across components.

```javascript
import React, { createContext, useContext } from "react";

const UserContext = createContext();
const useUser = () => useContext(UserContext);

const App = () => {
    const userName = "Hello friends";
    return (
        <UserContext.Provider value={userName}>
            <Component />
        </UserContext.Provider>
    );
};

const Component = () => <Child />;
const Child = () => <Grand />;
const Grand = () => {
    const userName = useUser();
    return <p>Hello, {userName}!</p>;
};

export default App;

```

### Architecture Flow Diagram

```mermaid
%% Mermaid Diagram - Context Flow with Custom Hook
graph TD
    subgraph ContextSystem
        A[createContext] --> B[UserContext]
    end

    subgraph HookDefinition
        B --> C[useUser Hook]
        C -->|Wraps| D[useContext]
    end

    subgraph ProviderSetup
        E[App Component] --> F[UserContext.Provider]
        F -->|value='Hello friends'| G[Component]
    end

    subgraph ComponentHierarchy
        G --> H[Child]
        H --> I[Grand]
    end

    subgraph ContextUsage
        I --> J[useUser]
        J --> K[Display Value]
    end

    style E fill:#4CAF50,stroke:#388E3C
    style I fill:#2196F3,stroke:#1976D2
    style C fill:#9C27B0,stroke:#6A1B9A

    classDef provider fill:#4CAF50,stroke:#388E3C,color:white
    classDef consumer fill:#2196F3,stroke:#1976D2,color:white
    classDef hook fill:#9C27B0,stroke:#6A1B9A,color:white
    
    class E provider
    class I consumer
    class C hook
```

<br>

- createContext() creates UserContext to share data across components.
- useUser() is a custom hook wrapping useContext(UserContext) for simplicity.
- App provides the context value (“friends”) using UserContext.Provider.
- Nested components (Component, Child, Grand) inherit the context value.
- Grand accesses the value via useUser() and displays “Hello, friends!