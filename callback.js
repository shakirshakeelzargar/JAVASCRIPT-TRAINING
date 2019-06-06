/*
//BASIC CALLBACK
let x = function()
{
    console.log("ITS INSIDE THE FUNCTION")
};
let y = function(callback)
{
    console.log('HELLO')
    callback()
}
y(x);
*/

/*
//Basic calculator without callback
let calc = function(num1, num2, calctype)
{
    if (calctype ==='add')
    {
        return num1 + num2;
    }
    else if (calctype === 'mul')
    {
        return num1*num2;
    }
    
};
console.log(calc(5,6, 'mul'));
*/


/*
//Calculator using callback
let add = function(a,b)
{
return a+b;
};

let sub = function(a,b)
{
return a-b;
};

let mul = function(a,b)
{
return a*b;
};

let calc = function(num1,num2,callback)
{
    return callback(num1,num2);
};
console.log(calc(2s11,sub));
*/

/*
//SESSION PROBLEM
function greetme(callback) {

    setTimeout(function() {

        var databaseresult = 1;

        callback(databaseresult, addTwoToResult);

    }, 500);

}

var addOneToResult = function(result, fn) {

    fn(result + 1, addThreeToResult);

};

var addTwoToResult = function(result, fn) {

    fn(result + 2,addThreeToResult);

};

var addThreeToResult = function(result) {

    var output = result + 3;

    console.log(output);

};
greetme(addOneToResult);
*/


/*
function greetme(callback) 
{
    setTimeout(function() 
    {
        var name = 'SHAKIR';
        callback(name);
    }, 1000); 
}

var converToLowerCase = function(input) 
{
    input = input.toLocaleLowerCase();
    let fn = function (input) 
    {
        console.log(input);
    }
    let result = addGretting(input, fn);
 
}

var addGretting = function(input, callback) 
{
    setTimeout(function() 
    {
        input = 'Good Morning '+ input+ '!';        
        callback(input);
    }, 2000);
}

greetme(converToLowerCase);
*/

//ADD
//ADD2
//ADD 3