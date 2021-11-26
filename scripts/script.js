/**
 * Turns a string with a px to a number
 * @param {String} size
 * @returns The number
 */
const removePX = (size) => Number.parseInt(size.substr(0, size.length - 2));

let headerFlag = false;

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

/**
 * scroll header
 */
const headerScrollFunction = (headerSize) => {
  let flag =
    document.getElementById("classWrapper").scrollTop > removePX(headerSize) ||
    document.documentElement.scrollTop > removePX(headerSize);
  if (flag && !headerFlag) {
    document.documentElement.style.setProperty(
      "--header-before-size",
      headerSize
    );
    headerFlag = true;
  } else if (!flag && headerFlag) {
    document.documentElement.style.setProperty("--header-before-size", "0px");
    headerFlag = false;
  }
};
/**
 * End of scroll header
 */

//Sets the headerScroll function to trigger when the classWrapper div scrolls
document.getElementById("classWrapper").onscroll = () =>
  headerScrollFunction(
    getComputedStyle(document.getElementById("header")).getPropertyValue(
      "height"
    )
  );

document.onload = headerScrollFunction(
  getComputedStyle(document.getElementById("header")).getPropertyValue("height")
);
