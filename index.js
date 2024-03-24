document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("themeButton");
  const themeIcon = document.getElementById("themeIcon");

  themeButton.addEventListener("click", () => {
    const body = document.querySelector(
      themeButton.getAttribute("data-bs-target")
    );
    const currentTheme = body.getAttribute("data-bs-theme");

    if (currentTheme === "light") {
      body.setAttribute("data-bs-theme", "dark");
      themeIcon.classList.remove("bi-sun-fill");
      themeIcon.classList.add("bi-moon-stars-fill");
    } else {
      body.setAttribute("data-bs-theme", "light");
      themeIcon.classList.remove("bi-moon-stars-fill");
      themeIcon.classList.add("bi-sun-fill");
    }
  });
});

const logIn = document.getElementById("logIn");
const myInput = document.getElementById("myInput");

logIn.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

// För alertrutan
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

//
const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you send me a message!", "success");
  });
}

// "Spara"-knapp
function toggleHeart() {
  var heartIcon = document.getElementById("heartIcon");
  if (heartIcon.classList.contains("bi-suit-heart")) {
    heartIcon.classList.remove("bi-suit-heart"); // Ta bort solid hjärtikon klass
    heartIcon.classList.add("bi-suit-heart-fill"); // Lägg till fylld hjärtikon klass
  } else {
    heartIcon.classList.remove("bi-suit-heart-fill"); // Ta bort fylld hjärtikon klass
    heartIcon.classList.add("bi-suit-heart"); // Lägg till solid hjärtikon klass
  }
}
