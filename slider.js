'use strict'
//PUNTITOS
// como solo es un elemento se pone sin el ALL, si son varios elementos se pone el ALL
const slider = document.querySelector(".slider");
const indice = document.querySelectorAll(".indice");
const titulo = document.querySelectorAll(".titulo");
const descripcion = document.querySelectorAll(".descripcion");
//FLECHAS
const flechaIzq = document.querySelector("flechaIzq");
const flechaDer = document.querySelector("flechaDer");
let posicion = 0;
//AUTOMATICO

// Recorremos todos los puntitos
indice.forEach(
    function (element, i, array) {
        indice[i].addEventListener('click', () => {
            //Guardamos la posicion del punto actual
            let posicion = i;
            //Calculamos lo que se debe desplazar el slider
            let op = posicion * -25;

            //Movemos las imagenes
            slider.style.transform = "translateX(" + op + "%)";

            titulo.forEach((cadaTitulo, i) => {
                titulo[i].style.opacity = "0";
                titulo[i].style.transform = "translateY(-180%)";
            })
            titulo[i].style.opacity = "1";
            titulo[i].style.transform = "translateY(0%)";

            descripcion.forEach((cadaDescripcion, i) => {
                descripcion[i].style.opacity = "0";
            })
            descripcion[i].style.opacity = "1";

            indice.forEach((cadaPunto, i) => {
                indice[i].classList.remove('activo');

            })

            indice[i].classList.add('activo');
        })
    }
);

//FLECHAS
function movimientoFlechas() {

    switch (posicion) {
        case 0:
            slider.style.transform = "translateX(0%)";
            slider.style.transform = "translateX(-25%)";
            slider.style.transform = "translateX(-50%)";
            slider.style.transform = "translateX(-75%)";
            break;
        case 1:
            slider.style.transform = "translateX(-25%)";
            slider.style.transform = "translateX(-50%)";
            slider.style.transform = "translateX(-75%)";
            slider.style.transform = "translateX(0%)";
            break;
        case 2:
            slider.style.transform = "translateX(-50%)";
            slider.style.transform = "translateX(-75%)";
            slider.style.transform = "translateX(0%)";
            slider.style.transform = "translateX(-25%)";
            break;
        case 3:
            slider.style.transform = "translateX(-75%)";
            slider.style.transform = "translateX(0%)";
            slider.style.transform = "translateX(-25%)";
            slider.style.transform = "translateX(-50%)";
            break;
        default:
            break;
    }
}

function movimientoDerecha() {
    if (posicion < 3) {
        posicion++;
    } else {
        posicion = 0;
    }
    movimientoFlechas();

    titulo.forEach((cadaTitulo, posicion) => {
        titulo[posicion].style.opacity = "1";
        titulo[posicion].style.transform = "translateY(0%)";
    })
    titulo[posicion].style.opacity = "0";
    titulo[posicion].style.transform = "translateY(-180%)";

    descripcion.forEach((cadaDescripcion, posicion) => {
        descripcion[posicion].style.opacity = "1";
    })
    descripcion[posicion].style.opacity = "0";

    indice.forEach((cadaPunto, posicion) => {
        indice[posicion].classList.remove('activo');
    })
    indice[posicion - 1].classList.add('activo');
}

function movimientoIzquierda() {
    if (posicion > 0) {
        posicion--;
    } else {
        posicion = 3;
    }
    movimientoFlechas();

    titulo.forEach((cadaTitulo, posicion) => {
        titulo[posicion].style.opacity = "1";
        titulo[posicion].style.transform = "translateY(0%)";
    })
    titulo[posicion].style.opacity = "0";
    titulo[posicion].style.transform = "translateY(-180%)";

    descripcion.forEach((cadaDescripcion, posicion) => {
        descripcion[posicion].style.opacity = "1";
    })
    descripcion[posicion].style.opacity = "1";

    indice.forEach((cadaPunto, posicion) => {
        indice[posicion].classList.remove('activo');
    })
    indice[posicion - 1].classList.add('activo');
}

//AUTOMATICO
var intervalo = setInterval(() => { movimientoDerecha() }, 2500);

function limpiaIntervalo() {
    clearInterval(intervalo);
}