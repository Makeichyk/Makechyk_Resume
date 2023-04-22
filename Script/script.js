"use strict";

// Progress bar
const progressBars = document.querySelectorAll(".progress"),
  skillsClasses = ["html", "css", "js", "react"],
  skillsContainer = document.querySelector(".skills-container");

function fillProgressBars(arr) {
  progressBars.forEach((item, i) => item.classList.add(`${arr[i]}`));
}

function showSkillsContainer() {
  skillsContainer.classList.add("show");
  skillsContainer.classList.remove("hide");
  let timerProgressBars = setTimeout(fillProgressBars, 1500, skillsClasses);
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 200) {
    showSkillsContainer();
  }
});

// portfolio slider

const arrows = document.querySelectorAll(".arrow-container");
const portfolioLinks = document.querySelector(".portfolio-links-container");
const imgArr = portfolioLinks.querySelectorAll("img");

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
  console.log(step);
}

function slideLeft() {
  if(step == 1){
    imgArr[step - 1].classList.toggle("hideImg");
    step = imgArr.length;
    imgArr[step - 1].classList.toggle("hideImg");
  }else{ 
    imgArr[step - 1].classList.toggle("hideImg");
    imgArr[step - 2].classList.toggle("hideImg");
    step--;
  }

  console.log(step);
}

arrows[1].addEventListener("click", slideRight);
arrows[0].addEventListener("click", slideLeft);
slideRight();
