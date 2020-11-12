let notes=['do','re','mi','fa','so','la','ti','do']

//slice- - 
console.log(notes.slice(4)); // print from 4..
console.log(notes.slice(4,6)); // print from 4 to 6

let notes1=['do','re','mi','fa','so','la','ti','do']
notes1.splice(4);
console.log(notes1); // print till 4..

let notes2=['do','re','mi','fa','so','la','ti','do']
let omit=notes2.splice(3);
console.log(omit);  // print after 3


let notes3=['do','re','mi','fa','so','la','ti','do']

let omit1=notes3.splice(3,2);
console.log(omit1);  // print after 3 and 2 elements


//Insertion
let notes4=['do','re','mi','fa','so','la','ti','do']
notes4.splice(0,3,'sa','re','ga');
console.log(notes4);    // replaced

//concat
let notes5=['do','re','mi','fa','so','la','ti','do']
console.log(notes5.concat('sa','re','ga'));
console.log(notes5);