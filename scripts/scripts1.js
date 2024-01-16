function playAudio() {
   var audio = document.getElementById('sonido');
   audio.play();

   // Agrega un evento para redirigir después de que termine la reproducción del audio
   audio.addEventListener('ended', function () {
      window.location.href = 'dado.html';
   });
}

// Asegúrate de que el evento de clic esté siendo desencadenado directamente por el usuario
document.getElementById('imagenConAudio').addEventListener('click', playAudio);
