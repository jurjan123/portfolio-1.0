function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  var el = document.getElementById("naam")
  el.addEventListener("click", function(){
    $("#naam").css("color", getRandomColor());

  })
  
  let img = document.querySelector("#myface img")
  let slideShowImages = [
    "../img/pimgezicht.jpg",
    "../chillhop/Schermopname (164).png",
    "../chillhop/Schermopname (193).png",
    "../chillhop/Schermopname (189).png",
    "../chillhop/Schermopname (190).png",
  ]

  let current_slideshow_image = 0

  setInterval(slideShow, 4000)

  function slideShow(){
    console.log(current_slideshow_image)
    if(current_slideshow_image == 4){
      current_slideshow_image = 0
    } else{
      current_slideshow_image++
    
    img.src = slideShowImages[current_slideshow_image]
    }
  }