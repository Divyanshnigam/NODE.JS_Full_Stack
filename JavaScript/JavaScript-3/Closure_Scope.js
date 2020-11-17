var a=10;
function print()
{  // or defined and assigned here also same o/p
  //  var a=10; // if defined here not print outside the function
    console.log(a);  //10
}
console.log(a);//10 if outside else error
print();

function count()
{
    var initial =1;
    function plus()
    {
        console.log(++initial);
    }
    plus();
}
count();

/*
function count()
{
    var initial =1;
    function plus()
    {
        console.log(++initial);
    }
    return plus;  //.. will not give any o/p
}
count();

//Give o/p when called as this..
function count()
{
    var initial =1;
    function plus()
    {
        console.log(++initial);
    }
    return plus;
}
var c=count();
c();  //2 
c();  //3
*/

function counter(initial1)
{
    var val =initial1;
    function plus()
    {
        console.log(++val);
    }
    return plus;
}
var c=counter(10);
c();  //12 
c();  //12

function counter(val)
{
    function plus()
    {
        console.log(++val);
    }
    return plus;
}
var c=counter(10);
c();  //12 
c();  //12

function createCounter(iniVal,deltaVal)
{
    return {
        up(){
            iniVal+=deltaVal;
            console.log(iniVal);
        },
        down()
        {
            iniVal-=deltaVal;
            console.log(iniVal);
        }
    }
}
var c1=createCounter(10,2);
c1.up();  //12 
c1.up();  //14 
c1.down();  //12
