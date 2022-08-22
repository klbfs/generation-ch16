import java.util.Scanner;

public class Ejercicio {

    public static void main(String[] args) {

        String valor = "";
        for (int i=0; i<5; i++){
            valor += "*";
            System.out.println(valor);

        }
        System.out.println("ascendente anidado");
        String valorv1 = "";
        for (int i=0; i<5; i++){
            for (int k=0; k<=i; k++){
                valorv1 += "*";

            }
            System.out.println(valorv1);
            valorv1 = "";

        }




        String valor2 = "";
        System.out.println("descendente");
        for (int j=5; j>0; j--){
            for (int k=0; k<j; k++){
                valor2 += "*";

            }
            System.out.println(valor2);
            valor2 = "";


        }


        Scanner input = new Scanner(System.in);
        System.out.println("Número de estrellas");
        int estrellas = input.nextInt();
        System.out.println("Direccion 1 (ascendente) o 2 (descendente)");
        int direccion = input.nextInt();


        switch (direccion){
            case 1:
                String valor3 = "";
                for (int i=0; i<estrellas; i++){
                    for (int k=0; k<=i; k++){
                        valor3 += "*";

                    }
                    System.out.println(valor3);
                    valor3 = "";

                }

                break;
            case 2:
                String valor4 = "";
                for (int j=estrellas; j>0; j--){
                    for (int k=0; k<j; k++){
                        valor4 += "*";

                    }
                    System.out.println(valor4);
                    valor4 = "";


                }
                break;
        }










    }









}
