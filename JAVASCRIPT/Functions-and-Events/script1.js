
function sum(x,y) {
    return x+y;
}
let result1 = sum(2, 3);
console.log(result1);
document.getElementById("demo1").innerHTML = result1;

//Calling Functions
function welcomeMsg(name) {
    return "Hello " + name + ", Welcome to My Show!"
}
let nameVal = "User";
console.log(welcomeMsg(nameVal));
document.getElementById("demo2").innerHTML = welcomeMsg(nameVal);


//Arrow Functions
