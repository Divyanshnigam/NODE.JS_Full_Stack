let mainstr="this is a long string";

let smallstr=mainstr.slice(2,3); //i
console.log("slice",smallstr);   
let smallstr1=mainstr.slice(2,6);   // is i
console.log("slice",smallstr1);
//or
let smallstr2=mainstr.substring(7,10); //i
console.log("substring",smallstr2);
let smallstr3=mainstr.slice(-6,-4);   // will be counting in opposite direction.
console.log("slice",smallstr3);


let smallstr4=mainstr.substr(3,4);   
console.log("substr",smallstr4);


let smallstr5=mainstr.substr(-6,-4);   
console.log("substr",smallstr5);
