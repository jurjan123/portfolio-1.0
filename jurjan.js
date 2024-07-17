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
  
  let img = document.querySelector("#myface")
  let slideShowImages = [
    
    "allimage/image1.png",
    "allimage/image2.png",
    "allimage/image3.png",
    "allimage/image4.png",
    "allimage/image5.png",
    "allimage/image6.png",
    "allimage/image7.jpg",
    "allimage/image8.jpg",
    "allimage/image9.jpg",
    "allimage/image10.jpg",
    "allimage/image11.jpg",
    "allimage/image12.jpg",
  ]

  let current_slideshow_image = 0

  setInterval(slideShow, 4000)

  function slideShow(){
    console.log(current_slideshow_image)
    if(current_slideshow_image >= 11){
      current_slideshow_image = 0
    } else{
      current_slideshow_image++
    
    img.src = slideShowImages[current_slideshow_image]
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Load the preferred theme on initial load
    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    themeToggleBtn.addEventListener('click', function () {
      var bodyElement = document.body;
            if (bodyElement.classList.contains('bg-image-1')) {
                bodyElement.classList.remove('bg-image-1');
                bodyElement.classList.add('bg-image-2');
            } else if (bodyElement.classList.contains('bg-image-2')) {
                bodyElement.classList.remove('bg-image-2');
                bodyElement.classList.add('bg-image-3');
            } else if (bodyElement.classList.contains('bg-image-3')) {
                bodyElement.classList.remove('bg-image-3');
                bodyElement.classList.add('bg-image-1');
            }
       
      var backgroundDiv = document.getElementById('backgroundDiv');
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
           
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            backgroundDiv.classList.toggle('bg-image-1');
            
        }

       
        
        


    });
});
  

console.log(screen.availWidth, screen.availHeight)


