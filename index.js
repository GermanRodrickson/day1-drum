const A = document.getElementById("A");

document.onkeydown = function (event) {
  event.preventDefault();

  switch (event.keyCode) {
    case 65:
      A.classList.add("active");
      break;
  }
}