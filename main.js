"'use strict";

// + operator
let val1=20;
let val2=40;
console.log(val1 + val2); //60

let str="hello";
//concatnantion
console.log(val1 + val2 + str); // 60hello

console.log(val1 + str + val2); //20hello40

console.log(str + val1 + val2); //hello2040 

let str1="10";
let num1=10;
let num2=10;

console.log( (num1 + num2) * val1 + val2 * str1); //800

console.log( num1 + val1 + str1 * (num2 + val2) ); //530

console.log( num1 + str1 + num2 ); //101010

let Firstname="Madhu";
let LastName="patil";
console.log( Firstname + " " + LastName ); //Madhu patil

document.write("<h1>Madhuri</h1>"); //Madhu

document.write(Firstname * LastName); //NaN

//Exponentation
console.log( Math.pow(2,3)); // 8

console.log(2**3); //8

//Reminder
console.log( 11 % 2); //1

//increment
let x=1;
x++;
console.log(x);
