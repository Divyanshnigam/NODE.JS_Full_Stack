var intervalId;
var runcount=0;

function sayhello()
{
    runcount++
    if(runcount>5)
    {
        clearInterval(intervalId);
    }
    console.log("Hello!!")
}
console.log("And the wait starts..")
setTimeout(sayhello,1000); ///time of 1 sec
setTimeout(sayhello,1000);

var intervalId = setInterval(sayhello,1000);
//clearInterval(intervalId);

var myfun=function() {
    console.log("This run after 1 sec")
}
//setInterval(myfun,1000);   //here the funtion it self can declare..