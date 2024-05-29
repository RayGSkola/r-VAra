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
  setTimeout(carousel, 2000); 
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


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.uploadForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = form.querySelector('input[name="Email"]').value.trim();
        const phoneNumber = form.querySelector('input[name="PhoneNumber"]').value.trim();

        if (email === '' && phoneNumber === '') {
            alert('Please provide either an email or a phone number.');
            return; 
        }

        form.reset();

        showNotification(); 
    });

    function showNotification() {
        const notification = document.getElementById('notification');
        notification.innerText = 'Hemsidan är en prototyp, så inget funkar';
        notification.classList.add('notification');
        setTimeout(() => {
            notification.innerText = '';
            notification.classList.remove('notification');
        }, 2000);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function() {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(function(link) {
            link.addEventListener("click", function() {
                navLinks.classList.remove("active");
            });
        });
    } else {
        console.error("menuToggle or navLinks element not found.");
    }
});
