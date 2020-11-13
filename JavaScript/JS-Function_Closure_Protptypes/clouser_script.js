function outer(arg1)
{
    let var1=10
    let x=10
    console.log(arguments[0])
    function inner(arg2)
    {
        let var2=20
        let x=20
        console.log(arg1,var1,arg2,var2,x)
        console.log(arguments[0])
    }
    return inner
}
let x=outer('param1')
//typeof x ==function
//scope of arg1 and var1 are rom lines 3 to 13
x('param2')   //passing here is in arg2..going to inner function
