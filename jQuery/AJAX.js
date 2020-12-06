$(() =>{      // () => is a function syntax
   let list =$('#people')
   let page = 1

    $('#fetch').click(() => {
       $.get(`https://reqres.in/api/users?=${page}`, (data) =>{
           page++
           for(let p of data.data){
               list.append(
                   $(`<li>
                   <img width="100" src= "${p.avatar}">
                   ${p.first_name} ${p.first_name}
                   </li>`)
               )
            }
       })
   })
})