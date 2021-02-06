const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});
document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = [
  "#6495ed",
  "#7fffd4",
  "#ffa07a",
  "#d7f7b2",
  " #f08080",
  "#afeeee",
];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  item.style.cssText = `background-color:${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };

  // IMAGE SLIDER =====================================

  var slides = document.querySelector(".slider-items").children;
  var nextSlide = document.querySelector(".right-slide");
  var prevSlide = document.querySelector(".left-slide");
  var totalSlides = slides.length;
  var index = 0;

  nextSlide.onclick = function () {
    next("next");
  };
  prevSlide.onclick = function () {
    next("prev");
  };

  function next(direction) {
    if (direction == "next") {
      index++;
      if (index == totalSlides) {
        index = 0;
      }
    } else {
      if (index == 0) {
        index = totalSlides - 1;
      } else {
        index--;
      }
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
  }

  // COOKIE ===========================================
  a = document.cookie;
  while (a != "") {
    while (a.substr(0, 1) == " ") {
      a = a.substr(1, a.length);
    }
    cn = a.substring(0, a.indexOf("="));

    if (a.indexOf(";") != -1) {
      cw = a.substring(a.indexOf("=") + 1, a.indexOf(";"));
    } else {
      cw = a.substr(a.indexOf("=") + 1, a.length);
    }
    if (cn == "cookie") {
      r = cw;
    }
    i = a.indexOf(";") + 1;
    if (i == 0) {
      i = a.length;
    }
    a = a.substring(i, a.length);
  }
  if (r == "1") document.getElementById("cookie").style.display = "none";
});
