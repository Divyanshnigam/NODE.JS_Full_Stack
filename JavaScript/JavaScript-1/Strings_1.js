let p='Divyansh'
let str=`This is a ${p}'s String`; // by '' , ``and ""
let str1="This is a String";
let str2='This is a  String';
console.log(str);
console.log(str1);
console.log(str2);

let longstr = 'this is\n\
a very long\
string';
console.log(longstr);
console.log(longstr.length);
console.log(str.length);

//searching
let s='this has some data here';
let key ='has';
console.log(s.indexOf(key));

let s1='this has some data here';
let key1 ='have';
console.log(s1.indexOf(key1));

let s3='this is easy job';
console.log(s3.indexOf('is'));

let s4='this is easy job';
console.log(s4.indexOf('is',3));  // from where it's gona search

let s5='tab aab abbcd ba aab';
console.log(s5.indexOf('ab'));  //0
console.log(s5.indexOf('ab',1));//4
console.log(s5.lastIndexOf('ab'));//17
console.log(s5.lastIndexOf('ab',16));//7
