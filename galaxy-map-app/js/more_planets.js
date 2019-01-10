$(() => {
  // //////////////////////////////////////////
  // Variables
  // /////////////////////////////////////////
  const $text = $('.text')
  let newPlnt = 0;
  let rt = 0;
  let rl = 0;
  let plntAmount = Math.floor(Math.random()* 6) + 5;


// //////////////////////////////////////////
// Functions
// /////////////////////////////////////////
const numberRandomizer = () => {
  newPlnt = Math.floor(Math.random()* 50) + 11;
  plntAmount = Math.floor(Math.random()* 6) + 5;
  rt = (Math.floor(Math.random()* 1995) + 5) + "px";
  rl = (Math.floor(Math.random()* 1995) + 5) + "px";
}

const makeMorePlanets = () => {
  for (let l = 0; l < plntAmount; l++) {
    numberRandomizer();

    // // Makes a new planet div and css //////
    const $div = $('<div>').addClass('new-planet').attr('id',newPlnt)
    $div.css('top', rt)
    $div.css('left', rl)
    $div.css('border-radius', '100%')
    $div.css('background-size', '62px 62px')
    $div.css('background', 'pink')
    $('.space').append($div)





  }

  // // //////////////////////////////////////////
  // // Planet Click Functionality
  // // /////////////////////////////////////////




    $('.new-planet').on('click',(clkd) => {
      let i = $(clkd.currentTarget).attr('id')
      $text.empty()

      $text.css('background','url(../galaxy-map-app/images/galaxy.jpeg)')


      $.ajax(
         {
           url: 'https://swapi.co/api/planets/'+ i
         }
       ).then((data) => {
         // //////// adding planet info /////////////
          const $h2 = $('<h2>').text(data.name)
           const $close = $('<p>').text("X")
           $text.append($close,$h2).show()


           // /// Looping through the urls to add to the modal info////
           const $ul = $('<ul>')
           const $h4 = $('<h4>').text('Planet Residents:')
           $ul.append($h4)
           $text.append($ul)

           if(data.residents.length === 0){
             const $p = $('<p>').text("No One Lives on this Planet")
             $ul.append($p)
           }

           for (let j = 0; j < data.residents.length; j++) {
             $.ajax(
               {
                 url: data.residents[j]
               }
             ).then((newData) => {
               const $li = $('<li>').text(newData.name)
               $ul.append($li)

               // //// When Li is clicked more info appears ////
               $li.on('click',() => {
                 $ul.hide()
               const $ppl = $('<p>').text(`${newData.name} is a ${newData
               .height} centimeters tall ${newData.gender} with ${newData.eye_color} eyes, ${newData.skin_color} skin color,
                and ${newData.hair_color} hair. ${newData.name}'s birth year is
                ${newData.birth_year}.`)
                 const $back = $('<span>').text('back')
                 $back.appendTo($text)
                 $text.append($ppl)

                 // //// Back Button Functionality For Modal /////
                 $back.on('click',() => {
                   $back.remove()
                   $ppl.remove()
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
}
























makeMorePlanets()
})
