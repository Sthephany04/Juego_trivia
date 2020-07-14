//Declaracion de variables
var x = 0;
var y = 0;
var puntuacion = 0;
var preguntas = [];
var respuestas = [];
var resultadoUsuario = [];
var resultadoReal = [];

//Pantalla de inicio
var nombre = document.getElementById('nombrePersona');
var boton = document.getElementById('iniciar');
var mensaje = document.getElementById('mensaje');
boton.addEventListener('click', iniciarJuego);

//Para cambio de pantallas
var pantallaInicial = document.getElementById('pantallaInicial');
var pantalla1 = document.getElementById('pantalla1');
var pantalla2 = document.getElementById('pantalla2');
var pantalla3 = document.getElementById('pantalla3');
var pantalla4 = document.getElementById('pantalla4');
var pantallaResultados = document.getElementById('pantallaResultados')

//Eleccion de tematica
var marvel = document.getElementById('marvel');
marvel.addEventListener('click', marvelInicia);
var dc = document.getElementById('dc');
dc.addEventListener('click', dcInicia);
var volverAJugar = document.getElementById('volverAJugar') 

//Preguntas y respuestas
var mensajePregunta1 = document.getElementById('mensajePregunta1');
var pregunta1 = document.getElementsByName('pregunta1');
var respuesta11 = document.getElementById('respuesta11');
var respuesta12 = document.getElementById('respuesta12');
var respuesta13 = document.getElementById('respuesta13');
var respuesta14 = document.getElementById('respuesta14');

var mensajePregunta2 = document.getElementById('mensajePregunta2');
var pregunta2 = document.getElementsByName('pregunta2');
var respuesta21 = document.getElementById('respuesta21');
var respuesta22 = document.getElementById('respuesta22');
var respuesta23 = document.getElementById('respuesta23');
var respuesta24 = document.getElementById('respuesta24');

var mensajePregunta3 = document.getElementById('mensajePregunta3');
var pregunta3 = document.getElementsByName('pregunta3');
var respuesta31 = document.getElementById('respuesta31');
var respuesta32 = document.getElementById('respuesta32');
var respuesta33 = document.getElementById('respuesta33');
var respuesta34 = document.getElementById('respuesta34');

var resultadoFinal = document.getElementById('resultadoFinal')

function iniciarJuego() {  
  pantallaInicial.style.display="none";
  mensaje.innerHTML="Hola " + nombre.value + " vamos a jugar, elige una categoria";
  pantalla1.style.display="block";
}

//Se toma el elemento de html por el nombre "gelElementsByName" y se ejecuta un evento
for (var i = 0; i < pregunta1.length; i++){
  pregunta1[i].addEventListener('click', function(){
    for(var i = 0; i<pregunta1.length; i++){
      if(pregunta1[i].checked){
        resultadoUsuario[0] = pregunta1[i].value; 
      }
    }
    console.log(resultadoUsuario[0]);   
    siguientePregunta(mensajePregunta2, respuesta21, respuesta22, respuesta23, respuesta24, pantalla3)}); 
}

for(var i = 0; i < pregunta2.length; i++){
  pregunta2[i].addEventListener('click', function(){
    for(var i = 0; i<pregunta2.length; i++){
      if(pregunta2[i].checked){
        resultadoUsuario[1] = pregunta2[i].value; 
      }
    }
    console.log(resultadoUsuario[1]); 
    siguientePregunta(mensajePregunta3, respuesta31, respuesta32, respuesta33, respuesta34, pantalla4)}); 
}

for(var i = 0; i < pregunta3.length; i++){
  pregunta3[i].addEventListener('click', function(){
    for(var i = 0; i<pregunta3.length; i++){
      if(pregunta3[i].checked){
        resultadoUsuario[2] = pregunta3[i].value; 
      }
    }
    console.log(resultadoUsuario[2]);  
    resultados()}); 
}

//funcion con preguntas, respuestas y resultados marvel
function marvelInicia(){
  preguntas = [
    'En cuantas peliculas de Marvel aparece Iron Man?',
    'En que orden obtiene Thanos las gemas del infinito?',
    'Cual es el verdadero nombre de Black Widow?'
  ];
  respuestas = [
    '6',
    '10',
    '8',
    '5',
    'Espacio, mente, poder, alma, tiempo, realidad',
    'Realidad, poder, mente, alma, espacio, tiempo',
    'Poder, espacio, realidad, mente, tiempo, alma',
    'Poder, espacio, realidad, alma, tiempo, mente',
    'Natasha Alianovna Romanoff',
    'Natasha Romanoff',
    'Natalia Alianovna Romanoff',
    'Wanda Ramonaff'
  ];  
  resultadoReal =[
    '2',
    '4',
    '3'
  ];
  siguientePregunta(mensajePregunta1, respuesta11, respuesta12, respuesta13, respuesta14, pantalla2);
}

//funcion con preguntas, respuestas y resultados dc
function dcInicia(){
  preguntas = [
    'Que actor dio vida a Superman por primera vez?',
    'Cual es el nombre de la mama de la Mujer Maravilla?',
    'Cuantos actores han dado vida al jocker en el cine?'
  ];
  respuestas = [
    'George Reeves',
    'Christopher Reeve',
    'Kirk Alyn',
    'Keanu Reeves',
    'Hippolyta',
    'Antiope',
    'Amazona',
    'Themyscira',
    '2',
    '4',
    '3',
    '5'
  ];
  resultadoReal =[
    '3',
    '1',
    '2'
  ];  
  siguientePregunta(mensajePregunta1, respuesta11, respuesta12, respuesta13, respuesta14, pantalla2);
}

//funcion para la seleccion de preguntas y respuestas
function siguientePregunta(mensajep, res1, res2, res3, res4, pantalla) { 
  mensajep.innerHTML = preguntas[x];
  x += 1;  
  res1.innerHTML = respuestas[y];
  y += 1;
  res2.innerHTML = respuestas[y];
  y += 1;
  res3.innerHTML = respuestas[y];
  y += 1;
  res4.innerHTML = respuestas[y];
  y += 1;
  pantallaInicial.style.display = "none";
  pantalla1.style.display = "none";
  pantalla2.style.display = "none";
  pantalla3.style.display = "none";
  pantalla4.style.display = "none";
  pantalla.style.display = "block";
}

//funcion que muestra los resultados
function resultados() {
  pantalla4.style.display = 'none';
  pantallaResultados.style.display = 'block';
  for (var i = 0; i < resultadoUsuario.length; i++) {
    if (resultadoUsuario[i] == resultadoReal[i]) {
      puntuacion += 100;
    }    
  } 
  if (puntuacion == 300) {
    resultadoFinal.innerHTML='Tu resultado fue perfecto!! ' + puntuacion + ' puntos.';
  } else {
    resultadoFinal.innerHTML='Tu resultado no fue el esperado es ' + puntuacion + ' puntos. Sigue intenando!';
  }
  volverAJugar.addEventListener('click', jugarDeNuevo);
 }

 function jugarDeNuevo () {
   pantallaResultados.style.display = 'none';
   pantalla1.style.display = 'block';
   x = 0;
   y = 0;
   puntuacion = 0;
   preguntas = [];
   respuestas = [];
   resultadoUsuario = [];
   resultadoReal = [];
   
 }