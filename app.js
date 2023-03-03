var button = document.querySelector("button");
var img = document.querySelector("img");
var h1 = document.querySelector("h1");
var number = 0;

button.onclick = function () {
  img.style.borderColor = "red";
};
h1.onmouseover = function () {
  number = number + 1;
  h1.style.color = "purple";
  h1.innerText = "hello " + number + "x";
};
h1.onmouseleave = function () {
  h1.style.color = "gray";
  h1.innerText = "bye for now";
};
