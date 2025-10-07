"use strict";

const progressBars = document.querySelectorAll(".progress"),
  skillsClasses = ["html", "css", "js", "react"],
  skillsContainer = document.querySelector(".skills-container"),
  portfolioSliderTrack = document.querySelector(".portfolio-slider-track"),
  potrfolioSliderContent = document.querySelector(".portfolio-links-container");

let sliderLeftBorder = 0;
let sliderRightBorder = -potrfolioSliderContent.scrollWidth + document.querySelector(".slider-img").width;
let sliderCurr = 0;

function fillProgressBars(skills) {
  progressBars.forEach((item, i) => item.classList.add(`${skills[i]}`));
}

function showSkillsContainer() {
  skillsContainer.classList.add("show");
  skillsContainer.classList.remove("hide");
  const timerProgressBars = setTimeout(fillProgressBars, 500, skillsClasses);
}

const arrows = document.querySelectorAll(".arrow-container"),
  portfolioLinks = document.querySelector(".portfolio-links-container"),
  imgArr = portfolioLinks.querySelectorAll("img");

function slideRight() {
  let step = document.querySelector(".slider-img").width;

  sliderCurr = sliderCurr - step;
  sliderCurr = sliderCurr < sliderRightBorder ? sliderLeftBorder : sliderCurr;

  potrfolioSliderContent.style.transform = `translateX(${sliderCurr}px)`;
}

function slideLeft() {
  let step = document.querySelector(".slider-img").width;

  sliderCurr = sliderCurr + step;
  sliderCurr = sliderCurr > sliderLeftBorder ? sliderRightBorder : sliderCurr;

  potrfolioSliderContent.style.transform = `translateX(${sliderCurr}px)`;
}

arrows[1].addEventListener("click", slideRight);
arrows[0].addEventListener("click", slideLeft);

function updatePageProgressBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let scrolled = (winScroll / height) * 100;

  document.querySelector(".content-progress-bar-progress").style.width = `${scrolled}%`;
}

const sliderInterval = setInterval(slideRight, 2000);

// ALL CONTENT_BLOCKS
const contentBlocks = document.querySelectorAll(".content-block");

function showInViewport() {
  for (let i = 0; i < contentBlocks.length; i++) {
    let rect = contentBlocks[i].getBoundingClientRect();
    if (contentBlocks[0].getBoundingClientRect().y <= 500) {
      showSkillsContainer();
    }

    let windowHeight = window.innerHeight;

    if (rect.y <= windowHeight - 150) {
      contentBlocks[i].classList.remove("hide");
    }
  }
}

contentBlocks.forEach((block) => block.classList.add("hide"));
window.addEventListener("scroll", showInViewport);
window.addEventListener("scroll", updatePageProgressBar);
