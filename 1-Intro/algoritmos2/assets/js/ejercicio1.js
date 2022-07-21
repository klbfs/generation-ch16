//alert("Hola");

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

personas.splice(1,1);
console.log("Remover a Dani con splice:", personas);

personas.splice(2,1);
console.log("Remover a Juan con splice", personas);

personas.unshift("Luis");
console.log("Agregar a Luis", personas);

personas.push("Karen");
console.log("Agregando a Karen", personas);

console.log(personas.indexOf("Maria"));
console.log(personas.indexOf("Karen"));



