'use strict';


/* URLs para consumir */
const urlAleatorios = "https://dog.ceo/api/breeds/image/random";


/*elementos DOM*/
const $imgPerrito = document.getElementById("imgPerrito");
console.log($imgPerrito);//validamos todo ok

const btn = document.getElementById("btn-perrito")
console.log(btn); //verifico que traje al elemento correcto


/* Eventos */
btn.addEventListener("click", ( )=>{
    console.log("Botón presionado");
    obtenerPerritoAleatorio(urlAleatorios);

    //const audio = new Audio();
    //audio.play();
    //audio.volume(3);
})



/* Función */
async function obtenerPerritoAleatorio (url){
    
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    console.log(datos); //datos es un objeto

    //según documentación o si vemos en 'datos', datos tiene message y status
    console.log(datos.message);
    console.log(datos.status);


    

    $imgPerrito.src = datos.message;
    $imgPerrito.alt = "Foto perro";



    
}

//obtenerPerritoAleatorio(urlAleatorios);