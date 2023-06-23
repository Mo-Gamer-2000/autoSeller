let menubar = document.querySelector("#menubar");
let navbar = document.querySelector(".navbar");

menubar.onclick = () => {
  menubar.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  menubar.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

document.querySelector("#login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
};

document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".home-parallax").forEach((element) => {
    let speed = element.getAttribute("data-speed");

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    element.style.transform = `translateX(${y}px) translateX(${x}px)`;
  });
};

document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".home-parallax").forEach((element) => {
    element.style.transform = `translateX(0px) translateX(0px)`;
  });
};

let wrapper = document.querySelector(".wrapper-box");
let activeBox = wrapper.querySelectorAll(".box");
let activeLabel = document
  .querySelector(".activeCircle")
  .querySelectorAll(".fa-circle");
let nextBtn = document.querySelector("#nextBtn");
let preBtn = document.querySelector("#preBtn");

let indexNo = 0;

nextBtn.onclick = () => {
  indexNo++;
  changeBox();
};

preBtn.onclick = () => {
  indexNo--;
  changeBox();
};

let changeBox = () => {
  if (indexNo > activeBox.length - 1) {
    indexNo = 0;
  } else if (indexNo < 0) {
    indexNo - activeBox.length - 1;
  }

  for (let i = 0; i < activeBox.length; i++) {
    if (i === indexNo) {
      activeBox[i].classList.add("active");
      activeLabel[i].classList.add("fa-solid");

      if (window.screen.width > 768) {
        wrapper.style.transform = `translateX(${indexNo * -250}px)`;
      }
    } else {
      activeBox[i].classList.remove("active");
      activeLabel[i].classList.remove("fa-solid");
    }
  }
};

let fWrapper = document.querySelector(".featured-wrapper-box");
let fActBox = fWrapper.querySelectorAll(".box");
let fActLabel = document
  .querySelector(".fActCircle")
  .querySelectorAll(".fa-circle");
let fNextBtn = document.querySelector("#fNextBtn");
let fPreBtn = document.querySelector("#fPreBtn");

let fIndex = 0;

fNextBtn.onclick = () => {
  fIndex++;
  fChangeBox();
};

fPreBtn.onclick = () => {
  fIndex--;
  fChangeBox();
};

let fChangeBox = () => {
  if (fIndex > fActBox.length - 1) {
    fIndex = 0;
  } else if (fIndex < 0) {
    fIndex - fActBox.length - 1;
  }

  for (let i = 0; i < fActBox.length; i++) {
    if (i === fIndex) {
      fActBox[i].classList.add("active");
      fActLabel[i].classList.add("fa-solid");

      if (window.screen.width > 768) {
        fWrapper.style.transform = `translateX(${fIndex * -21}vw)`;
      }
    } else {
      fActBox[i].classList.remove("active");
      fActLabel[i].classList.remove("fa-solid");
    }
  }
};

let rWrapper = document.querySelector(".review-wrapper-box");
let rActBox = rWrapper.querySelectorAll(".box");
let rActLabel = document
  .querySelector(".rActCircle")
  .querySelectorAll(".fa-circle");
let rNextBtn = document.querySelector("#rNextBtn");
let rPreBtn = document.querySelector("#rPreBtn");

let rIndex = 0;

rNextBtn.onclick = () => {
  rIndex++;
  rChangeBox();
};

rPreBtn.onclick = () => {
  rIndex--;
  rChangeBox();
};

let rChangeBox = () => {
  if (rIndex > rActBox.length - 1) {
    rIndex = 0;
  } else if (rIndex < 0) {
    rIndex - rActBox.length - 1;
  }

  for (let i = 0; i < rActBox.length; i++) {
    if (i === rIndex) {
      rActBox[i].classList.add("active");
      rActLabel[i].classList.add("fa-solid");

      if (window.screen.width > 768) {
        rWrapper.style.transform = `translateX(${rIndex * -20}vw)`;
      }
    } else {
      rActBox[i].classList.remove("active");
      rActLabel[i].classList.remove("fa-solid");
    }
  }
};
