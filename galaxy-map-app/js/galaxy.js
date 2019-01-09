$(() => {

  // //////////////////////////////////////////
  // Dom Selectors
  // /////////////////////////////////////////
  const $in = $('#zoom-in')
  const $out = $('#zoom-out')
  const $space = $('.space')
  const $text = $('.text')

  // //////////////////////////////////////////
  // Zoom Buttons Functionality
  // /////////////////////////////////////////

  let zoom = 1;

  const zoomIn = () => {
    zoom += .4;
    // $space.show()
    $space.css('zoom',zoom);
    if($space.css('zoom') >= 2){
      $space.css('background','darkgreen')
    }
  }
  const zoomOut = () => {
    if(zoom > .4){
      zoom -= .4;
      // $space.show()
      $space.css('zoom',zoom);
      if($space.css('zoom') < 2){
        $space.css('background','steelblue')
      }
    }
    // else{
    //   $space.hide()
    // }
  }

  $in.on('click',zoomIn)
  $out.on('click',zoomOut)




    // //////////////////////////////////////////
    // Planet Click Functionality
    // /////////////////////////////////////////

    $('.planet').on('click',(clkd) => {
      let i = $(clkd.currentTarget).attr('id')
      $text.empty()
      $.ajax(
         {
           url: 'https://swapi.co/api/planets'
         }
       ).then((data) => {
         // //////// adding planet info /////////////
          const $h2 = $('<h2>').text(data.results[i].name)
           const $close = $('<p>').text("X")
           $text.append($close,$h2).show()

           // /// Looping through the urls to add to the modal info////
           for (let j = 0; j < data.results[i].residents.length; j++) {
             $.ajax(
               {
                 url: data.results[i].residents[j]
               }
             ).then((newData) => {
               const $ul = $('<ul>')
               const $li = $('<li>').text(newData.name)
               $ul.append($li)
               $text.append($ul)

               // //// When Li is clicked more info appears ////
               $li.on('click',() => {
                 console.log(newData);
                 $ul.hide()
                 const $back = $('<span>').text('back')
                 $back.appendTo($text)

                 // //// Back Button Functionality /////
                 $back.on('click',() => {
                   $back.remove()
                   $ul.show()
                 })
               })
             },
             () => {
               console.log("Error");
             })
           }


           ////// close modal Button /////////
           $close.on('click',() => {
             $text.hide()
           })
         },
         () => {
           console.log("Error");
         })
    })


})












// //// Test For PPL, Only 10?????? //////////
// /// For loop through all the planets and ppl if you want all ///
// for (let k = 1; k < 80; k++) {
//   $.ajax({url:'https://swapi.co/api/people/'+k}).then((ppl) => {
//     console.log(ppl);
//   },() => {
//     console.log("Failed");
//   })
// }
