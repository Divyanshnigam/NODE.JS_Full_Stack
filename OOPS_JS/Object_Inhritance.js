let a = { p: 10, q: 'Divyansh', r: false }

let b = Object.create(a)
let c = Object.create(b)

console.log(a)
console.log(b)
console.log(b.q)
console.log(c.q)

b.q = 'Nigam'
console.log(b)
console.log(c.q)
    /*
    { p: 10, q: 'Divyansh', r: false }
    {}
    Divyansh
    Divyansh
    { q: 'Nigam' }
    Nigam
    */