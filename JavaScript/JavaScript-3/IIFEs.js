//IIFEs - Imediately Invoked Function Expression
/*function sayHello()
{
    console.log("hello");
};
sayHello();
*/
//or 
/*
(function sayHello()
{
    console.log("hello");
})();
*/
/*
(function ()
{
    var a=10;   // block scopes
    var b=a/5;
    console.log(a+b); // IIFEs not polluting the global scope
})();
console.log(a);  //IIFEs are not declaring the var globally
*/
/*
var a=10;
if(true)
{
    console.log(a);  //10
}  //..not an IIFE it's declaring the var globally
*/
/*
if(true)
{
    var a=10;
}
console.log(a);  //10
*/
/*
if(true)
{
    (function() 
    {   IIFEs- declartion in block 
    var a=10;
    })()
}
console.log(a);  //not defined a
a having a block scope 
*/
/*
function doMath() 
{
    console.log("3^4 = " + Math.pow(3,4));
    console.log("4^3 = " + Math.pow(4,3));
    console.log("root(2) = " + Math.sqrt(2));
    console.log("sin(10) = " + Math.sin(10));
}
doMath();
*/
//IIFE...
(function (l,p,r,s) 
{
    l("3^4 = " + p(3,4));
    l("4^3 = " + p(4,3));
    l("root(2) = " + r(2));
    l("sin(10) = " + s(10));
})(console.log,Math.pow,Math.sqrt,Math.sin);

//setTimeout
for(var i=0;i<10;i++)
{
    setTimeout(function()
    {
        console.log(i);  // 10 is printed 10 times
                //becoz there's the setTimeout let the i printed after 1ms 
    },100)
}

// using IIFEs..
for(var i=0;i<10;i++)
{
    (function (j)
    {
        setTimeout(function()
        {
            console.log(j); 
        },100)
    })(i)
}
// or 
for(let i=0;i<10;i++)
{           // let will create inernal clouser..
    setTimeout(function()
    {
        console.log(i); 
    },100)
    
}
//or
for(var i=0;i<10;i++)
{
    setTimeout(console.log,100,i)
    
}