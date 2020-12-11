function helloSayer(times, name) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let loopId = setInterval(() => {
            count++;
            console.log('Hello' + name)
            if (count === times) {
                clearInterval(loopId)
                resolve()
            }
        }, 100)
    })

}

//concurent
helloSayer(3, ' Divyansh')
    .then(helloSayer(2, " Vishwash"))
    .then(helloSayer(2, " Dhruv"))
    .then(helloSayer(2, " Harry"))
    .then(helloSayer(2, " wiseley"))

//Sequentially
helloSayer(3, ' Divyansh')
    .then(() => helloSayer(2, " Vishwash"))
    .then(() => helloSayer(2, " Dhruv"))
    .then(() => helloSayer(2, " Harry"))
    .then(() => helloSayer(2, " wiseley"))



module.exports = {
    helloSayer
}