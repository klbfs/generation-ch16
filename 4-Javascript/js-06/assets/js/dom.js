//console.log(document.URL);
//METODOS
//------------------------------1 getElementById("")
//más rápido y usado
//debemos mandar a llamar al objeto que pertenece el elemento

//atributo textContent
console.log(document.getElementById('parrafo1').textContent);

const parrafo1 = document.getElementById('parrafo1');
console.log(parrafo1);
parrafo1.textContent = "holis"; //reemplazamos valor de contenido de parrafo1
console.log(parrafo1);
console.log("Contenido de parrafo1: "+ parrafo1.textContent);


//atributo style
console.log(parrafo1.style);
parrafo1.style.color = "white";
parrafo1.style.backgroundColor = "purple";

//------------------------2  querySelector("")
//llamar al document primero
//para llamar a etiqueta => p
//para llmar a clase => .clase
//para llamar a id =>  #id
//debemos usar comillas

const $parrafo2 = document.querySelector(".parrafo2");
console.log($parrafo2.textContent);

$parrafo2.textContent = "Modificando el contenido del párrafo 2 desde JS";
console.log($parrafo2.textContent);
$parrafo2.textContent += "\nAgregando contenido";
console.log($parrafo2.textContent);


//-------------------3  querySelectorAll("")

const $parrafos = document.querySelectorAll("p");
console.log($parrafos);
console.log($parrafos.length);
//para seleccionar un elemento en particular
console.log($parrafos[2]);
$parrafos[2].style.fontSize = "2rem";
console.log($parrafos[2]);





//modificar los atributos de html
const $enlace = document.getElementById("enlace");
console.log($enlace);
$enlace.href = "https://www.youtube.com/";
console.log("href cambiado: "+$enlace);
$enlace.target = "_blank"; 
$enlace.textContent = "Enlace de Youtube"; //reemplazo




//Ejercicio
const $elemento1 = document.getElementById("parrafo1");
$elemento1.style.fontStyle = "italic";
$elemento1.style.fontSize = "3rem";
$elemento1.textContent = "Bienvenido";
$elemento1.style.textAlign = "center";

const $elementoh1 = document.querySelector("h1");
$elementoh1.textContent = "8/08/2022" ;
$elementoh1.style.fontFamily= "Times New Roman";


const $elementoEnlace = document.getElementById("enlace");
$elementoEnlace.style.backgroundColor = "pink";



/************************Reemplazo dinámico***************/
//Reemplazar contenido
const $parrafo4 = document.getElementById("parrafo4");
console.log($parrafo4.nodeName);
console.log($parrafo4.textContent);
console.log($parrafo4.innerHTML); 
//console.log(document.body.innerHTML);
console.log($parrafo4.outerHTML); //muestra el contenido html, incluyendo al elemento


//innerHTML
//$parrafo4.textContent = '<a href="http://google.com">Enlace</a>'; //no se detecta el html

$parrafo4.innerHTML = '<a href="http://google.com">Enlace</a>'; //sí se detecta html y reemplaza el contenido del elemento


//outerHTML. Reemplaza
//$parrafo4.outerHTML = '<a href="http://google.com">Enlace</a>'; //reemplaza el elemento completo

$parrafo4.innerHTML = '<div class="elemento">Este es un div</div>';
//$parrafo4.outerHTML = '<div class="elemento">Este es un div</div>';





//Js permite modificar las clases css utilizando style
//style.css
console.log($parrafo4.classList);
console.log($parrafo4.classList.contains("elemento"));//preguntamos si parrafo4 tiene la clase elemento

//a) opción 1
//$parrafo4.classList.add("elemento");//agregamos clase elemento a parrafo 4 y con eso los estilos definidos

//b) opción 2. se puede ocupar si queremos que cuando el usuario presione un botón, se cambie de color y cuando no, la quita.
const cambiarColor = () => {
    $parrafo4.classList.toggle('elemento'); //agrega esta clase a nuestro elemento si no está presente. Si está presente, quita la clase
}
cambiarColor(); //se agrega la clase
cambiarColor(); //se quita la clase


