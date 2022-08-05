/*– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.
*/

let xValue = 2;
while(xValue>0){
    console.log(xValue);
    xValue = xValue - 0.5;

}

/*- Print all the odd numbers between 1 - 100.
*/
let j = 1;
while (j<101){
    if ((j%2 != 0 & j%3!=0 & j%5!=0 & j%7!=0)| j===3 | j===5 | j===7){
        console.log(j);
    }
    j++
}



/*- Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6] */
let i = 0;
let n = 6;
function square(i,n){
    while(i<n){
        console.log("[ " + (i+1) +" ]");
        i++;
    }
}
square(i,n);

/*- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190 */

let contador = 0;
let ultimo = 5;

function suma(contador, ultimo){
    let sum=0;
   while(contador<ultimo+1){
        sum = sum + contador;
        contador++;
    }
    console.log(sum) ;
}

suma(contador, ultimo);
