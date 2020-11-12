//ARRAY

let arr=["Apple","Mango","Guava"];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
arr.push("Banana");
for(let i=0;i<5;i++)
{
    console.log(arr[i]);
}
console.log(arr.pop());
for(let i=0;i<5;i++)
{
    console.log(arr[i]);
}
console.log(arr.indexOf("Mango"));

console.log(arr.shift()); // remove from front
console.log(arr.unshift("Kiwi"));  // add at first 
for(let i=0;i<5;i++)
{
    console.log(arr[i]);
}