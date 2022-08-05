/*Write a JavaScript program to construct the following pattern, using a nested for loop.
*/
let pattern = "";

for (let i=1; i<6; i++){
   pattern = pattern + " " +"*";
   //console.log(pattern);

}



for(let i=1; i <6; i++) //niveles
{
   let pattern1 = ""; //se define aquí la variable para que cada for anidado terminado, se limpie
   for (let j=0; j < i; j++) //# de *
     {
      pattern1=pattern1 + " *";        
      }
   console.log(pattern1);
     
}