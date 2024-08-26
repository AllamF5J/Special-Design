/** @format */

// ! Making a Scroll Bar in the Bottom in Navbar
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

// ! Skills Progress Bar Fill When Appear
const skills = document.querySelector(".skills");
const allSkills = document.querySelectorAll(".skill-box .skill-progress span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop - 450) {
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  } else {
    allSkills.forEach((skill) => {
      skill.style.width = "0";
    });
  }
});

// ! Making Scroll To Top Button Visible
const btn = document.getElementById("top");
window.addEventListener("scroll", () => {
  window.scrollY >= 2200
    ? (btn.style.right = "20px")
    : (btn.style.right = "-1000px");
});

document.querySelectorAll(".colors-list li").forEach((element) => {
  const color = element.getAttribute("data-color");
  element.style.backgroundColor = color;
});
