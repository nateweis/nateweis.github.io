const EventFunc = {
  planetModal: () => {},
  zoomIn:() => {},
  zoomOut:() => {}
}

// //////////////////////////////////////
// When Planet is cliked
// //////////////////////////////////////
EventFunc.planetModal = (clkd) => {
  // assignig I for planet selecting
  let i = $(clkd.currentTarget).attr('id')
  VarObj.$text.empty()
  // $('.game').empty()
  console.log(i);

  if(i>9){VarObj.$text.css('background','url(../galaxy-map-app/images/galaxy.jpeg)')}
  else{VarObj.$text.css('background',VarObj.modalBackgrounds[i])}

  $.ajax({url: 'https://swapi.co/api/planets/'+ i}
   ).then((data) => {
     // //////// adding planet info /////////////
      const $h2 = $('<h2>').text(data.name)
       const $close = $('<p>').text("X")
       VarObj.$text.append($close,$h2).show()

       // Mini Game Naming ///////////
       // const $game = $('<h2>').text(`Death Star is attacking planet ${data.name}`)
       // const $recrute = $('<button>').attr('id','recrute').text('Recrute Ship')
       // const $health = $('<h3>').html('The Death star has <span>100</span> health')
       // $('.game').append($game,$recrute,$health)
       // console.log("modal populated");


       // /// Looping through the urls to add to the modal info////
       const $ul = $('<ul>')
       const $h4 = $('<h4>').text('Planet Residents:')
       $ul.append($h4)
       VarObj.$text.append($ul)

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
             $back.appendTo(VarObj.$text)
             VarObj.$text.append($ppl)

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
         VarObj.$text.hide()
       })
     },
     () => {
       console.log("Error");
     })
   }

   // //////////////////////////////////////
   // End Of When Planet is cliked
   // //////////////////////////////////////

   //// //////////////////////////////////////
   // When Zoom In is Clicked
   // //////////////////////////////////////
   EventFunc.zoomIn = () => {
     VarObj.zoom += .2;
     VarObj.zoomD += .2;
     VarObj.zoomSD += 2;

     VarObj.$space.css('zoom',VarObj.zoom);
     VarObj.$deepSpace.css('zoom',VarObj.zoomD);
     VarObj.$sDeepSpace.css('zoom',VarObj.zoomSD);

     if(VarObj.$space.css('zoom') >= .8){
       VarObj.$deepSpace.show()
       VarObj.$sDeepSpace.hide()
     }
     if(VarObj.$space.css('zoom') >= 1.4){
       VarObj.$space.show()
       VarObj.$deepSpace.hide()
     }
   }

   //// //////////////////////////////////////
   // When Zoom Out is Clicked
   // //////////////////////////////////////
   EventFunc.zoomOut = () => {
     if(VarObj.zoom > .2){
       VarObj.zoom -= .2;
       VarObj.zoomD -= .2;
       VarObj.zoomSD -= 2;

       VarObj.$space.css('zoom',VarObj.zoom);
       VarObj.$deepSpace.css('zoom',VarObj.zoomD);
       VarObj.$sDeepSpace.css('zoom',VarObj.zoomSD);

       if(VarObj.$space.css('zoom') < 1.4){
         VarObj.$space.hide()
         VarObj.$deepSpace.show()
       }
       if(VarObj.$space.css('zoom') < .8){
         VarObj.$deepSpace.hide()
         VarObj.$sDeepSpace.show()
       }
     }
   }


     // //////////////////////////////
     // Current list of used Variables
     // For when planet is clicked
     // //////////////////////////////
     // 1) i (var)
     // 1) modalBackgrounds (arr)
     // 1) $text (dom)
     // 1) clkd (param)
     // 2) data (ajax)
     // 2) $h2 (dom)
     // 2) $close (dom)
     // 2) $ul (dom)
     // 2) $h4 (dom)
     // 3a) $p (dom)
     // 3b) newData (ajax)
     // 3b) j (loop var)
     // 3b) $li (dom)
     // b-4) $ppl (dom)





     //
