console.log(1 == '1') //true

console.log(1 === '1') //false

//peculiar cases
console.log(0 == '') //true..becoz no. empty string == 0

console.log('false'== false) //false..

console.log(''== false) //true..both typecast to 0

/*
'\n'
'\t'
' '
'\n'!='\t'not same till changed to no.

a=b, b=c ...implies that ..a=c

*/
console.log([1,2]==[1,2]) //false..same elements but with different array
