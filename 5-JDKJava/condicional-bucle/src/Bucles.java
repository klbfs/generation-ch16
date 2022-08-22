import java.util.Objects;
import java.util.Scanner;
//import java.util.*; //importar todas las clases del paquete util

public class Bucles {
    public static void main(String[] args) {
        System.out.println("Bucles");

        // -----------------------for
        // bucle controlado
        for (int i=0; i<10; i++) {
            System.out.println(i);
        }

        int suma = 0;
        for (int i=0; i<10; i++) {
            suma += i;
        }
        System.out.println(suma);



        //---------------------- while
        // bucle no controlado
        // mientras la condición sea true, se ejecuta
        // la condición se debe modificar dentro del while, sino es loop infinito
        String condicion = "";
        Scanner sc = new Scanner(System.in);

        //no se puede condicion != "Hola!
        // == o != es cuando estamos comparando datos primitivos o ref de objetos
        //cuando comparamos dos objetos (como Strings) debe ser con equals
        // condicion.equals("Hola"); --forma 1
        // Objects.equals(condicion, "Hola") --forma 2 compara objetos
        while ( !Objects.equals(condicion, "Hola") ){
            System.out.println("Salúdame while");
            condicion = sc.next();

        }

        //---------------------- do while
        // ejecuta la acción una vez por lo menos
        do{
            System.out.println("Salúdame do while");
            condicion = sc.next();
        }while(!Objects.equals(condicion, "Hola"));


    }
}
