import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {

        //**test
        int i = 5, j = 4, suma = i + j;
        System.out.println("suma = "+ suma);
        System.out.println("i + j = "+ i + j); //R: 54 --string
        //concatena porque lo de izq es cadena, entonces lo de la derecha también
        System.out.println("i + j = "+ (i + j));
        //operador () pone precedencia para que lea de der-izq y así el resultado sea números no string
        System.out.println("(i + j) = "+ (i + j));

        int resta = i - j;
        System.out.println("resta = " + resta);
        System.out.println("i -j = " + (i-j));

        int multiplicacion = i * j;
        System.out.println("multiplicación = " + multiplicacion);
        System.out.println("(i * j) = "+ (i*j));

        //division para que me de parte decimal
        float division = (float) i / (float) j; //casteo de int a float
        System.out.println("división = " + division);
        System.out.println("(i / j) = "+ ((float)i/(float)j));

        int modulo = i % j;
        System.out.println("modulo = "+modulo);
        modulo = 8 % 5;
        System.out.println("modulo = " + modulo);



        //Input de usuario
        //1) class Scanner
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingresa tu nombre: ");
        String dato = scanner.next();
        System.out.println("Hola " + dato);


        System.out.println("Ingresa número 1: ");
        int numero1 = scanner.nextInt();

        System.out.println("Ingresa número 2: ");
        int numero2 = scanner.nextInt();

        int multiplicacionNum = numero1 * numero2;
        System.out.println("multiplicación de "+numero1+" * "+numero2+" = " + multiplicacionNum);


        //Parseo de string a int

        System.out.println("Cual es tu edad: ");
        String datoedad = scanner.next();
        int edad = Integer.parseInt(datoedad);
        System.out.println("Tu edad es "+edad);



    }



}
