## Displaying User Profile based on Authentication 
- You can conditionally render a user’s profile page if the user is logged in, or a login form if not.

```mermaid
graph TD;
  A[Start] -->|Component renders| B{isAuthenticated}
  B -->|true| C[Display User Profile]
  B -->|false| D[Display Login Button]
  D -->|User clicks Login| E[setIsAuthenticated:true]
  E -->|State updates| F[Re-render Component]
  F --> B
```

## Showing loading State 
- You can display a loading spinner or message while waiting for data to be fetched.

```mermaid
graph TD;
  A[Start] -->|Component renders| B[Initialize State]
  B -->|useEffect runs| C[Set Timeout 2s]
  C -->|After 2s| D[Update Data and set isLoading to false]
  D -->|State updates| E[Re-render Component]
  E --> F{isLoading}
  F -->|true| G[Display Loading...]
  F -->|false| H[Display Data]

```