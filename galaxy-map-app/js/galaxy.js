$(() => {
  // //////////////////////////////////////////
  // Arry Of Img for modal background
  // /////////////////////////////////////////
  const modalBackgrounds = [
    'url(../images/landscapes/alderaan-landscape.jpeg)',
  ]

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
  let zoomD = .6;
  let zoomSD = 2.5;

  // ///// Zoom In //////////////
  const zoomIn = () => {
    zoom += .2;
    zoomD += .2;
    zoomSD += .2;

    $space.css('zoom',zoom);
    $deepSpace.css('zoom',zoomD);
    $sDeepSpace.css('zoom',zoomSD);

    if($space.css('zoom') >= .6){
      $deepSpace.show()
      $sDeepSpace.hide()
    }
    if($space.css('zoom') >= 1.2){
      $space.show()
      $deepSpace.hide()
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

      if($space.css('zoom') < 1.2){
        $space.hide()
        $deepSpace.show()
      }
      if($space.css('zoom') < .6){
        $deepSpace.hide()
        $sDeepSpace.show()
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

      // const $span = $('<span>').css('background',modalBackgrounds[0])
      // $text.append($span)

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
           $text.append($ul)

           if(data.results[i].residents.length === 0){
             const $p = $('<p>').text("No One Lives on this Planet")
             $ul.append($p)
           }

           for (let j = 0; j < data.results[i].residents.length; j++) {
             $.ajax(
               {
                 url: data.results[i].residents[j]
               }
             ).then((newData) => {
               const $li = $('<li>').text(newData.name)
               $ul.append($li)

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
