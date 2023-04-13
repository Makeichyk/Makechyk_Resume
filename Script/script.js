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

window.addEventListener(
  "scroll",
  function () {
    if (window.pageYOffset >= 200) {
      showSkillsContainer();
    }
  }
);
