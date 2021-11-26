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
showSlides(slideIndex, "p1Slides", "slide1Pos");
showSlides(slideIndex, "p2Slides", "slide2Pos");

// Next/previous controls
function plusSlides(n, cn, posName) {
  showSlides(
    (document.getElementById(posName).value =
      Number.parseInt(document.getElementById(posName).value) + n),
    cn,
    posName
  );
}

function showSlides(n, cn, posName) {
  console.log(document.getElementById(posName));
  var i;
  var slides = document.getElementsByClassName(cn ? cn : "slides");
  if (n > slides.length) {
    document.getElementById(posName).value = 1;
  }
  if (n < 1) {
    document.getElementById(posName).value = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[document.getElementById(posName).value - 1].style.display = "block";
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
