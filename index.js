const a = document.getElementById("A");
const s = document.getElementById("S");
const d = document.getElementById("D");
const audioA = new Audio("./audio/Slap-SoundMaster13-49669815.mp3");

window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const box = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime=0;
  audio.play();
  box.classList.add("active")
})

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