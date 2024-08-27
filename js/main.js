/** @format */

// ! Global Variable
let flag = true;
let clear;

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

// ! Check If There's a Background In My Local Storage
let localbg = localStorage.getItem("bg-option");
let localbgImg = localStorage.getItem("background");
let landingPage = document.querySelector(".landing");
if (localbg !== null) {
  if (localbg === "true") {
    flag = true;
  } else {
    flag = false;
  }

  // ! Check For Active Class
  document.querySelectorAll(".random-backgrounds span").forEach((sp) => {
    sp.classList.remove("active");
    if (localbg === "true") {
      document
        .querySelector(".random-backgrounds .yes")
        .classList.add("active");
    } else {
      document.querySelector(".random-backgrounds .no").classList.add("active");
      landingPage.style.cssText = `background-image: url("../images/${localbgImg}")`;
    }
  });
}

// ! Check If There's a Bullet Option In My Local Storage
let localbullet = localStorage.getItem("bullet-option");
if (localbullet !== null) {
  if (localbullet === "show") {
    document.querySelector(".bullets-nav").style.cssText = `display: block`;
  } else {
    document.querySelector(".bullets-nav").style.cssText = `display: none`;
  }

  // ! Check For Active Class
  document.querySelectorAll(".bullets-option span").forEach((sp) => {
    sp.classList.remove("active");
    if (localbullet === "show") {
      document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
      document.querySelector(".bullets-option .no").classList.add("active");
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

    if (e.target.dataset.background === "yes") {
      flag = true;
      randomizeImg();
      localStorage.setItem("bg-option", true);
    } else {
      flag = false;
      clearInterval(clear);
      localStorage.setItem("bg-option", false);
    }
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
    localStorage.setItem("bullet-option", e.target.dataset.display);
    if (e.target.dataset.display === "show") {
      document.querySelector(".bullets-nav").style.cssText = `display: block`;
    } else {
      document.querySelector(".bullets-nav").style.cssText = `display: none`;
    }
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
function randomizeImg() {
  if (flag) {
    let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

    clear = setInterval(() => {
      let randomNum = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage =
        'url("images/' + imgsArray[randomNum] + '")';
      localStorage.setItem("background", imgsArray[randomNum]);
    }, 8000);
  }
}
randomizeImg();

// ! Make A Function To A Setting Box
document.querySelector(".settings-box .toggle-settings").onclick = (ele) => {
  let gear = document.querySelector(".fa-gear");
  gear.classList.toggle("fa-spin");
  let settings = document.querySelector(".settings-box");
  settings.classList.toggle("open");
};

// ! Make a Reset Option Buttons
document.querySelector(".reset-options").onclick = () => {
  localStorage.clear();
  location.reload();
};

// ! Make A Toggle Menu
let toggleButton = document.querySelector(".toggle-menu");
toggleButton.onclick = (ele) => {
  let menu = document.querySelector(".links");
  menu.classList.toggle("open");

  // ! Check if the menu is open and toggle the class accordingly
  if (!menu.classList.contains("open")) {
    toggleButton.classList.add("hide-before");
  } else {
    toggleButton.classList.remove("hide-before");
  }
};

// ! Make a Button Change Position In Form When The User Enter All Data..
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitButton");
  const form = document.getElementById("contactForm");

  function moveSubmitButton() {
    const formRect = form.getBoundingClientRect();
    const maxX = formRect.width - submitButton.offsetWidth;
    const maxY = formRect.height - submitButton.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // submitButton.style.position = "absolute";
    submitButton.style.cssText = `position: absolute; width: fit-content`;
    submitButton.style.left = `${randomX}px`;
    submitButton.style.top = `${randomY}px`;
  }

  submitButton.addEventListener("mouseover", (event) => {
    event.preventDefault();

    const allInputs = form.querySelectorAll(".input");
    let allValid = true;

    allInputs.forEach((input) => {
      if (!input.checkValidity()) {
        allValid = false;
      }
    });

    if (allValid) {
      moveSubmitButton();
    }
  });
});
