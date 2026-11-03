"use strict";
//  Data Type
let myString = "PROGRAMMING HERRO";
let mynumber = 45114;
let myBoolean = false || true;
let nySymbol = Symbol();
let myBigint = 100n;
const addTwo = (a, b) => {
    return a + b;
};
console.log(addTwo(150, 250));
// Array and tuple an readonly modifier
// arr and arr1 both same array string
// Array stucture 
const arr = ["programing", "56454", "herro"];
const arr1 = ["Programing", "herro"];
// int or number array  stucture
const numArr = [1, 2, 3];
// Tuple stucture
const dhakaLatLong = [23.8103, 90.4125];
dhakaLatLong.push(5451);
// readonly used korle se ar assain ba push korte daina
const dhakaLatLong1 = [23.8103, 90.4125];
dhakaLatLong1.push(5451);
