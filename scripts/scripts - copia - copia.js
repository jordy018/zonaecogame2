document.addEventListener('DOMContentLoaded', function () {
   var imagenes = document.querySelectorAll('.imagen');
   var botonIniciar = document.getElementById('iniciarJuego');

   // Función para obtener una opción aleatoria
   var opcionAleatoria = function () {
      var opciones = Array.from(imagenes).map(function (imagen) {
         return imagen.getAttribute('data-opcion');
      });
      var indiceAleatorio = Math.floor(Math.random() * opciones.length);
      return opciones[indiceAleatorio];
   };

   // Función para mostrar el resultado
   var mostrarResultado = function () {
      var opcionSeleccionada = opcionAleatoria();
      alert('La ruleta ha seleccionado automáticamente: ' + opcionSeleccionada);
   };

   // Agrega un evento de clic al botón para iniciar manualmente el juego
   botonIniciar.addEventListener('click', function () {
      mostrarResultado();
   });

   // Simula la selección automática después de un tiempo (por ejemplo, 3 segundos)
   setTimeout(function () {
      mostrarResultado();
   }, 3000); // Cambia este valor según tus preferencias
});

