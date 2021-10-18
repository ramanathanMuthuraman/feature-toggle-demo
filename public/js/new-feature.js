document.addEventListener("DOMContentLoaded", init, false);

async function init() {
  const body = document.querySelector("body");
  const data = { id: sessionStorage.userIdForDemo };
  const showNewButton = await fetch("/feature-flag/color-change-button", {
    method: "GET",
    headers: data,
  }).then((response) => response.json());
  if (showNewButton.isEnabled) {
    const variantName = showNewButton.variant.name;
    const welcomText = document.createElement("div");
    const newButton = document.createElement("button");

    newButton.id = "switch-color";
    newButton.innerHTML = "Switch Color";
    newButton.addEventListener("click", () => {
      if (variantName === "bg-color-change") {
        newButton.style.background = getRandomColor();
      } else {
        newButton.style.color = getRandomColor();
      }
    });

    welcomText.innerHTML = "Click button to toggle color";
    body.appendChild(welcomText);

    body.appendChild(newButton);

    // Taken from the useful reply in: https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
}
