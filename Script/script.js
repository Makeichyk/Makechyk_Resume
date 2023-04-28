"use strict";

const progressBars = document.querySelectorAll(".progress"),
  skillsClasses = ["html", "css", "js", "react"],
  skillsContainer = document.querySelector(".skills-container");

function fillProgressBars(skills) {
  progressBars.forEach((item, i) => item.classList.add(`${skills[i]}`));
}

function showSkillsContainer() {
  skillsContainer.classList.add("show");
  skillsContainer.classList.remove("hide");
  let timerProgressBars = setTimeout(fillProgressBars, 500, skillsClasses);
}

const arrows = document.querySelectorAll(".arrow-container"),
  portfolioLinks = document.querySelector(".portfolio-links-container"),
  imgArr = portfolioLinks.querySelectorAll("img");

let step = 0;

function slideRight() {
  if (step == 0) {
    imgArr[step].classList.toggle("hideImg");
    step++;
  } else if (step >= imgArr.length) {
    imgArr[step - 1].classList.toggle("hideImg");
    imgArr[0].classList.toggle("hideImg");
    step = 1;
  } else {
    imgArr[step - 1].classList.toggle("hideImg");
    imgArr[step].classList.toggle("hideImg");
    step++;
  }
}

function slideLeft() {
  if (step == 1) {
    imgArr[step - 1].classList.toggle("hideImg");
    step = imgArr.length;
    imgArr[step - 1].classList.toggle("hideImg");
  } else {
    imgArr[step - 1].classList.toggle("hideImg");
    imgArr[step - 2].classList.toggle("hideImg");
    step--;
  }
}

arrows[1].addEventListener("click", slideRight);
arrows[0].addEventListener("click", slideLeft);
slideRight();

function updatePageProgressBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (winScroll / height) * 100;

  document.querySelector(
    ".content-progress-bar-progress"
  ).style.width = `${scrolled}%`;
}

// ALL CONTENT_BLOCKS
const contentBlocks = document.querySelectorAll(".content-block");

function showInViewport() {
  for (let i = 0; i < contentBlocks.length; i++) {
    let rect = contentBlocks[i].getBoundingClientRect();
    if (contentBlocks[0].getBoundingClientRect().y <= 500) {
      showSkillsContainer();
    }
    if (rect.y <= 800) {
      contentBlocks[i].classList.remove("hide");
    }
  }
}

function show(){
  console.log(contentBlocks[5].getBoundingClientRect())
}

contentBlocks.forEach((block) => block.classList.add("hide"));
window.addEventListener("scroll", showInViewport);
window.addEventListener("scroll", updatePageProgressBar);
