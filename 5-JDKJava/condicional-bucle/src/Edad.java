import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        System.out.println("La clase Edad");


        // Determinar si una persona es mayor de edad

        Scanner inputEdadUsuario = new Scanner(System.in); //creamos obj/instanciamos
        System.out.println("Ingresa tu edad: ");
        int edad = inputEdadUsuario.nextInt(); //leemos valor de tipo entero
        inputEdadUsuario.close(); //cerramos la apertura de lectura de entradas

        if (edad != 0 & edad < 18){
            System.out.println("Eres menor de edad");
        }else if (edad >= 18){
            System.out.println("Eres mayor de edad");
        }else if (edad == 0){
            System.out.println("No has nacido, vuelve a intentar");
        }



        // Operador ternario
        String resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);

    }
}
