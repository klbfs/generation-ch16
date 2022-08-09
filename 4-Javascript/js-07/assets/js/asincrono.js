const num = 20; 
console.log(num);

console.log(2);

//función de delay de ejecución
//-se espera 2000 ms e imprime hola
setTimeout(()=>{
    console.log("Hola");
},2000); //función anónima

setTimeout(()=>{
    console.log("Adiós");
},0); //función anónima

console.log(3);

console.log(4);

console.log(5);