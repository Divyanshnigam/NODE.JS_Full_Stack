let obj1 ={
    a:10,
    b:20,
    c:30
}
let obj2 = Object.create(obj1)
obj2.p = 'abc'
obj2.q = 'def'
obj2.r = 'xyz'
let obj3 = Object.create(obj2)

console.log(obj2)
console.log(obj2.a)
console.log(obj2.b)

console.log(obj2==obj1);// false.. not same data

console.log(obj2.__proto__)  // may or maynot work in all browser console

console.log(obj2.__proto__==obj1) //true
/*
    obj2.a -> it will try to find a in obj2
        -> if not found,
        -> it will try to find a in obj2.__proto__.__proto__
        -> ... and so on..
        -> till __proto__ becomes null
*/
console.log(obj2.__proto__)  //{ a: 10, b: 20, c: 30 }
console.log(obj2.__proto__.__proto__)  //Object: null prototype
console.log(obj2.__proto__.__proto__.__proto__)  //null

console.log(obj3)//object present....
console.log(obj3.p)//"abc"
console.log(obj3.a)//10
console.log(obj3.__proto__==obj2)//true
console.log(obj3.__proto__.__proto__==obj1)//true
console.log(obj3.__proto__.__proto__.__proto__==obj1)//false  .. no further proto