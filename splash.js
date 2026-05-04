function entrarJogo() {
  document.getElementById("splash").style.display = "none";
  document.getElementById("menu").classList.remove("hidden");
}

function iniciarJogo() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";

  startGame(); // chama o jogo
}