/*var a=10;
a=11;
a++;
console.log(a); //12

var a=10;
a++;
console.log(a);  //11
var b=20;
b++;
console.log(b);  //21

const c=30;
c++;
console.log(c);  //error
*/

const obj={
    k1: 'abc',
    k2: 10,
    k3: false
};
//obj ={a:10};  ... error
obj.k4 =123;
console.log(obj.k4);  //123

delete obj.k1;
console.log(obj.k1);  // undefined

const arr =[1,2,3];
arr.push(5);
console.log(arr);  //[1,2,3,5]

// const don't allow to reassign 

var myVar =10;
function alpha0(){
    var myVar =10;

    console.log(myVar);
}
alpha0();  // 11


var myVar =10;
function alpha(){
    var myVar =11;
    if(true)
    {
         myVar =21;
        console.log(myVar);//21
    }
    console.log(myVar); //21
}
alpha();  

var myVar =10;
function alpha1(){
    let myVar =11;
    if(true)
    {
        let myVar =21;
        console.log(myVar);//21
    }
    console.log(myVar); //11
}
alpha1();  

const myVar1 =10;
function alpha2(){
    const myVar1 =11;
    if(true)
    {
        const myVar1 =21;
        if(true)
        {
            const myVar1 =33;
            console.log(myVar1);  //33
        }
        console.log(myVar1);//21
    }
    console.log(myVar1); //11
}
alpha2();
