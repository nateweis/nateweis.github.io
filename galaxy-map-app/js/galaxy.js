$(() => {
  // //////////////////////////////////////////
  // Variables
  // /////////////////////////////////////////
  let rt = 0;
  let rl = 0;
  let pg = 1;
  let sS = 0;
  // //////////////////////////////////////////
  // Arrys
  // /////////////////////////////////////////
  // Modal Backgrounds ///////////////////////
  const modalBackgrounds = [
    [
      'url(../galaxy-map-app/images/landscapes/alderaan-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/yavin-4-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/hoth-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/dagobah-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/bespin-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/endor-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/naboo-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/coruscant-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/kanino-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/geonosis-landscape.jpeg)'
    ],
    [
      'url(../galaxy-map-app/images/landscapes/utapau-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Mustafar-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Kashyyyk-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Polis-Massa-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Felucia-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Cato-Neimoidia-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Saleucami-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)'
    ],
    [
      'url(../galaxy-map-app/images/landscapes/Corellia-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Nal-Hutta-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Dantooine-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Ord-Mantell-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Trandosha-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Mon-Cala-landscape.jpeg)'
    ],
    [
      'url(../galaxy-map-app/images/landscapes/Chandrila-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Sullust-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Toydaria-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Malastare-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Dathomir-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Ryloth-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)'
    ],
    [
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Glee-Anselm-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Iridonia-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Iktotch-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)'
    ],
    [
      'url(../galaxy-map-app/images/landscapes/Serenno-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Concord-Dawn-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/galaxy.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Skako-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Muunilinst-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Shili-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Kalee-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Umbara-landscape.jpeg)',
      'url(../galaxy-map-app/images/landscapes/Tatooine-landscape.jpeg)'
    ]
  ]

  // Planet Skins /////////////////////////////
  const skins = ['alderaan','yavin-4','dagobah','bespin','endor','naboo',
  'coruscant','kanino','geonosis','planet-1','planet-2','planet-3',
'planet-4','planet-5','planet-6','planet-7','planet-8','planet-9','planet-10',
'planet-11','planet-12','planet-13','planet-14','planet-15','planet-16','planet-17',
'planet-18','planet-19','planet-20','planet-21','planet-22','planet-23',
'planet-24','planet-25']

// //////////////////// **** Pictures are from startwars.com, reddit, Wookipida,
/////////////////////// **** and alien species fandom websites

  // //////////////////////////////////////////
  // Dom Selectors
  // /////////////////////////////////////////
  const $in = $('#zoom-in')
  const $out = $('#zoom-out')
  const $space = $('.space')
  const $text = $('.text')
  const $deepSpace = $('.deep-space')
  const $sDeepSpace = $('.super-deep-space')
  const $newPlnt = $('#new-planets')
  const $planets = $('.space').children()


  // //////////////////////////////////////////
  // Functions
  // /////////////////////////////////////////
  const numberRandomizer = () => {
    rt = (Math.floor(Math.random()* 1995) + 5) + "px";
    rl = (Math.floor(Math.random()* 1995) + 5) + "px";
    sS = (Math.floor(Math.random()* skins.length));
  }

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
    zoomSD += 2;

    $space.animate({zoom:zoom},1000);
    $deepSpace.animate({zoom:zoomD},1000);
    $sDeepSpace.animate({zoom:zoomSD},2000);

    if($space.css('zoom') >= .8){
      $deepSpace.show()
      $sDeepSpace.hide()
    }
    if($space.css('zoom') >= 1.4){
      $space.show()
      $deepSpace.hide()
    }
  }

  // ////// Zoom Out ///////////
  const zoomOut = () => {
    if(zoom > .2){
      zoom -= .2;
      zoomD -= .2;
      zoomSD -= 2;

      $space.animate({zoom:zoom},1000);
      $deepSpace.animate({zoom:zoomD},1000);
      $sDeepSpace.animate({zoom:zoomSD},2000);

      if($space.css('zoom') < 1.4){
        $space.hide()
        $deepSpace.show()
      }
      if($space.css('zoom') < .8){
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
      $('.game').empty()

      $text.css('background',modalBackgrounds[pg-1][i])
      $text.css('background-repeat','no-repeat')
      $text.css('background-size','100% 100%')
      // $text.append($span)

      $.ajax(
         {
           url: 'https://swapi.co/api/planets/?page='+pg
         }
       ).then((data) => {
         // //////// adding planet info /////////////
         console.log(data.results);
          const $h2 = $('<h2>').text(data.results[i].name)
           const $close = $('<p>').text("X")
           $text.append($close,$h2).show()

           // Mini Game Naming ///////////
           // const $game = $('<h2>').text(`Death Star is attacking planet ${data.results[i].name}`)
           // const $recrute = $('<button>').attr('id','recrute').text('Recrute Ship')
           // const $health = $('<h3>').html('The Death star has <span>100</span> health')
           // $('.game').append($game,$recrute,$health)
           // console.log("modal populated");

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
                 // console.log(newData);
                 $ul.hide()
                 const $back = $('<span>').text('back')
                 const $ppl = $('<p>').text(`${newData.name} is a ${newData
                 .height} centimeters tall ${newData.gender} with ${newData.eye_color} eyes, ${newData.skin_color} skin color,
                  and ${newData.hair_color} hair. ${newData.name}'s birth year is
                  ${newData.birth_year}.`)
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

    // //////////////////////////////////////////
    // New Planets Btn (Hyperdrive)
    // /////////////////////////////////////////

    $newPlnt.on('click',() => {
      pg++;
      if(pg > 6){
        pg = 1;
      }
      $space.animate({zoom:'+=50'},50);
      $space.animate({zoom:'-=50'},50);

      const plnLength = $planets.length - 1

      for (let i = 0; i < plnLength; i++) {
        numberRandomizer()
        $('.planet').eq(i).css('top', rt)
        $('.planet').eq(i).css('left', rl)
        $('.planet').eq(i).css('transition-property','all')
        $('.planet').eq(i).css('transition-duration','.3s')
        $planets.eq(i).removeClass()
        $planets.eq(i).addClass('planet '+skins[sS])
      }
    })


})
  // $('.planet').on('click',EventFunc.planetModal)

/* This is a way to get to the next page
 the original url only returns the first
 10 planets so instead of doing /+i I
 could go to the next 10 planets by doing
 /?page=2 and then page 3 by doing /?page=3
 ect... */

// .then($.ajax({url:'https://swapi.co/api/planets/?page=4',
// success:(data) => {
// console.log(data);
// }}))








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
