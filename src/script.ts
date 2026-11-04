
//  Data Type
let myString :string="PROGRAMMING HERRO";

let mynumber:Number = 45114;

let myBoolean:boolean = false || true;

let nySymbol:Symbol = Symbol();

let myBigint :bigint =100n;


const addTwo = (a:number, b:number) =>{
    return a+b
}

console.log(addTwo(150, 250))






// Array and tuple an readonly modifier
   
// arr and arr1 both same array string
// Array stucture 
const arr: string[] =["programing", "56454", "herro"]
const arr1: Array<string> =["Programing", "herro"]
// int or number array  stucture
// const numArr :number[] = [1, 2, 3]
 
// Tuple stucture
// const dhakaLatLong : [number, number] = [23.8103, 90.4125]

dhakaLatLong.push(5451)
 
// readonly used korle se ar assain ba push korte daina
const dhakaLatLong1 :readonly [number, number] = [23.8103, 90.4125]

dhakaLatLong1.push(5451)


 




// Optional ,Default,rest parameters in function

const  concatName =(firstName:string, lastName?:string) =>{
    if(!lastName){
        return firstName
    }
    return firstName + " " + lastName;
};
console.log(concatName("mir"));
console.log(concatName("mir", "Hussain"))

// if not return ,tahle sunnota bujate void hbe 

const greetings = (greeting:string, fullName:string) =>{
    console.log(greeting + " " + fullName)
};

greetings("Hello", "mir")

// type -2
const greetings2 = (fullName:string, greeting = "Hello") =>{
    console.log(greeting + " " + fullName)
};

greetings2("Hello", "mir")








// Rest Parameterrs in function [rest parameter (...ages)]

const numArr :number[] = [1, 2, 3]

 const sum = (...number:number[] ) =>{
    return numbers.reduce( (total, sum) => total
+sum,0)
 };
 const logUserAction =(
    ...args: [name: string, age:number, isActive: boolean]
 ) => {
    const [name, age] = args;
    console.log(name + " "|+ age);
 };
 logUserAction("mir", 192,false)



//  ogject type ,type alias and interface

const user:{
    name:string;
    age:number;
    isActive:boolean;
    action:()=>void
    badges:string[];
} = {
    name:"mir";
    age:43654;
    isActive:true;
    action:()=>console.log("Hello")
}

// Alias 

type User:{
    name:string;
    age:number;
    isActive:boolean;
    action:()=>void
    badges:string[];
}
const user:User={
     name:string;
    age:number;
    isActive:boolean;
    action:()=>void
    badges:string[];
}