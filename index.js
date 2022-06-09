$(document).ready(function() {
  // console.log($('.class1 li'))

  // $('class1 li').addClass('violet') // dobavit' class 
  // $('input[placeholder=ASDASD]').addClass('violet')
  // $('input[placeholder=ASDASD]').toggleClass('violet') //pri najatii +-
  // var creatures = $('#animals').find('.creature')
  // console.log(creatures, typeof creatures)


  // creatures.filter( creature => {
  //   [0,1,2,3,4,5].filter(i => {
  //     console.log(creatures[i])
  //   })
  // })
  // var creatures = $('.creature.category>.creature')    //zahodish v creaturesCategory, potom v creature;
  // console.log(creatures) = ('.creature.category').children(); //children() pokazivaet detey

  // first last next prev 
  var cats = $('.creature .category').children().first().next(); // cats
  console.log(cats);
  
  // var creatures = $('#animals').find('.creature') // massiv vseh kogo nashel
  // dlya integrirovaniya each()
    // creature.has()
}) 