function mostrarMenuDireto() {
  const splash = document.getElementById("splash");
  const menu = document.getElementById("menu");
  const site = document.getElementById("site");

  if (splash) {
    splash.style.display = "none";
  }

  if (menu) {
    menu.classList.remove("hidden");
    menu.style.display = "block";
  }

  if (site) {
    site.classList.remove("hidden");
    site.style.display = "block";
  }
}

function entrarJogo() {
  sessionStorage.setItem("arenaEntrou", "true");
  mostrarMenuDireto();
}

function entrar() {
  sessionStorage.setItem("arenaEntrou", "true");
  mostrarMenuDireto();
}

function iniciarJogo() {
  const menu = document.getElementById("menu");
  const game = document.getElementById("game");

  if (menu) {
    menu.style.display = "none";
  }

  if (game) {
    game.style.display = "block";
  }

  if (typeof startGame === "function") {
    startGame();
  }
}

window.addEventListener("load", function () {
  const entrou = sessionStorage.getItem("arenaEntrou");

  if (entrou === "true") {
    mostrarMenuDireto();
  }
});