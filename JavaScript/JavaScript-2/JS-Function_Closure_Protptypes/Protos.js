let str="abcd"                             //3 levels from null
let num = 233                              //3 levels from null  ... proto..
let bool = true                            //3 levels from null
let arr=[123,456,789]                      //3 levels from null
let obj={a: 10,b:'ABCD'}                   //2 levels from null
let fun= function(){console.log('yay!') }  //3 levels from null

// if x and y are not primitive
//  x==y : true..same performance ..refenrence to same object in memory

console.log('========== types ==========')
console.log('typeof String',typeof String)  //function type
console.log('typeof Boolean',typeof Boolean)
console.log('typeof Number',typeof Number)
console.log('typeof Array',typeof Array)
console.log('typeof Object',typeof Object)
console.log('typeof Function',typeof Function)

console.log('========== proto chain ==========')

console.log(str.__proto__.__proto__==obj.__proto__)   //true
console.log(num.__proto__.__proto__==obj.__proto__)   //true
console.log(bool.__proto__.__proto__==obj.__proto__)  //true
console.log(arr.__proto__.__proto__==obj.__proto__)   //true
console.log(fun.__proto__.__proto__==obj.__proto__)   //true
//Everything that is indirectly inherits from the same thing that obj is inherited from
//i.e. In javaScript, everything is essentially an object

console.log('========== prototypes ==========')
console.log(obj.__proto__== Object.prototype)    //true
console.log(str.__proto__== String.prototype)    //true
console.log(num.__proto__== Number.prototype)    //true
console.log(bool.__proto__== Boolean.prototype)  //true
console.log(arr.__proto__== Array.prototype)     //true
console.log(fun.__proto__== Function.prototype)  //true

typeof Object.create(Boolean.prototype)  // object
let x= Object.create(Boolean.prototype)

x.__proto__==bool.__proto__  //true