var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Bildspel_1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

let textSlideIndex = 1;
showSlides(textSlideIndex);

function plusSlides(n) {
    showSlides(textSlideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) {textSlideIndex = 1}    
    if (n < 1) {textSlideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[textSlideIndex-1].style.display = "flex";  
}
