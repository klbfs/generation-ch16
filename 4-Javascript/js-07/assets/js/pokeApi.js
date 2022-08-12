//"https://pokeapi.co/"


/* URL a consultar */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"; //podemos cambiar id en url /pokemon/#id


/* Elementos del DOM -usar const porque sólo sirve para apuntar el nodo*/
const $imgPokemon = document.getElementById("imgPokemon");
//console.log($imgPokemon);
const $idPokemon = document.getElementById("idPokemon");
//console.log($idPokemon);
const $nombrePokemon = document.getElementById("nombrePokemon");
//console.log($nombrePokemon);

const $listaHabilidades = document.getElementById("listaHabilidades"); //->Paso 1
//console.log($listaHabilidades);

const $listaTipos = document.getElementById("listaTipos");
//console.log($listaTipos);

//Formulario
const $formulario = document.getElementById("formulario");
console.log($formulario);



/* Eventos */
//una vez que tenemos el evento, traemos al input
$formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //detiene la acción del submit "espérate tantito",pq submit recarga la página
    //console.log("Boton");

    const inputPokemon = document.getElementById("busquedaPokemon");
    //console.log(inputPokemon.value); //input tiene atributo value
    const nuevaBusqueda = urlPokemon + inputPokemon.value;
    console.log(nuevaBusqueda);
    obtenerPokemon(nuevaBusqueda);
})



/* Funciones */
async function obtenerPokemon(url){

    /*------>si existe el pokemon o ID:--------------------------*/

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        
        console.log(datos);

        //creamos nuevo objeto para guardar la info que queremos en vez de datos.abilities, etc. -->más elegible
        //queremos obtener nombre, habilidad, numero, tipo, imagen
        const pokemon = {
            nombre: datos.forms[0].name,
            habilidades: datos.abilities,
            id:datos.id,
            tipos: datos.types,
            imagen: datos.sprites.other["official-artwork"].front_default //notación porque si no error por el '-'


        }
        
        //--------------------imagen, nombre y id---------------------------------
        $imgPokemon.src = pokemon.imagen;
        $idPokemon.textContent = `ID: ${pokemon.id}`;
        $nombrePokemon.textContent = `Hola soy ${pokemon.nombre}`;

        //--------------------agregando habilidades------------------------------

        
        //->console.log(pokemon.habilidades); //array ->paso 2

        //->recorriendo el atributo habilidadess ->paso 3
        let templateHabilidades = ` `;
        for (let i=0; i<pokemon.habilidades.length; i++){
            const nombreHabilidad = pokemon.habilidades[i].ability.name;

            templateHabilidades += `<li class="list-group-item">${nombreHabilidad}</li>`; //lo que quiero agregar
            
            
        }
        //->agregar elementos con innerHTML o CreateElement
        $listaHabilidades.innerHTML = templateHabilidades; //->paso 4



        //--------------------agregando tipos---------------------------------------
        console.log(pokemon.tipos);

        let templateTipos = ` `;
        pokemon.tipos.forEach(element => {
        const nombreTipos = element.type.name;
        templateTipos += `<li class="list-group-item">${nombreTipos}</li>`;

        });

        $listaTipos.innerHTML = templateTipos;


    /*con forEach
    pokemon.habilidades.forEach(element => {
        console.log(element.ability.name);
    });*/






    /*------------->si no encuentra un pokemon o id:----------------*/
    } catch (error) {
        alert("Pokemon no válido");
    }

    
    
}

