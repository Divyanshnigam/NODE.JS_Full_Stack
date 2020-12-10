function Person(name, age) {
    this.name = name;
    this.age = age;
    return 10;
}

let p1 = new Person('Harry Potter', 20)
let p2 = new Person('John Doe', 30)
console.log('p1 = ' + JSON.stringify(p1))
console.log(p2)
    /*
    p1 = {"name":"Harry Potter","age":20}
    Person { name: 'John Doe', age: 30 }
    */