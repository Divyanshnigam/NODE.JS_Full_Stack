class Person
{
    constructor(name,age)
    {
        this.name= name 
        this.age=age
    }

    isAdult() 
    {
        return this.age >= 18
    }    
}

let p1 = new Person('John Doe', 22)
let p2 = new Person('Jane Doe', 15)

console.log(typeof Person) // function; there is NO new datatype called 'class'
console.log(p1.__proto__ == Person.prototype) // true
console.log(p1.__proto__.__proto__ == Object.prototype) // true

console.log('p1',p1.isAdult())
console.log('p2',p2.isAdult())

class Student extends Person 
{
    constructor(name, age, grade) 
    {
      super(name, age)  // will run first...super
      this.grade = grade
    }
  }
  
  let s1 = new Student('Harry Potter', 13, 5)
  let s2 = new Student('Hermoine Granger', 14, 6)
      
  console.log(s1.__proto__ == Student.prototype)          // true
  console.log(s1.__proto__.__proto__ == Person.prototype)   // true
  console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)   // true
  
  // inheritance chain 
  // Object.prototype -> Person.prototype -> Student.prototype
  
  // no inheritance between the classes (actually they are functions)
  // Object -x-> Person -x-> Student