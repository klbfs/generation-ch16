package MetodoPrincipal;


import MenuPrincipal.MenuOpciones;
import java.util.Scanner;




public class EjecutaT {

    public static void main(String[] args){

        // Invocamos MenuOpciones
        MenuOpciones menuOp = new MenuOpciones();
        //menuOp.menu();

        Scanner input = new Scanner(System.in);
        int opcion;
        int salir = 0;

        do {
            menuOp.menu();
            System.out.println("Ingresa opción: ");
            opcion = input.nextInt();
            switch (opcion){
                case 1:
                    Opcion1 opcion1 = new Opcion1();
                    opcion1.main(args);
                    break;
                case 2:
                    Opcion2 opcion2 = new Opcion2();
                    opcion2.main(args);
                    break;
                case 3:
                    Opcion3 opcion3 = new Opcion3();
                    opcion3.main(args);
                    break;
                case 4:
                    Opcion4 opcion4 = new Opcion4();
                    opcion4.main(args);
                    break;
                case 5:
                    salir = 1;
                    break;
                default:
                    System.out.println("Opción no válida");
                    break;
            }


        }while(salir!=1);








    }
}
