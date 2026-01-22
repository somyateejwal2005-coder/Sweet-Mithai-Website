// HERO SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// SCROLL
function scrollToMithai(){
  document.getElementById("mithai").scrollIntoView({behavior:"smooth"});
}

// SPECIAL SWEET
function specialSweet(){
  const sweets = ["Kaju Katli","Rasmalai","Gulab Jamun","Jalebi","Gajar Halwa"];
  const random = sweets[Math.floor(Math.random()*sweets.length)];
  document.getElementById("specialText").innerText = "Today's Special: " + random + " 😋";
}
