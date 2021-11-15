/**
 * Used for image slides
 */

var slideIndex = 1;
showSlides(slideIndex, "p1Slides");
showSlides(slideIndex, "p2Slides");

// Next/previous controls
function plusSlides(n, cn) {
  showSlides((slideIndex += n), cn);
}

// Thumbnail image controls
function currentSlide(n, cn) {
  showSlides((slideIndex = n), cn);
}

function showSlides(n, cn) {
  var i;
  var slides = document.getElementsByClassName(cn ? cn : "slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/**
 * End Of Slides
 */
