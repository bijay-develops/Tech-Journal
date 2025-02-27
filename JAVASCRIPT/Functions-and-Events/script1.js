// 1. Functions
function sum(x,y) {
    return x+y;
}
let result1 = sum(2, 3);
console.log(result1);
document.getElementById("demo1").innerHTML = result1;

// 2. Calling Functions
function welcomeMsg(name) {
    return "Hello " + name + ", Welcome to My Show!"
}
let nameVal = "User";
console.log(welcomeMsg(nameVal));
document.getElementById("demo2").innerHTML = welcomeMsg(nameVal);


// 3. Arrow Functions
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
//Normal Function
const a2 = a.map(function (s) { return s.length;});
//Arrow Function
const a3 = a.map( (s) => s.length);
console.log("Normal Way ", a2);
console.log("Using Arrow Function ", a3);
document.getElementById("demo3").innerHTML += a2.join(", ");
document.getElementById("demo4").innerHTML += a3.join(", ");
//  Using += appends the array values to the existing text in the <p> tags.
//  .join(', ') converts the array to a comma-separated string for cleaner display.


// 4. Callback function
function num(n, callback){
    return callback(n);
}
const double = (n) => n*2;
console.log(num(5, double));
document.getElementById("demo5").innerHTML = num(5, double);


// 5. Nested functions
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5));
document.getElementById("demo6").innerHTML = addTen(5);
