//paso 1. url
const url = "https://dog.ceo/api/breeds/image/random";


//----+fetch es una función que regresa una promesa y nos regresa los datos. Siempre le damos el url de api.
fetch(url);


//----+con un then = Respuesta de la petición
fetch(url).then((respuestaApi)=>{
    console.log(respuestaApi);
})


//Paso 2. Obtener la información de la petición

//Forma #1
//primer then te da la respuesta de API y si success = convertir respuesta a json (regresa otra promesa)
//segundo then es para obtener los datos y si success = imprimirlos
fetch(url)
.then((respuesta)=>respuesta.json())
.then((datos)=>{console.log(datos);}) 
.catch((error)=>{console.log(error);})


//Forma #2

async function obtenerPerritoAleatorio(){
    try{
        const respuestaPromesa = await fetch(url) //conexión
        const datos = await respuestaPromesa.json()
        console.log(datos);

    }catch{
        console.log(error);
    }

}

obtenerPerritoAleatorio()