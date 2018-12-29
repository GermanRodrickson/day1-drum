const a = document.getElementById("A");
const s = document.getElementById("S");
const d = document.getElementById("D");
const audioA = new Audio("./audio/Slap-SoundMaster13-49669815.mp3");

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 65:
      a.classList.add("active");
      // audioA.start();
    break;
    case 83:
      s.classList.add("active");
    break;
    case 68:
      d.classList.add("active");
    break;
  }
}

document.onkeyup = (event) => {
  switch (event.keyCode) {
    case 65:
      a.classList.remove("active");
    break;
    case 83:
      s.classList.remove("active");
    break;
    case 68:
      d.classList.remove("active");
    break;
  }
}