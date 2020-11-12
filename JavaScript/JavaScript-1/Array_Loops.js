let arr=[1,2,3]
console.log(arr);

let arr2=[1,'hello',false,[2,3]];
console.log(typeof arr2[1]);

for(let i=0;i<arr2.length;i++)
{
    console.log(arr2[i]);
}
//or as

for(let val of arr2)
{
    console.log(val);
}
//or as

for(let index in arr2)
{
    console.log(arr2[index]);
}


