const colorSelector = document.getElementById("colorSelector");

colorSelector.addEventListener("input", function (e) {
  document.body.style.backgroundColor = colorSelector.value;
});
