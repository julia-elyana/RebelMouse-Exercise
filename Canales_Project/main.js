'use strict'
// Start at slide 1
var slideIndex = 1;
// Call function that will animate slides
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  // Get all elements with class 'mySlides' (divs containing large images)
  var slides = document.getElementsByClassName("mySlides");
  // Get all elements with class 'demo; (img tags corresponding to thumbnails)
  var dots = document.getElementsByClassName("demo");
  // if we try to display a slide number greater than what we have, reset to the first slide
  if (n > slides.length) {slideIndex = 1}
  // if we try to display an invalid slide number (or 0), display the last slide
  if (n < 1) {slideIndex = slides.length}
  // default to not displaying all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // default to "grey-ing" out all thumbnails
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // take the slide we want to display and make it visible
  slides[slideIndex-1].style.display = "block";
  // take the corresponding thumbnail and make it active
  dots[slideIndex-1].className += " active";
}
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}