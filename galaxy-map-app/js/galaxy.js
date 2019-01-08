$(() => {












    $('div').on('click',(clkd) => {
      let i = $(clkd.currentTarget).attr('id')

      $.ajax(
         {
           url: 'https://swapi.co/api/planets'
         }
       ).then((data) => {
           // for (var i = 0; i < data.results.length; i++) {
             console.log(data.results[i].name)
           // }
         },
         () => {
           console.log("Error");
         })
    })



})
