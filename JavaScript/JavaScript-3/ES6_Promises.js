function fakeDownloadPromise(correct)
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let downldedData ="Some data from the net"
            console.info("Downloading has completed")
            if(correct){
                resolve(downldedData)
            }
            else{
                reject(new Error("Could not download file"))
            }
        },1000)
    })
}

let downloaded = fakeDownloadPromise(true);
downloaded.catch(function(err){
    console.log(err)
})

setTimeout(function(){
   downloaded.then(function(data){
   console.info("The data that was downloded is this-->")
   console.info(data)
})
},3000)


fakeDownloadPromise(true).then(function(data){     // true .. then call if(correct) else else{} be executed (error)
    console.log("The data that we downloaded is -->")
    console.log(data)
}).catch(function(err){
    console.log(err)
})