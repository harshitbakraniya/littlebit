const navbar = document.querySelector(".header");
let open = true;
let icon = document.querySelector(".main-logo");

icon.addEventListener("click", () => {
  if (open) {
    navbar.classList.add("close");
    open = false;
  } else {
    navbar.classList.remove("close");
    open = true;
  }
});

// dark light mode
let btn = document.querySelector(".btn");
let text = document.querySelector(".dark-light .text");
let dark;
let logoText = document.querySelector(".logo-text");
// change css variable
let root = getComputedStyle(document.documentElement);

btn.addEventListener("click", () => {
  if (dark) {
    btn.classList.remove("active");
    text.innerHTML = "Light Mode";
    logoText.style.color = "#000000";
    document.documentElement.style.setProperty("--primary-color", "#ffffff");
    document.documentElement.style.setProperty("--text", "#000000");
    document.documentElement.style.setProperty(
      "--gray-white",
      "rgba(0, 0, 0, 0.1)"
    );
    document.documentElement.style.setProperty(
      "--gray-content",
      "rgba(0, 0, 0, 0.6)"
    );
    dark = false;
  } else {
    btn.classList.add("active");
    text.innerHTML = "Dark Mode";
    logoText.style.color = "#ffffff";
    document.documentElement.style.setProperty("--primary-color", "#03071e");
    document.documentElement.style.setProperty("--text", "#ffffff");
    document.documentElement.style.setProperty(
      "--gray-white",
      "rgba(255, 255, 255, 0.1)"
    );
    document.documentElement.style.setProperty(
      "--gray-content",
      "rgba(255, 255, 255, 0.4)"
    );
    dark = true;
  }
});

// video player
let card = document.querySelectorAll(".videos-section .card");
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => {
    window.location.href = "./videoPlayer.html";
    dark = false;
  });
}

// menu handle for mobile
let icon_for_mobile = document.querySelector(".icon-for-mobile");
let close_btn = document.querySelector(".close-mobile");

icon_for_mobile.addEventListener("click", () => {
  navbar.classList.add("active-mobile");
});
close_btn.addEventListener("click", () => {
  navbar.classList.remove("active-mobile");
});
