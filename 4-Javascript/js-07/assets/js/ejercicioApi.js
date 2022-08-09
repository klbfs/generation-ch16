/* URLs para consumir */
const urlAleatorios = "https://api.thecatapi.com/v1/images/search";

/*elementos DOM*/
const $imgPerrito = document.getElementById("imgPerrito");
console.log($imgPerrito);//validamos todo ok

const btn = document.getElementById("btn-perrito")
console.log(btn); //verifico que traje al elemento correcto


/* Eventos */
btn.addEventListener("click", ( )=>{
    console.log("Botón presionado");
    obtenerPerritoAleatorio(urlAleatorios);

   
})

async function obtenerPerritoAleatorio (urlapi){
    
    const respuesta = await fetch(urlapi);
    const datos = await respuesta.json();

    console.log(datos); //datos es un objeto
    console.log(datos[0].url);

    $imgPerrito.src = datos[0].url;
    $imgPerrito.alt = "Foto perro";
 



    
}

//obtenerPerritoAleatorio(urlAleatorios);