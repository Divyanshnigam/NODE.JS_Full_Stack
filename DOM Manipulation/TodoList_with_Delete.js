window.onload = function(){
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')

    addtask.onclick = function() {
        let li= document.createElement('li')
        li.innerText = newtask.value

        // to delete..create a button
        let xbtn = document.createElement('button')
        xbtn.innerText ='❌'
        li.appendChild(xbtn)

        //to add deleting function
        xbtn.onclick = function(event) {
            event.target.parentElement.remove()
        }

        todolist.appendChild(li)
    

  //  todolist.innerHTML += `<li>${newtask.value}</li>`  // this will refresh the whole of list
    }

}