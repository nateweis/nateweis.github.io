$(() => {

  // //////////////////////////////////////////
  // Dom Selectors
  // /////////////////////////////////////////
  const $in = $('#zoom-in')
  const $out = $('#zoom-out')
  const $space = $('.space')
  const $text = $('.text')
  const $deepSpace = $('.deep-space')
  const $sDeepSpace = $('.super-deep-space')

  // //////////////////////////////////////////
  // Zoom Buttons Functionality
  // /////////////////////////////////////////

  let zoom = .2;
  let zoomD = .4;
  let zoomSD = 1;

  // ///// Zoom In //////////////
  const zoomIn = () => {
    zoom += .2;
    zoomD += .2;
    zoomSD += .2;
    $space.css('zoom',zoom);
    $deepSpace.css('zoom',zoomD);
    $sDeepSpace.css('zoom',zoomSD);
    if($space.css('zoom') >= .8){
      $deepSpace.show()
    }
    if($space.css('zoom') >= 1.2){
      $space.show()
    }
  }

  // ////// Zoom Out ///////////
  const zoomOut = () => {
    if(zoom > .2){
      zoom -= .2;
      zoomD -= .2;
      zoomSD -= .2;
      $space.css('zoom',zoom);
      $deepSpace.css('zoom',zoomD);
      $sDeepSpace.css('zoom',zoomSD);
      $deepSpace.css('zoom',zoom);
      if($space.css('zoom') < 1.2){
        $space.hide()
      }
      if($space.css('zoom') < .8){
        $deepSpace.hide()
      }
    }
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
           const $ul = $('<ul>')
           const $h4 = $('<h4>').text('Planet Residents:')
           $ul.append($h4)

           for (let j = 0; j < data.results[i].residents.length; j++) {
             $.ajax(
               {
                 url: data.results[i].residents[j]
               }
             ).then((newData) => {
               const $li = $('<li>').text(newData.name)
               $ul.append($li)
               $text.append($ul)

               // //// When Li is clicked more info appears ////
               $li.on('click',() => {
                 console.log(newData);
                 $ul.hide()
                 const $back = $('<span>').text('back')
                 $back.appendTo($text)

                 // //// Back Button Functionality For Modal /////
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

/* Note: If i want to add in more planets change the url from
"planets" /to/ "planets/"+i   and change the planets name form
data.resedents[i].name /to/ data.name */

// for (let k = 1; k < 80; k++) {
//   $.ajax({url:'https://swapi.co/api/people/'+k}).then((ppl) => {
//     console.log(ppl);
//   },() => {
//     console.log("Failed");
//   })
// }
