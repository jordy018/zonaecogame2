const timeElement = document.getElementById("time");
const correctScoreElement = document.getElementById("correct-score");
const incorrectScoreElement = document.getElementById("incorrect-score");
const houseElement = document.getElementById("house");

let timeLeft = 30;
let correctScore = 0;
let incorrectScore = 0;
let gameEnded = false;

function updateTimer() {
  timeElement.textContent = "" + timeLeft;

  if (timeLeft === 0 && !gameEnded) {
    endGame();
  } else {
    timeLeft--;
    setTimeout(updateTimer, 1000);
  }
}

function endGame() {
  gameEnded = true;
  let message;
  if (correctScore > incorrectScore) {
    message = "¡Ganaste!";
  } else if (correctScore < incorrectScore) {
    message = "Perdiste";
  } else {
    message = "Empate";
  }

  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message");

  const messageContainer = document.getElementById("message-container");
  messageContainer.appendChild(messageElement);
  messageContainer.style.visibility = "visible"; // Mostrar el contenedor del mensaje

  setTimeout(function() {
    messageContainer.removeChild(messageElement);
    messageContainer.style.visibility = "hidden"; // Ocultar el contenedor del mensaje
    window.location.href = 'login_tachito.html';
  }, 4000); // Espera 4 segundos antes de redirigir al login
}

function startTimer() {
  updateTimer();
}

function incrementCorrectScore() {
  correctScore++;
  correctScoreElement.textContent = "Correctos: " + correctScore;
  if (correctScore === 8) {
    endGame();
  }
}

function incrementIncorrectScore() {
  incorrectScore++;
  incorrectScoreElement.textContent = "Incorrectos: " + incorrectScore;
  if (incorrectScore === 8) {
    endGame();
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggableElement = document.getElementById(data);
  const targetElement = event.target;

  document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startTimer);
    updateTimer();
  });
  
/*Es para la basura*/
  if (targetElement.classList.contains("tacho")) {
    const targetId = targetElement.id;
    const draggableId = draggableElement.id;

    if (
      (targetId === "tacho-organico" && draggableId.includes("organico")) ||
      (targetId === "tacho-plastico" && draggableId.includes("plastico")) ||
      (targetId === "tacho-vidrio" && draggableId.includes("vidrio")) ||
      (targetId === "tacho-metales" && draggableId.includes("metales")) ||
      (targetId === "tacho-papel" && draggableId.includes("papel")) ||
      (targetId === "tacho-peligroso" && draggableId.includes("peligroso"))
    ) {
      incrementCorrectScore();
    } else {
      incrementIncorrectScore();
    }

    draggableElement.style.display = "none"; // Ocultar la basura

    if (document.getElementsByClassName("basura").length === 0) {
      hideAllTrash();
    }
  }

  event.dataTransfer.clearData();
}

function hideAllTrash() {
  const basuraContainer = document.getElementById("basura");
  const basuraElements = document.getElementsByClassName("basura");

  for (let i = 0; i < basuraElements.length; i++) {
    const basuraElement = basuraElements[i];
    const basuraId = basuraElement.id;

    if (basuraId.includes("2")) {
      basuraContainer.removeChild(basuraElement);
    }
  }
}
function shuffleTrash() {
  const basuraContainer = document.getElementById("basura");
  const basuraElements = document.getElementsByClassName("basura");

  for (let i = basuraElements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    basuraContainer.insertBefore(basuraElements[j], basuraElements[i]);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  shuffleTrash();
});


/*Elimina los elementos de los tachos*/
function hideAllTrash() {
  const basuraContainer = document.getElementById("basura");
  basuraContainer.innerHTML = "";
}

function hideAllTrash() {
  const basuraElements = document.getElementsByClassName("basura");
  const basuraContainer = document.getElementById("basura");
  basuraContainer.style.display = "none";
}
updateTimer();