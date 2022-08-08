//1. crear un elemento
const imagen = document.createElement("img");
//console.log(imagen);

//2. modificamos atributos html del elemento
            //API usada: (https://placeimg.com/)
imagen.src = "https://placeimg.com/200/200/animals";
imagen.alt = "Imagen de animal";



//3...lo insertamos en un elemento padre (body) y se visualiza etiqueta
document.body.appendChild(imagen); //se nos agrega siempre al final :( - es lo que se ocupa 

//para modificar el comportamiento anterior:
/*document.body.insertAdjacentElement("afterend", imagen);
document.body.insertAdjacentElement("afterbegin", imagen);
document.body.insertAdjacentElement("beforeend", imagen);*/
document.body.insertAdjacentElement("beforeend", imagen);


//Forma correcta de crear e insertar un elemento

//Paso 1. Se crea el emento que contrendrá la imagen--<div id=""></div>
//Paso 2. Seleccionamos elemento padre
const $padreImg = document.getElementById('padreImg');
//Paso 3. Creamos elemento
const imagen2 = document.createElement("img");
//Paso 4. Modificamos los atributos del elemento
imagen2.src = "https://placeimg.com/200/200/nature";
imagen2.alt = "Imagen de naturaleza";
//Paso 5. Insertamos elemento con appendChild
$padreImg.appendChild(imagen2);





//*********Utilizar forEach para pintar/usar datos
const frutas = ["Toronja", "Manzana", "Plátano", "Zarzamora", "Naranja", "Ciruela"];//tipo base de datos

const $listaFrutas = document.getElementById('frutas')//seleccionamos el espacio


//Opción 1 
/*frutas.forEach((element) => { //mostraremos de forma dinámica los elementos
    const li = document.createElement('li'); //elemento creado
    li.textContent = element;
    $listaFrutas.appendChild(li);

});
*/
//Opcion 2

frutas.forEach((el) => {
    $listaFrutas.innerHTML += `<li>${el}</li>`; //$listaFrutas.innerHTML = `<li>${el}</li>`->sobreescribe;
})
