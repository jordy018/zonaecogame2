let tiempoRestante = 120; // 2 minutos en segundos
let intervalo;
let juegoIniciado = false;

function iniciarJuego() {
    // Habilitar el segundo botón
    //document.getElementById('boton2').disabled = false;
    if (!juegoIniciado) {
    document.getElementById('boton2').removeAttribute('disabled');
    //document.getElementById('boton2').setAttribute('disabled', 'true');
    document.getElementById('boton3').removeAttribute('disabled');
    juegoIniciado = true;
    iniciarContador();
    }
}

function iniciarContador() {
  intervalo = setInterval(function() {
    tiempoRestante--;
    mostrarTiempoRestante();

    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      document.getElementById('boton2').setAttribute('disabled', 'true');
      //alert('!TIEMPO AGOTADO!');
    } else if (totalQueDebeAcertar === cantidadAcertadas) {
      clearInterval(intervalo);
      //document.getElementById('boton2').setAttribute('disabled', 'true');
      mostrarAlerta('¡FELICITACIONES! ¡GANASTE!');
    }else if (intentosRestantes <= 0) {
        clearInterval(intervalo);
        mostrarAlerta('¡SUERTE LA PRÓXIMA VEZ!');
      }
    cambiarImagenIntentos();
  }, 1000);
}

function mostrarAlerta(mensaje) {
    // Muestra la alerta flotante con el mensaje proporcionado
    var alertaFlotante = document.getElementById('alertaFlotante');
    alertaFlotante.innerText = mensaje;
    alertaFlotante.style.display = 'block';

    // Oculta la alerta después de 3 segundos (puedes ajustar el tiempo)
    setTimeout(function() {
      alertaFlotante.style.display = 'none';
    }, 3000);
  }

function reiniciarJuego() {
    // Reiniciar variables y elementos necesarios
    juegoIniciado = false;
    tiempoRestante = 120;
    document.getElementById('boton1').removeAttribute('disabled');
    //document.getElementById('boton2').setAttribute('disabled', 'true');
    document.getElementById('boton3').setAttribute('disabled', 'true');
    document.getElementById('contador').innerText = 'Tiempo restante: 02:00';
    // También puedes reiniciar otras partes del juego según tus necesidades
}

function cambiarImagenIntentos() {
    
    if (intentosRestantes === 5) {
            document.getElementById("imagenIntentos").src = "imagenes/IMG_1.png"; // Ruta de la imagen para 4 intentos
        } else if (intentosRestantes === 4) {
            document.getElementById("imagenIntentos").src = "imagenes/IMG_2.png"; // Ruta de la imagen para 3 intentos
        } else if (intentosRestantes === 3) {
            document.getElementById("imagenIntentos").src = "imagenes/IMG_3.png"; // Ruta de la imagen para 2 intentos
        } else if (intentosRestantes === 2) {
            document.getElementById("imagenIntentos").src = "imagenes/IMG_4.png"; // Ruta de la imagen para 1 intento
        } else if (intentosRestantes === 1){
            document.getElementById("imagenIntentos").src = "imagenes/IMG_5.png"; // Ruta de la imagen para 0 intentos
        } else {
            document.getElementById("imagenIntentos").src = "imagenes/IMG_6.png"; // Ruta de la imagen para 0 intentos
        }
}

