const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  loader.querySelector("button").classList.add("show");
});
setTimeout(function () {
  loader.querySelector("button").classList.add("show");
}, 14000);
function start() {
  loader.style.display = "none";
  playMusic();
}
const music = document.getElementById("music");
function playMusic() {
  if (music.paused) {
    music.play();
  }
}
