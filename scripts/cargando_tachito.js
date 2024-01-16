document.addEventListener("DOMContentLoaded", function(event) {
  iniciarCarga();
});

function iniciarCarga() {
  var progressBar = document.querySelector('.progress-bar');
  var sabiasQueTexto = document.getElementById('sabias-que-texto');
  var sabiasQue = [
    "El agua cubre aproximadamente el 71% de la superficie terrestre.",
    "El sol es una estrella y representa alrededor del 99.86% de la masa del sistema solar.",
    "El reciclaje de vidrio ayuda a reducir las emisiones de gases de efecto invernadero.",
    "El reciclaje es una forma de participar en la protección del medio ambiente.",
    "La capa de ozono nos protege de los rayos ultravioleta del sol.",
    "El ADN contiene toda la información genética de un organismo.",
    "El reciclaje puede ahorrar grandes cantidades de energía en comparación con la producción de nuevos materiales. Por ejemplo, reciclar una lata de aluminio ahorra suficiente energía como para alimentar un televisor durante tres horas.",
    "La Tierra tiene aproximadamente 4.5 mil millones de años."
  ];

  var sabiaQueAleatorio = sabiasQue[Math.floor(Math.random() * sabiasQue.length)];
  sabiasQueTexto.textContent = sabiaQueAleatorio;

  var progress = 0;
  var progressInterval = setInterval(function() {
    progress += 1;
    progressBar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(progressInterval);
      mostrarSabiasQue();
      redirectToPage();
    }
  }, 40);
}

function mostrarSabiasQue() {
  var sabiasQueElemento = document.querySelector('.sabias-que');
  sabiasQueElemento.style.visibility = 'visible';
}

function redirectToPage() {
  window.location.href = 'juego_tachito.html';
}