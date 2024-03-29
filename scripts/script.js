/**
 * Turns a string with a px to a number
 * @param {String} size
 * @returns The number
 */
const removePX = (size) => Number.parseInt(size.substr(0, size.length - 2));

const getTopByID = (id) =>
  document.getElementById(id).getBoundingClientRect().top;
const getBottomByID = (id) =>
  document.getElementById(id).getBoundingClientRect().bottom;

let headerFlag = false;
let aboutMeFlag = false;
let skillsFlag = false;
let projectsFlag = false;

/**
 * used for show/hide project div
 */
function showReactCollection() {
  document.getElementById("collectionAppReact").classList.remove("hideDiv");
  document.getElementById("collectionAppReact").classList.add("showDiv");
  document.getElementById("slideShow1").classList.add("showSlideShow");
  document.getElementById("slideShow1").classList.remove("hideSlideShow");
  document.getElementById("collectionAppDotnet").classList.remove("showDiv");
  document.getElementById("collectionAppDotnet").classList.add("hideDiv");
  document.getElementById("slideShow1a").classList.remove("showSlideShow");
  document.getElementById("slideShow1a").classList.add("hideSlideShow");
}
function showDotnetCollection() {
  document.getElementById("collectionAppReact").classList.remove("showDiv");
  document.getElementById("collectionAppReact").classList.add("hideDiv");
  document.getElementById("slideShow1").classList.add("hideSlideShow");
  document.getElementById("slideShow1").classList.remove("showSlideShow");
  document.getElementById("collectionAppDotnet").classList.remove("hideDiv");
  document.getElementById("collectionAppDotnet").classList.add("showDiv");
  document.getElementById("slideShow1a").classList.add("showSlideShow");
  document.getElementById("slideShow1a").classList.remove("hideSlideShow");
}
document
  .getElementById("showDotnetButton")
  .addEventListener("click", showDotnetCollection);
document
  .getElementById("showReactButton")
  .addEventListener("click", showReactCollection);
/**
 * Used for image slides
 */

var slideIndex = 1;
showSlides(slideIndex, "p1Slides", "slide1Pos");
showSlides(slideIndex, "p1aSlides", "slide1aPos");

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

/**
 * Makes the slideshows bigger/smaller
 */
const bigScreen = (id) => {
  console.log(id);
  document.getElementById(id).style.setProperty("width", "100%");
  document.getElementById(id).style.setProperty("height", "100%");
  document.getElementById(id).style.setProperty("max-width", "100%");
  document.getElementById(id + "Big").style.setProperty("display", "none");
  document.getElementById(id + "Small").style.setProperty("display", "block");
};
const smallScreen = (id) => {
  console.log(id);
  document.getElementById(id).style.setProperty("width", "auto");
  document.getElementById(id).style.setProperty("height", "auto");
  document.getElementById(id).style.setProperty("max-width", "30%");
  document.getElementById(id + "Big").style.setProperty("display", "block");
  document.getElementById(id + "Small").style.setProperty("display", "none");
};
/**
 * End
 */
/**
 * Makes the sections slide in
 */
const getSlidePos = () =>
  Math.max(0.8 * window.innerHeight, window.innerHeight - 300);
const slideInAboutMe = (id) => {
  let flag = getTopByID("aboutMeMarker") < getSlidePos();
  if (flag && !aboutMeFlag) {
    document.getElementById(id).style.left = "0%";
    aboutMeFlag = true;
  }
  if (!flag && aboutMeFlag) {
    document.getElementById(id).style.left = "-100%";
    aboutMeFlag = false;
  }
};
const slideInSkills = (id) => {
  let flag = getTopByID("mySkillsMarker") < getSlidePos();
  if (flag && !skillsFlag) {
    document.getElementById(id).style.right = "0%";

    skillsFlag = true;
  }
  if (!flag && skillsFlag) {
    document.getElementById(id).style.right = "-100%";
    skillsFlag = false;
  }
};
const slideInProjects = (id) => {
  let flag = getTopByID("myProjects") < getSlidePos();
  if (flag && !projectsFlag) {
    document.getElementById(id).style.left = "0%";
    projectsFlag = true;
  }
  if (!flag && projectsFlag) {
    document.getElementById(id).style.left = "-100%";
    projectsFlag = false;
  }
};
/**
 * End
 */

//Slides a div in
const slideInLinkLeft = (id) => (document.getElementById(id).style.left = "0");
const slideOutLinkLeft = (id) =>
  (document.getElementById(id).style.left = "-100vw");

const slideInLinkRight = (id) =>
  (document.getElementById(id).style.right = "0");

const slideOutLinkRight = (id) =>
  (document.getElementById(id).style.right = "-100vw");

//End

const scrollFunction = () => {
  headerScrollFunction(
    getComputedStyle(document.getElementById("header")).getPropertyValue(
      "height"
    )
  );
  slideInAboutMe("aboutMeSlideSection");
  slideInSkills("skillsSlideSection");
  slideInProjects("projectsSlideSection");
  let element = document.getElementById("bg-mask");
  element.classList.add("bg-mask-hide");
};

//Sets the headerScroll function to trigger when the classWrapper div scrolls
document.getElementById("classWrapper").onscroll = () => scrollFunction();

document.onload = scrollFunction();
