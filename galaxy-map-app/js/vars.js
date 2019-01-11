const VarObj = {
  modalBackgrounds: [],
  $in: $('#zoom-in'),
  $out:$('#zoom-out'),
  $space:$('.space'),
  $text:$('.text'),
  $deepSpace: $('.deep-space'),
  $sDeepSpace:$('.super-deep-space'),
  zoom : .2,
  zoomD : .6,
  zoomSD : 2.5,
}


// //////////////////////////////////////////
// Arry Of Img for modal background
// /////////////////////////////////////////
VarObj.modalBackgrounds = [
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
]
