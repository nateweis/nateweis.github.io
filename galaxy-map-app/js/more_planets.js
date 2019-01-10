$(() => {
class Planets {
  constructor() {

  }
}

class PlanetMaker{
  constructor(){

  }
}






























})






// //////////////////////////////////////////
// Planet Click Functionality
// /////////////////////////////////////////

// $('.planet').on('click',(clkd) => {
//   let i = $(clkd.currentTarget).attr('id')
//   $text.empty()
//
//   $text.css('background',modalBackgrounds[i])
//   // $text.append($span)
//
//   $.ajax(
//      {
//        url: 'https://swapi.co/api/planets'
//      }
//    ).then((data) => {
//      // //////// adding planet info /////////////
//       const $h2 = $('<h2>').text(data.results[i].name)
//        const $close = $('<p>').text("X")
//        $text.append($close,$h2).show()
//
//
//        // /// Looping through the urls to add to the modal info////
//        const $ul = $('<ul>')
//        const $h4 = $('<h4>').text('Planet Residents:')
//        $ul.append($h4)
//        $text.append($ul)
//
//        if(data.results[i].residents.length === 0){
//          const $p = $('<p>').text("No One Lives on this Planet")
//          $ul.append($p)
//        }
//
//        for (let j = 0; j < data.results[i].residents.length; j++) {
//          $.ajax(
//            {
//              url: data.results[i].residents[j]
//            }
//          ).then((newData) => {
//            const $li = $('<li>').text(newData.name)
//            $ul.append($li)
//
//            // //// When Li is clicked more info appears ////
//            $li.on('click',() => {
//              console.log(newData);
//              $ul.hide()
//            const $ppl = $('<p>').text(`${newData.name} is a ${newData
//            .height} centimeters tall ${newData.gender} with ${newData.eye_color} eyes, ${newData.skin_color} skin color,
//             and ${newData.hair_color} hair. ${newData.name}'s birth year is
//             ${newData.birth_year}.`)
//              const $back = $('<span>').text('back')
//              $back.appendTo($text)
//              $text.append($ppl)
//
//              // //// Back Button Functionality For Modal /////
//              $back.on('click',() => {
//                $back.remove()
//                $ppl.remove()
//                $ul.show()
//              })
//            })
//          },
//          () => {
//            console.log("Error");
//          })
//        }
//
//
//        ////// close modal Button /////////
//        $close.on('click',() => {
//          $text.hide()
//        })
//      },
//      () => {
//        console.log("Error");
//      })
// })
