<hr>

## Using If/Else Statements
- This method works well when the condition is more complex.

```mermaid
  graph TD
    A[Start Component] --> B{isLogged?}
    B -->|True| C[Render Welcome Message]
    B -->|False| D[Render Login Button]
    D -->|onClick| E[Set isLogged: true]
    E --> B
    C --> F[Component Rendered]

    style A fill:#e1f5fe,stroke:#039be5,color:#01579b
    style B fill:#ffecb3,stroke:#f9a825,color:#5d4037
    style C fill:#c8e6c9,stroke:#43a047,color:#1b5e20
    style D fill:#ffcdd2,stroke:#e53935,color:#b71c1c
    style E fill:#d1c4e9,stroke:#673ab7,color:#311b92
```
<br>
<hr>

## Using Ternary Operator 
- The ternary operator (condition ? expr1 : expr2) is a concise way to conditionally render JSX elements.
- It’s often used when the logic is simple and there are only two options to render.

```mermaid

graph TD
    A[TernaryOperator Component] --> B{isLogged?}
    B -->|True| C[Render Welcome Message]
    B -->|False| D[Render Login Button]
    D -->|onClick| E[Set isLogged: true]
    E --> B
    C --> F[Component Rendered]
    E -.->|State Update| B

    style A fill:#e1f5fe,stroke:#039be5,color:#01579b
    style B fill:#fff3e0,stroke:#fb8c00,color:#5d4037
    style C fill:#c8e6c9,stroke:#43a047,color:#1b5e20
    style D fill:#ffebee,stroke:#e53935,color:#b71c1c
    style E fill:#ede7f6,stroke:#673ab7,color:#311b92
```

<br>
<hr>

## Logical AND operator 
- In JavaScript, the && operator returns the second operand if the first is true, and nothing if the first is false. 
- This can be useful when you only want to render something when a condition is true.

```mermaid
graph TD
    A[LogicalAndOperator] --> B[Render Login Button]
    B --> C{isLogged?}
    C -->|True| D[Show Welcome Message]
    C -->|False| E[No Additional Content]
    B -->|onClick| F[Toggle isLogged State]
    F --> C
    D --> G[Component Rendered]
    E --> G

    style A fill:#e1f5fe,stroke:#039be5,color:#01579b
    style B fill:#ffcdd2,stroke:#e53935,color:#b71c1c
    style C fill:#fff3e0,stroke:#fb8c00,color:#5d4037
    style D fill:#c8e6c9,stroke:#43a047,color:#1b5e20
    style F fill:#ede7f6,stroke:#673ab7,color:#311b92
```


## Using switch case statements
- Switch case statements are useful when you need to handle multiple conditions, which would otherwise require multiple if conditions.
- This approach can be more readable if there are many conditions to check.


```mermaid

stateDiagram-v2
    [*] --> Guest
    Guest --> User: Login click
    User --> Admin: Yes click
    
    state Guest {
        state "Login Button" as guest_ui
    }
    
    state User {
        state "Welcome Message" as user_msg
        state "Admin Check" as admin_check
    }
    
    state Admin {
        state "Dashboard" as dashboard
    }


```