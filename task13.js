var obj = {num:5};

var newFunction = function(a,b,c){
return this.num + a + b + c ;
}

// Using Call
var x = newFunction.call(obj,2,3,4);

console.log(x);

//Using apply

var  arr = [2,3,4];
var y = newFunction.apply(obj,arr);

console.log(y);

//using Bind

var bound = newFunction.bind(obj);
console.log(bound(2,3,4));

//Student Object

var Student = {age:20};



var printAge = function(){

    console.log(`The Age of the Student is ${this.age} `);

}

printAge.call(Student);

//Curring using bind

// let multiply = function(X,Y){
//     console.log(X * Y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);

// Curring using Closers 

let multiply = function(X){
    return function(Y){
        console.log(X * Y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(5);

let multiplyByThree = multiply(3);
multiplyByThree(5);

