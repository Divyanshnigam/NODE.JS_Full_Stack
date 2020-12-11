function helloSayer(times, name, doneSaying) {
    let count = 0;
    let loopId = setInterval(() => {
        count++;
        console.log('Hello' + name)
        if (count === times) {
            clearInterval(loopId)
            doneSaying()
        }
    }, 100)
}

helloSayer(3, 'Divyansh', () => {
    helloSayer(2, 'Vishwash', () => {
        helloSayer(1, 'Dhruv', () => {

        })
    })

})


module.exports = {
    helloSayer
}