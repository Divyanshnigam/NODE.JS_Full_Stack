// (JSON) - JavaScript Object
var bird ={
    x:100,
    y:20,
    color:"blue",
    eggs:["one","two","three","four"],
    
    fly:function()
    {
        console.log("Bird is flying",this.x,this.y);
    }

};
console.log(bird.x);
console.log(bird.color);
console.log(bird.eggs);
//for loop
for(let i=0;i<bird.eggs.length;i++)
{
    console.log(bird.eggs[i]);
}
//for each loop
bird.eggs.forEach(function(val,idx)
{
    console.log(idx,val);
})

bird.fly();