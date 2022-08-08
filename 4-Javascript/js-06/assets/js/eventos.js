//Opción 1: con creación de función
function saludar(){
   alert("Hola");
}

//Opción 2: con addeventListener()
const boton = document.getElementById('boton');
console.log(boton);

boton.addEventListener('click', (evento) => {
    //alert("Hola");
    console.log(evento.target);
}); //('evento',(evento) => {} ...sólo se usa 1 evento

//.target lo llama cada que se aprieta


const formulario = document.getElementById("form");
formulario.addEventListener('submit',(e) => {
    e.preventDefault(); //con esto se deja de actualizar
    console.log(formulario[0].value); //aparece el input de tipo texto
})

//