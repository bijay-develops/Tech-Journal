# Functions and Events

### 1. Functions in JS

<br>

### 2. Calling Function

<br>

### 3. arrow Functions 



<br>

### 4. Callback functions
```javascript
function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double)); 
```
```mermaid
sequenceDiagram
    participant Console
    participant num as num Function
    participant double as double Function

    Console ->> num: Call num(5, double)
    activate num
    num ->> double: Call callback(n=5)
    activate double
    double -->> num: Return 10
    deactivate double
    num -->> Console: Return 10
    deactivate num
    Console ->> Console: console.log(10)
```

### 5. Nested Functions
```javascript
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5));

```
```mermaid
sequenceDiagram
    participant Console
    participant outerFun as outerFun
    participant innerFun as innerFun (closure)

    Console ->> outerFun: Call outerFun(10)
    activate outerFun
    Note right of outerFun: Creates innerFun with closure a=10
    outerFun -->> Console: Return innerFun function
    deactivate outerFun
    
    Note over Console: addTen = innerFun (with a=10)
    
    Console ->> innerFun: Call addTen(5)
    activate innerFun
    Note right of innerFun: Uses closure a=10 + b=5
    innerFun -->> Console: Return 15
    deactivate innerFun
    
    Console ->> Console: console.log(15)
```