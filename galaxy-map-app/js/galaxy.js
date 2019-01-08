$(() => {


  // //////////////////////////////////////////
  // Zoom Buttons Functionality
  // /////////////////////////////////////////
  const $in = $('#zoom-in')
  const $out = $('#zoom-out')
  const $space = $('.space')
  let zoom = 1;

  const zoomIn = () => {
    zoom += .4;
    $space.css('zoom',zoom);
    if($space.css('zoom') >= 2){
      $space.css('background','darkgreen')
    }
  }
  const zoomOut = () => {
    if(zoom > .4){
      zoom -= .4;
      $space.css('zoom',zoom);
      if($space.css('zoom') < 2){
        $space.css('background','steelblue')
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
