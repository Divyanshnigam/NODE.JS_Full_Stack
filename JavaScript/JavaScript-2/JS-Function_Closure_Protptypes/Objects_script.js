function checkthis()
{
    console.log(this);
}

let obj={
    a:10,
    b: 'asdsa0',
    c:true,
    d: function(){
        console.log(this)
    },
    10: 2325,
    e: {
        l: "2345",
        m: "jsdjs",
        n: function(){
            console.log(this)
        },
    },

}
checkthis();
console.log(obj.a);
console.log(obj);
console.log(obj.d);

let x=obj.a;
console.log(x);

let z=obj.d;

console.log(obj);
