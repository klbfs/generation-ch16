//https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops


/* Part 1
There are three people waiting for the bank. 
Their names, in order, are Sofia, David, and Juan. 
Create an array that has these three names in order.
*/

let arrayPeople = ["Sofia", "David", "Juan"];
console.log(arrayPeople);

/*Two more people get added to the back of the line - Sara and Augustin. 
The first person in line is called to the teller. What does the queue look like?
*/
arrayPeople.splice(3,0,"Sara", "Agustin");
arrayPeople.splice(0,1);
console.log(arrayPeople);

/*It turns out David was saving a spot for his friend Renata. 
She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. 
What does the queue look like? 
*/

arrayPeople.splice(1,0,"Renata");
console.log(arrayPeople);

arrayPeople.push("Elena");
console.log("Fila final "+arrayPeople);