// SHOW Y HIDDEN
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu Shown
// validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
// validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

//TABS ABOUT ME
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ACCORDION EDUCATION TAB
const educationContent = document.getElementsByClassName("education__content"),
  educationHeader = document.querySelectorAll(".education__header");

function toggleeducation() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < educationContent.length; i++) {
    educationContent[i].className = "education__content education__close";
  }
  if (itemClass === "education__content education__close") {
    this.parentNode.className = "education__content education__open";
  }
}

educationHeader.forEach((el) => {
  el.addEventListener("click", toggleeducation);
});

// About ME IMAGE ANIMATION
let images = [
  "./assets/collage/1.jpg",
  "./assets/collage/2.jpg",
  "./assets/collage/3.jpg",
  "./assets/collage/4.jpg",
  "./assets/collage/5.png",
  "./assets/collage/6.png",
  "./assets/collage/7.png",
  "./assets/collage/8.png",
  "./assets/collage/9.jpg",
  "./assets/collage/10.jpg",
  "./assets/collage/11.jpg",
  "./assets/collage/12.jpg",
  "./assets/collage/13.jpg",
  "./assets/collage/14.jpg",
  "./assets/collage/15.jpg",
  "./assets/collage/16.jpg",
];

let imageElements = [];

for (let i = 1; i <= images.length; i++) {
  imageElements.push(document.getElementById("image" + i));
}

setInterval(function () {
  imageElements.forEach((imageElement, index) => {
    let rnd = Math.floor(Math.random() * images.length);
    let randomIntervals = [2100, 2400, 2700, 3000, 3300, 3600, 3900, 4200];
    //   2100, 2400, 2700, 3000, 3300, 3600, 3900, 4200, 4500, 4800, 5000,
    // ];
    let randomInterval =
      randomIntervals[Math.floor(Math.random() * randomIntervals.length)]; // Randomly choose one of the intervals
    setTimeout(function () {
      imageElement.classList.add("fade-out");
      setTimeout(function () {
        imageElement.src = images[rnd];
        imageElement.classList.remove("fade-out");
      }, 2000); // Transition time remains 2s for all images
    }, randomInterval);
  });
}, 5000); // Set interval time to the maximum possible interval, 5000ms, so that at least one image changes in every interval

// roadmap MODAL
const modalViews = document.querySelectorAll(".roadmap__modal"),
  modalBtns = document.querySelectorAll(".roadmap__tile-button"),
  modalCloses = document.querySelectorAll(".roadmap__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// CHANGE BACKGROUND HEADER
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL TOP
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
