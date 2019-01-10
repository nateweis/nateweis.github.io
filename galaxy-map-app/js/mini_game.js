$(() => {

  const $selected = $('.space').children()
  const $makeShip = $('#recrute')
  let health = 100;
  let plt = 0;


  class Ships{
    constructor(name,power,pilot){
      this.name = name;
      this.power = power;
      this.pilot = pilot;
    }
  }

  class Factory{
    constructor(){

    }
  }


const $deathStar = $('<div>').addClass('death-star')
$('.space').append($deathStar)

$deathStar.on('click',() => {
  alert('Click on the planet you want to attack')
  gameStart()
})






// Click DeathStar ///
// when death star is clicked game modual pops up
// can select planet you want to attack
// after planet selected game begins

// Game ////
// each planet has its own ships (normal ones)
// ships are of certin types and these types have various firepower
// each of these chips also have piolts (prbability of doing damage)
// firelpower is based off ship type and piolts are numberRandomizer

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


const randNum = () => {
  plt = Math.random()*10
}

$makeShip.on('click',() => {
  randNum()
})











const gameStart = () => {
  $selected.on("click",(clkd) => {
   $('.game').show()
  })

}










})
