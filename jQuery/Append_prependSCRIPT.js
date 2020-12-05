// console.log($('#list'))

// we can let to..
/*
    let item = $('#item')
    let list = $('#list')
*/
$(() =>{      // () => is a function syntax
    $('#prepend').click( function(){
                                     // console.log($('#item').val())
       let text = $('#item').val()
         $('#list').prepend($(`<li>${text}</li>`))
     //  $('#list').prepend($(`<li>`).text(text))
     //  $('#list').prepend($(`<li>`).html(`<b>${text}</b>`))  // will add text in bold
    })
    $('#append').click( function(){

        let text = $('#item').val()
          $('#list').append($(`<li>${text}</li>`))
      //  $('#list').append($(`<li>`).text(text))
      //  $('#list').append($(`<li>`).html(`<b>${text}</b>`))  // will add text in bold
     })
})