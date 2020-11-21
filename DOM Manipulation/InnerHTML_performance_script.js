window.onload = function(){
    let num =document.getElementById('num')
    let list =document.getElementById('list')
    let print =document.getElementById('print')

    print.onclick = function(){
        let start =new Date().getTime()
        let N=parseInt(num.value)
        let listHTML=''
        for(let i=1;i<=N;i++)
        {
            listHTML+= '<li>' + i + '</li>'
        }
        list.innerHTML =listHTML
        console.log(new Date().getTime()-start);
    }
}

/*
        for(let i=1;i<=N;i++)   //...or like this but will take a lot time..
        {
            list.innerHTML += '<li>' + i + '</li>'
        }
*/
