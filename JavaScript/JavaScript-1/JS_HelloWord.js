let a=10;
console.log(a);

let b=[1,2,3,4,5];
console.log(b);
console.log("Hello Word!!");

c=20;   // Global Variable
var d=30;  //Function Scope
let e=50;   // Block Scope

function fun()
{
    let a=5;
    if(a==5)
    {
        let b=10;
        console.log("Inside",b);
    }
    console.log("Outside",b);
}
fun();
console.log("Global",c);  //accesible since Globally declared

function square_root(n)   // function defined in this manner are moved to top acc. to script
{                                // rest are not becox of function hoisting
    console.log("In 1st funt ",Math.sqrt(n));
    return ;
}       // if the call made above fn declation its executable

square_root(10);

//FUNCTION HOISTING
var sqrt_n = function square_root(n)
{  // this and the rest of fn in this manners are not executed if called above it.
    console.log("In 2nd funt sqrt_n");
    return ;
}
square_root(10);
sqrt_n(10);
