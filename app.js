let video = document.querySelector('.botonVideo');
console.log(video);
// video.addEventListener("play", function (){
//     console.log("Di play al video");
// });
// video.addEventListener("play", function (){
//     console.log("Di play al video");
//         function ponerColorBody() {
//             let pantalla = document.body;
//             pantalla.style.backgroundColor = pantalla.style.backgroundColor == "lightblue" ? "purple": "lightblue"
//         };
//         ponerColorBody ();
// });
// video.addEventListener("play", function (){
//     console.log("Di play al video");
//     let Temporizador = setInterval(function (){
//             ponerColorBody ();
//         }, 2000);
        
//         function ponerColorBody() {
//             let pantalla = document.body;
//             pantalla.style.backgroundColor = pantalla.style.backgroundColor == "lightblue" ? "purple": "lightblue"
//         };
// });

// video.addEventListener("pause", function (){
//     console.log("Di pausa al video");
// });

// video.addEventListener("seeking", function (){
//     console.log('Se esta viendo una parte del video', this.currentTime);
// });

// video.addEventListener("ended", function (){
//     console.log("Termino el video");
// });

// video.addEventListener("ended", function (){
//     console.log("Termino el video");
//     let decision = confirm("¿Deseas ver de nuevo el video?");
//     console.log(decision);
//     if (decision) {
//         video.play();
//     } else {
//         window.location = "https://www.youtube.com/watch?v=XrsbfrFPATs"
//     }
// });

// Temporizadores o timers

// setInterval setTimeout

// let Temporizador = setInterval(function (){
//     ponerColorBody ();
// }, 2000);

// function ponerColorBody() {
//     let pantalla = document.body;
//     pantalla.style.backgroundColor = pantalla.style.backgroundColor == "lightblue" ? "purple": "lightblue"
// };

// setTimeout(function (){
//     ponerColorBody ();
// },2000);
// function ponerColorBody() {
//     let pantalla = document.body;
//     pantalla.style.backgroundColor = pantalla.style.backgroundColor == "lightblue" ? "purple": "lightblue"
// };

// Arreglos, vectores, Arrays

let array = ["uno", "dos", "tres"];

let array2 = ["cuatro", "cinco", "seis"];
array2[1];

let multidimensional = [array, array2];

multidimensional [0][1];

function alerta() {
    let respuesta;
    let contestar = confirm("Da click en ok o cancelar")
    if (contestar == true) {
        respuesta = "Diste en ok"
    } else {
        respuesta = "Diste en cancelar"
    }
    document.getElementById("confirmar").innerHTML = respuesta;
}
 
let alumno = confirm("¿Eres un alumno?");

alert( alumno );

let prueba = {

    color: "azul",
    
    func: function ( ) {
    
    return this.color;
    
    },
    
};
console.log (prueba.func());

const Maestro = {
    name: "Chantal",
    age: 27,
    job: "Progrmación",
    };
      
const Alumno = {
    name: "Rosa",
    age: 18,
    job: "Alumno",
};
      
function Hola() {
    console.log("Hola, mi nombre es " + this.name);
};

function Edad() {
console.log("Mi edad es " + this.age); 
};      

Maestro.Hola = Hola;
Alumno.Hola = Hola;
      
Maestro.Hola();
Alumno.Hola();

Maestro.Edad = Edad;
Alumno.Edad = Edad;

Maestro.Edad();
Alumno.Edad();