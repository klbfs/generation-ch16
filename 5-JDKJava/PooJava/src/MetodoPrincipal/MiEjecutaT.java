package MetodoPrincipal;

import MenuPrincipal.MenuOpciones;
import MiEjemploJava.EjemploPersona;
import MiFecha.EjemploFecha;
import MiSaludo.EjemploSaludo;
import MiSaludo.Saludo;

import java.util.Scanner;

public class MiEjecutaT {

    public static void main(String[] args) {

        // Invocamos MenuOpciones
        MenuOpciones menuOp = new MenuOpciones();
        menuOp.menu();


        Scanner input = new Scanner(System.in);
        int salir = 0;

        while(salir!=1) {

            System.out.println("Ingresa opcion: ");
            int opcion = input.nextInt();
            switch (opcion) {
                case 1:
                    EjemploSaludo.main(args);
                    break;
                case 2:
                    EjemploPersona.main(args);
                    break;
                case 3:
                    EjemploFecha.main(args);
                    break;
                default:
                    System.out.println("Opción no válida");
                    break;
            }
            System.out.println("¿Otra vez? Presionar 0 - Salir 1");
            int opcion2 = input.nextInt();
            salir = opcion2;
        }




    }
}
