window.onload = function(){
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')

    addtask.onclick = function() {
        let li= document.createElement('li')
       // li.innerText = newtask.value

        // to delete..create a button
        let xbtn = document.createElement('button')
        xbtn.innerText ='❌'
        //to add deleting function
        xbtn.onclick = function(event) {
            event.target.parentElement.remove()
        }

        // Up button
        let upBtn = document.createElement('button')
        upBtn.innerText = '⬆'
        upBtn.onclick= function(event){
          //event.target => the up button 
          //event.target.parentElement => the <li> item
          //event.target.parentElement.parentElement => is the todolist
          
          event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement ,  // insert this element
            event.target.parentElement.previousElementSibling    // before it's previous element.
          )
        }

        // down button
        let dnBtn = document.createElement('button')
        dnBtn.innerText = '⬇'
        dnBtn.onclick= function(event){
          //event.target => the up button 
          //event.target.parentElement => the <li> item
          //event.target.parentElement.parentElement => is the todolist
          
          event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement.nextElementSibling ,  // insert next element
            event.target.parentElement    // after current element.
          )
        }

        //Add task text
        let taskSpan=document.createElement('span')
        taskSpan.innerText=newtask.value


        li.appendChild(xbtn)
        li.appendChild(upBtn)
        li.appendChild(dnBtn)
        li.appendChild(taskSpan)
        todolist.appendChild(li)
    

  //  todolist.innerHTML += `<li>${newtask.value}</li>`  // this will refresh the whole of list
    }

}