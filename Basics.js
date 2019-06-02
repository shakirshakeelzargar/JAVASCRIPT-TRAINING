//console.log('Hello World');

/*
//let name;
//console.log(name);
*/

/*
let name = 'Shakir';
console.log(name);
*/

//var cant be reserved keyword ex: if, else etc
//cant contain space
//var are case sensitive
// can define them in one line or multiple line

/*
let firstName = 'Shakir';
let lastName = 'Shakeel';
console.log(firstName,lastName);
*/

//we see here the variable gets over writed
/*
let interestRate = 0.5;
interestRate = 2;
console.log(interestRate);
*/

//to make sure it is not over writed , use const
/*
const interestRate = 0.5;
interestRate = 2;
console.log(interestRate);
*/

//PRIMITIVE TYPES OR VALUE TYPES: str,num,boolean,undefined,null
/*
let name = 'Shakir'; //string
let age = 22; //Num
let isApproved = false; //boolean
let firstName = undefined; //undefined
let Color = null; //null

name = 20 // in console , it will overwrite the name and hence its datatype will get updated
typeof name //in browser console
typeof isApproved //in browser  console
typeof Color //in browser console, it will give output as object

*/

//REFERENCE TYPES: obj,arrays,Functions
//initializing objects and its properties
/*
let person = {
name: 'Shakir',
age: 22
};
console.log(person);
*/

//To change the properties of objects 1. Dot Notation 2. Bracket Notation

/*
//Dot Notation
let person = {
    name: 'Shakir',
    age: 22
    };
    person.name = 'Shakir1'; //Dot Notation
    console.log(person);
    */


    /*
//Bracket Notation

let person = {
    name: 'Shakir',
    age: 22
    };
    person['name'] = 'Shakir2'; // Bracket Notation
    console.log(person);
*/

/*
//To view only the specified property of an obj, we can use Bracket Notation
let person = {
    name: 'Shakir',
    age: 22
    };
    console.log(person.age);
*/


/*
//in case of dynamic where we dont know the value to be selected, we use brackett notation

let person = {
    name: 'Shakir',
    age: 22
    };

    let selection = 'name';
    person[selection] = 'Shakir3';
    console.log(person);
*/


/*
//ARRAYS
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
*/

/*
//Every element in the array will get an index
//To access elements index wise
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);
*/

/*
//Adding more elements to the same array 
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; // Means third index is green
console.log(selectedColors);
*/

/*
//In other prog languages, elements of an array should be of same datatype
//In js elements can be of diff data type
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1; // Means third index is green
console.log(selectedColors);
*/

/*
//Actually type of array is an obj. Array is a data structure to represent a list of items
typeof selectedColors // in browser console
*/

//FUNCTIONS

/*
function greet() {
    //body of fn or logic of fn
    console.log('Hello World');

}
greet();
*/

/*
//Adding parameter
function greet(name) //adding parameters, name is the parameter of the greet fn
{
    //body of fn or logic of fn
    console.log('Hello ' + name);

}
greet('Shakir');  //adding argument or value to the greet fn
*/

/*
//Adding multiple arguments
function greet(name) //adding parameters, name is the parameter of the greet fn
{
    //body of fn or logic of fn
    console.log('Hello ' + name);

}
greet('Shakir');  //adding argument or value to the greet fn
greet('Shakir1');  //adding argument or value to the greet fn
greet('Shakir2');  //adding argument or value to the greet fn
*/

/*
//Ading Multiple Parameters

function greet(name, age, address) //adding parameters, name is the parameter of the greet fn
{
    //body of fn or logic of fn
    console.log('Hello ' + name, ' Your age is ' + age, ' Your address is ' + address);

}
greet('Shakir', 22, 'Srinagar');  //adding arguments or values to the greet fn
*/

//TYPES OF FUNCTIONS, fn either performs a task or Calculates the values

/*
//Performing a task
function greet(name) //adding parameters, name is the parameter of the greet fn
{
    //body of fn or logic of fn
    console.log('Hello ' + name);

}
greet('Shakir');  //adding argument or value to the greet fn
*/

/*
//Calculating Values
function square(number)
{
    return number*number; //squaring the number
}

let result = square(2); //saving the result in another var for further use
console.log(result);
*/



