function Fruit(taste,color)
{
    this.color=color;  
    this.taste=taste;
}

//new keyword
let mango =new Fruit("sweet","yellow");
let orange=new Fruit("sour","orange");

var apple = {
    taste:"sweet",
    color:"red",
}
console.log(apple);
console.log(orange);
console.log(apple.taste);

// Class Keyword JavaScript(ECMAScript 2015)

//Class declaration
class FruitClass {
    constructor(taste,color)
    {
        this.color=color;
        this.taste=taste;
    }
};
//
let kiwi=new FruitClass("sour","green");
console.log(kiwi);

//Class Expression
let FruitClass2 = class
{
    constructor(taste,color)
    {
        this.color=color;
        this.taste=taste;
    }
};
let kiwi2=new FruitClass("sour","green");
console.log(kiwi2);