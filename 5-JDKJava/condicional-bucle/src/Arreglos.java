import java.lang.reflect.Array;

public class Arreglos {

    public static void main(String[] args) { //arreglo de strings, llamado args

        // En los arreglos no se pueden mezclar tipos de datos
        // 1) se define tipo de dato
        // 2) con [] se indica que es un arreglo

        // forma 1 ---se ocupa más
        int[] numerosAleatorios = {1, 2, 3, 4, 5, 6}; //arreglo 1
        String[] valores = {"Hola", "Adios", "etc"}; // arreglo 2

        // forma 2 -- no se ocupa
        byte otrosNumeros[] = {1, 2, 3};

        // forma 3 --sin definir elementos del arreglo
        //los arreglos tienen un tamaño definido, SON FIJOS
        char[] caracteres = new char[5];
        caracteres[0] = 'h';
        caracteres[1] = 'o';
        caracteres[2] = 'l';
        caracteres[3] = 'i';
        caracteres[4] = 's';

        System.out.println(numerosAleatorios[0]); //imprime direccion si no le ponemos un índice
        System.out.println(valores[1]); //imprime direccion si no le ponemos un índice
        System.out.println(caracteres); //imprime como si fuera un string

        // for each
        for (int i: numerosAleatorios){
            System.out.println(i);
        }
        for (String elemento: valores){
            System.out.println(elemento);
        }

        System.out.println(valores.length);



















    }



}
