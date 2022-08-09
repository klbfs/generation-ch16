//"https://pokeapi.co/"
/* URL a consultar */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/1"; //podemos cambiar id en url /pokemon/#id


/* Elementos del DOM */
const $imgPokemon = document.getElementById("imgPokemon");
//console.log($imgPokemon);
const $idPokemon = document.getElementById("idPokemon");
//console.log($idPokemon);
const $nombrePokemon = document.getElementById("nombrePokemon");
//console.log($nombrePokemon);









/* Funciones */
async function obtenerPokemon(url){

    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    
    console.log(datos);

    //creamos nuevo objeto para guardar la info que queremos en vez de datos.abilities, etc. -->más elegible
    //queremos obtener nombre, habilidad, numero, tipo, imagen
    const pokemon = {
        nombre: datos.forms[0].name,
        habilidad: datos.abilities,
        id:datos.id,
        tipos: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default //notación porque si no error por el '-'


    }
    
    $imgPokemon.src = pokemon.imagen;
    $idPokemon.textContent = `ID: ${pokemon.id}`;
    $nombrePokemon.textContent = `Hola soy ${pokemon.nombre}`;
    
}

obtenerPokemon(urlPokemon);