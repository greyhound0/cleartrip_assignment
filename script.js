const iconContainer = document.querySelectorAll(".iconContainer");
const icon = document.querySelectorAll(".icon");
const button = document.getElementById("loginButton");

button.addEventListener("click", function () {
  button.classList.add("clicked");
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 300);
});

function changeColor(element) {
  if (element.style.color === "rgb(37, 110, 227)") {
    element.style.color = "black";
  } else {
    element.style.color = "rgb(37, 110, 227)";
  }
}
