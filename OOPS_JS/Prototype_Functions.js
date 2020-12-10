function Person(name, age) {
    this.name = name;
    this.age = age;
    //this.isadult = function() { return this.age >= 18 }
}

Person.prototype.isadult = function() { return this.age >= 18 }


let p1 = new Person('Harry Potter', 15)
let p2 = new Person('John Doe', 30)

console.log(p1.isadult());
console.log(p2.isadult());
console.log(p1.isadult == p2.isadult);