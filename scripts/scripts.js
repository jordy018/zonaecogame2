 document.addEventListener('DOMContentLoaded', function () {
   var imagenes = document.querySelectorAll('.juego img');
   var botonIniciar = document.getElementById('iniciarJuego');
   var resultadoContainer = document.getElementById('resultadoContainer');
   var sonido = document.getElementById('sonido');

   // Función para obtener una opción aleatoria
   var opcionAleatoria = function () {
      var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
      return imagenes[indiceAleatorio];
};

   // Función para mostrar el resultado y reproducir el sonido
   var mostrarResultado = function () {
      var opcionSeleccionada = opcionAleatoria();
      var resultadoImagen = document.getElementById('resultadoImagen');
      var resultadoNombre = document.getElementById('resultadoNombre');

      // Muestra la imagen y el nombre
      resultadoImagen.src = opcionSeleccionada.src; 
      resultadoNombre.textContent = opcionSeleccionada.parentElement.getAttribute('data-opcion');
      resultadoContainer.style.display = 'flex';

      // Reproduce el sonido
      sonido.play();

      // Oculta la imagen y el nombre después de 7 segundos
      setTimeout(function () {
         resultadoContainer.style.display = 'none';
      }, 9000);
   };

   // Agrega un evento de clic al botón para iniciar manualmente el juego
   botonIniciar.addEventListener('click', function () {
      mostrarResultado();
   });
});

   document.addEventListener('DOMContentLoaded', function () {
   var h3Element = document.querySelector('.color-change');
   var starElement = document.getElementById('star');

   starElement.addEventListener('animationiteration', function () {
      // Cambiar el color del h3 al final de cada iteración de la animación
      h3Element.style.color = getRandomColor();
   });
});

function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

