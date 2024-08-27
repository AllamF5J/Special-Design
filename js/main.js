/** @format */

// ! Check If There's a Color In My Local Storage
let localColor = localStorage.getItem("color_option");
if (localColor !== null) {
  document.documentElement.style.setProperty("--main-color", localColor);

  // ! Check For Active Class
  document.querySelectorAll(".colors-list li").forEach((el) => {
    el.classList.remove("active");

    if (el.dataset.color === localColor) {
      el.classList.add("active");
    }
  });
}

// ! Make a Button To Make a Random Background
const randombg = document.querySelectorAll(".random-backgrounds span");
randombg.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// ! Make a Button To Check If User Need To see a Bullets Or Not.
const bullets = document.querySelectorAll(".bullets-option span");
bullets.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// ! Change A Color Of My All Page
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color_option", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    li.classList.add("active");
  });
});

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
  if (window.scrollY >= skills.offsetTop - 150) {
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
  window.scrollY >= 1000
    ? (btn.style.right = "20px")
    : (btn.style.right = "-1000px");
});

document.querySelectorAll(".colors-list li").forEach((element) => {
  const color = element.getAttribute("data-color");
  element.style.backgroundColor = color;
});

// ! Create A PopUp To My Gallery Section
let img = document.querySelectorAll(".gallery img");
img.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let div = document.createElement("div");
    div.className = "popup-overlay";

    let popUp = document.createElement("div");
    popUp.className = "popUp";

    let popUpImg = document.createElement("img");
    popUpImg.src = ele.src;

    let myButton = document.createElement("button");
    myButton.innerHTML = "x";

    myButton.addEventListener("click", function () {
      div.remove();
      popUp.remove();
    });

    if (ele.alt !== null) {
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(ele.alt);
      imgHeading.appendChild(imgText);
      popUp.appendChild(imgHeading);
    }

    document.body.appendChild(popUp);
    document.body.appendChild(div);
    popUp.appendChild(popUpImg);
    popUp.appendChild(myButton);
  });
});

// ! Change A Random Background To Landing Section
let landingPage = document.querySelector(".landing");
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  let randomNum = Math.floor(Math.random() * imgsArray.length);
  landingPage.style.cssText = `background-image: url("../images/${imgsArray[randomNum]}")`;
}, 10000);

// ! Make A Function To A Setting Box
document.querySelector(".settings-box .toggle-settings").onclick = (ele) => {
  let gear = document.querySelector(".fa-gear");
  gear.classList.toggle("fa-spin");
  let settings = document.querySelector(".settings-box");
  settings.classList.toggle("open");
};
