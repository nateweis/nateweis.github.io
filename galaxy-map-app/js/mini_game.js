$(() => {
  // //////////////////////////////////////////
  // Variables
  // /////////////////////////////////////////
  const $selected = $('.space').children()
  const $makeShip = $('#recrute')
  let health = 100;
  let plt = 0;
  let n = 0;

  const $deathStar = $('<div>').addClass('death-star')
  $('.space').append($deathStar)

  const type = ['VCX-100 light freighter','Y-wing Starfighter','X-wing Starfighter','B-wing Fighter','Alderaan Cruiser','Millennium Falcon']

  // //////////////////////////////////////////
  // Classes and Facories
  // /////////////////////////////////////////
  class Ships{
    constructor(name,power,pilot){
      this.name = name;
      this.power = power;
      this.pilot = pilot;
    }
  }

  class Factory{
    constructor(){
      this.fleet = []
    }
    generateShip(){
      const newSpaceShip = new Ship(type[n],n + 5,plt)
      this.fleet.push(newSpaceShip)
    }
  }

  const rebals = new Factory()



  // //////////////////////////////////////////
  // Functions
  // /////////////////////////////////////////
  const randNum = () => {
    plt = Math.random()*10
    n = Math.floor(Math.random()* type.length)
  }



  const gameStart = () => {
    $selected.on("click",(clkd) => {
     // $('.game').show()
     // $(clkd.currentTarget).remove()
    })

  }





// //////////////////////////////////////////
// Event listenrs
// /////////////////////////////////////////

$makeShip.on('click',() => {
  randNum()
})


$deathStar.on('click',() => {
  alert('Click on the planet you want to attack')
  gameStart()
})












})


// //////////////////////////////////////////
// Goals
// /////////////////////////////////////////



// Click DeathStar ///
// when death star is clicked game modual pops up ***
// can select planet you want to attack ***
// after planet selected game begins ***

// Game ////
// each planet has its own ships (normal ones) *****
// ships are of certin types and these types have various firepower **
// each of these chips also have piolts (prbability of doing damage) **
// firelpower is based off ship type and piolts are numberRandomizer ***

// functionality ///
/* you press a button to make a ship and based on the planet
 thats defending thats the type of ship you get
 ready ships are displayed in modal */
/* you then press a button to deply a ship
 the ships pioloting skills are checked against the deathsarts dfence
 (its a high dfence) */
 // if your attack gets through it does damage to the deathstar
 // if you get the deathstar damage to 0 deathstar is removed
 // if time runs out first the attacked planet gets removed
