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
          // for (var i = 0; i < data.results.length; i++) {
          const $h2 = $('<h2>').text(data.results[i].name)
             const $close = $('<p>').text("X")
             $text.append($close,$h2).show()

             // close modal Button
             $close.on('click',() => {
               $text.hide()
             })
          // }
         },
         () => {
           console.log("Error");
         })
    })



})
