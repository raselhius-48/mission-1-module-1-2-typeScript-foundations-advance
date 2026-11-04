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
// const numArr :number[] = [1, 2, 3]
// Tuple stucture
// const dhakaLatLong : [number, number] = [23.8103, 90.4125]
dhakaLatLong.push(5451);
// readonly used korle se ar assain ba push korte daina
const dhakaLatLong1 = [23.8103, 90.4125];
dhakaLatLong1.push(5451);
// Optional ,Default,rest parameters in function
const concatName = (firstName, lastName) => {
    if (!lastName) {
        return firstName;
    }
    return firstName + " " + lastName;
};
console.log(concatName("mir"));
console.log(concatName("mir", "Hussain"));
// if not return ,tahle sunnota bujate void hbe 
const greetings = (greeting, fullName) => {
    console.log(greeting + " " + fullName);
};
greetings("Hello", "mir");
// type -2
const greetings2 = (fullName, greeting = "Hello") => {
    console.log(greeting + " " + fullName);
};
greetings2("Hello", "mir");
// Rest Parameterrs in function [rest parameter (...ages)]
const numArr = [1, 2, 3];
const sum = (...number) => {
    return numbers.reduce((total, sum) => total
        + sum, 0);
};
const logUserAction = (...args) => {
    const [name, age] = args;
    console.log(name + " " | +age);
};
logUserAction("mir", 192, false);
//  ogject type ,type alias and interface
const user = {
    name: "mir",
    age: 43654,
    isActive: true,
    action: () => console.log("Hello")
};
{
    name: string;
    age: number;
    isActive: boolean;
    action: () => void badges;
    string[];
}
const user = {
    name: string,
    age: number,
    isActive: boolean,
    action: () => void badges, string, []: ,
};
