document.addEventListener('DOMContentLoaded', function() {
  var playButton = document.getElementById('play-button');
  var countdownContainer = document.createElement('div');
  countdownContainer.classList.add('countdown-container');
  document.body.appendChild(countdownContainer);

  var countdown = 15;
  var countdownDisplay = document.createElement('p');
  countdownDisplay.textContent = countdown + 's';
  countdownContainer.appendChild(countdownDisplay);

  var countdownInterval;

  function startCountdown() {
    countdownInterval = setInterval(function() {
      countdown--;
      countdownDisplay.textContent = countdown + 's';

      if (countdown <= 0) {
        clearInterval(countdownInterval);
        window.location.href = 'cargando_tachito.html';
      }
    }, 1000);
  }

  var binImages = document.querySelectorAll('.bin img');
  var flippedImages = ['imagenes/tachito_papel.png', 'imagenes/tachito_plastico.png', 'imagenes/tachito_vidrio.png', 'imagenes/tachito_metal.png', 'imagenes/tachito_organico.png', 'imagenes/tachito_peligroso.png'];

  binImages.forEach(function(image, index) {
    var originalSrc = image.src;
    var flippedSrc = flippedImages[index];

    image.addEventListener('mouseover', function() {
      this.src = flippedSrc;
    });

    image.addEventListener('mouseout', function() {
      this.src = originalSrc;
    });
  });

  var homeIcon = document.querySelector('.home-icon');
  homeIcon.addEventListener('click', function() {
    clearInterval(countdownInterval);
    window.location.href = 'pagina.html'; // Reemplaza 'menu.html' con la URL de tu menú principal
  });

  playButton.addEventListener('click', function() {
    clearInterval(countdownInterval);
    window.location.href = 'cargando_tachito.html'; // Reemplaza 'cargando.html' con la URL a la que deseas redirigir al hacer clic en el botón de reproducción
  });

  startCountdown();
});