function mostrarTiempoRestante() {
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  document.getElementById('contador').innerText = `Tiempo restante: ${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}
//
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width  = 0;
ctx.canvas.height = 0;

const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];
//



function cargarNuevaPalabra() {
    //alert('¡Botón 2 clicado!');
    // Aquí puedes agregar la lógica que deseas ejecutar cuando se hace clic en el segundo botón
}


        /**/
//Arreglo que contiene las palabras para jugar
let arrayPalabras =["RECICLAR", "REHUSAR", "CUIDAR", "PLANTAR", "BIODEGRADABLE", "OXIGENO"];
//Arreglo que contiene las ayudas de cada palabra
let ayudas = [
    "Lo que te decian en la escuela cuando tenias una botella platica, pista: empieza y termina con R",
    "Cuando tienes un objeto sin usar pero le quieres dar un nuevo uso",
    "Lo que tu mama te decia cuando te dejaba a cargo de tu hermanito",
    "Actividad relacionada con poner semillas en la tierra",
    "Materiales que pueden descomponerse de manera natural y ser absorbidos por el medio ambiente",
    "Los arboles nos brindan...."
]
//variable que guarda la cantidad de palabras ya jugadas
let cantPalabrasJugadas = 0;

//Variable que guarda la cantidad de intentos restantes
let intentosRestantes = 5;

//variable que guarda el indice de la Palabra actual
let posActual;

//arreglo que contiene la palabra actual con la que estoy judando
let arrayPalabraActual = [];

//Cantidad de de letras acertadas por cada jugada
let cantidadAcertadas = 0;

//Arreglo que guarda cada letra en divs
let divsPalabraActual = [];

//Cantidad de palabras que debe acertar en cada jugada.
let totalQueDebeAcertar;

//Funcion que carga la  palabra nueva para jugar
function cargarNuevaPalabra(){
    //Aumento en uno cantidad de palabras jugadas y controlo si llego a su limite
    cantPalabrasJugadas++;
    if(cantPalabrasJugadas>6){
        //volvemos a cargar el arreglo
        arrayPalabras =["RECICLAR", "REHUSAR", "CUIDAR", "PLANTAR", "BIODEGRADABLE", "OXIGENO"];
        ayudas = [
            "Lo que te decian en la escuela cuando tenias una botella platica, pista: empieza y termina con R",
            "Cuando tienes un objeto sin usar pero le quieres dar un nuevo uso",
            "Lo que tu mama te decia cuando te dejaba a cargo de tu hermanito",
            "Actividad relacionada con poner semillas en la tierra",
            "Materiales que pueden descomponerse de manera natural y ser absorbidos por el medio ambiente",
            "Los arboles nos brindan...."
        ]
    }

    //Selecciono una posicion random
    posActual = Math.floor(Math.random()*arrayPalabras.length);

    //Tomamos la palabra nueva
    let palabra = arrayPalabras[posActual];
    //cantidad de letras que tiene esa palabra
    totalQueDebeAcertar = palabra.length;
    //coloco en 0 la cantidad acertadas hata el momento
    cantidadAcertadas = 0;

    //Guardamos la palabra que esta en formato string en un arreglo
    arrayPalabraActual = palabra.split('');

    //limpiamos los contenedores que quedaron cargadas con la palabra anterior
    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";

    //Cargamos la cantidad de divs (letras) que tiene la palabra
    for(i=0;i<palabra.length;i++){
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }

    //Selecciono todos los divs de la palabra
    divsPalabraActual = document.getElementsByClassName("letra");

    //setemos los intentos
    intentosRestantes = 5;
    document.getElementById("intentos").innerHTML = intentosRestantes;

    //Cargamos la ayuda de la pregunta
    document.getElementById("ayuda").innerHTML = ayudas[posActual];

   //elimino el elemento ya seleccionado del arreglo.
    //splice(posActual,1): A partir de la posicon posActual elimino 1 elemento
    arrayPalabras.splice(posActual,1);
    ayudas.splice(posActual,1);

}

//Llamada para cargar la primera palabra del juego
cargarNuevaPalabra();

//Detecto la tecla que el usuario presion
document.addEventListener("keydown", event => {
    //Controlo si la tecla presionada es una letra
    //if(isLetter(event.key)){
    if (juegoIniciado && isLetter(event.key)) {
        //Tomo las letras ya ingresadas hasta el momento
        let letrasIngresadas = document.getElementById("letrasIngresadas").innerHTML;
        //arma un a arreglo con las letras ingresadas
        letrasIngresadas = letrasIngresadas.split('');

        //controlo si la letra presionada ya ha sido ingresada
        if(letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1){
            //variable bandera para saber si la letra ingresada esta en la palabra a descrubir
            let acerto = false;

            //Recorro el arreglo que ocntiene la palabra para verificar si la palabra ingresada esta
            for(i=0;i<arrayPalabraActual.length;i++){
                if(arrayPalabraActual[i] == event.key.toUpperCase()){//acertó
                    divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                    acerto = true;
                    //Aumento en uno la cantidad de letras acertadas 
                    cantidadAcertadas = cantidadAcertadas + 1;
                }
            }

            //Controlo si acerto al menos una letra
            if(acerto==true){
                //controlamos si ya acerto todas
                if(totalQueDebeAcertar == cantidadAcertadas){
                    //asigno a cada div de la palabra la clase pintar para ponerlo en verde cada div
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintar";
                    }
                }
            }else{
                //No acerto, decremento los intentos restantes
                intentosRestantes = intentosRestantes - 1;
                document.getElementById("intentos").innerHTML = intentosRestantes;

                //controlamos si ya acabo todas la oportunidades
                if(intentosRestantes<=0){
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintarError";
                    }
                }
            }

            //agrega la letra ingresada a las letras ya ingresadas que se visualizan
            document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
        }
    }
});


//Funcion que me determina si un caracter es una letra
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

document.getElementById('boton1').addEventListener('click', iniciarJuego);
//document.getElementById('boton2').addEventListener('click', cargarNuevaPalabra);
document.getElementById('boton3').addEventListener('click', reiniciarJuego);
/**/

function irAOtraPagina() {
            // Reemplaza 'otraPagina.html' con la URL de la página a la que deseas ir
            window.location.href = 'https://www.youtube.com/watch?v=DqSBQqj94JU';
        }

