document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("themeButton");
  const themeIcon = document.getElementById("themeIcon");

  if (themeButton && themeIcon) {
    themeButton.addEventListener("click", () => {
      const body = document.querySelector(
        themeButton.getAttribute("data-bs-target")
      );

      if (!body) return;

      const currentTheme = body.getAttribute("data-bs-theme");

      if (currentTheme === "light") {
        body.setAttribute("data-bs-theme", "dark");
        themeIcon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
      } else {
        body.setAttribute("data-bs-theme", "light");
        themeIcon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
      }
    });
  }

  const logIn = document.getElementById("logInModal");
  const myInput = document.getElementById("typeEmailX");
  const openModalButton = document.querySelector(
    '[data-bs-target="#logInModal"]'
  );

  if (logIn && myInput) {
    logIn.addEventListener("shown.bs.modal", () => {
      myInput.focus();
    });

    logIn.addEventListener("hide.bs.modal", () => {
      if (document.activeElement) {
        document.activeElement.blur();
      }

      if (openModalButton) {
        setTimeout(() => {
          openModalButton.focus();
        }, 0);
      }
    });
  }

  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  const appendAlert = (message, type) => {
    if (!alertPlaceholder) return;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div class="alert alert-${type} alert-dismissible" role="alert">
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
    alertPlaceholder.append(wrapper);
  };

  const alertTrigger = document.getElementById("liveAlertBtn");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      appendAlert("Nice, you sent a message!", "success");
    });
  }
});

function toggleHeart(button) {
  const icon = button.querySelector("i");
  if (!icon) return;

  if (icon.classList.contains("bi-suit-heart")) {
    icon.classList.replace("bi-suit-heart", "bi-suit-heart-fill");
  } else {
    icon.classList.replace("bi-suit-heart-fill", "bi-suit-heart");
  }
}
