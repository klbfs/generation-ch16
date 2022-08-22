import java.util.ArrayList;
import java.util.List;

public class ColeccionesLista {

    public static void main(String[] args) {
        // list -- ArrayList
        // -->los valores se ordenan según el orden en que los agreguemos
        // -->permiten tener valores duplicados
        // -->comportamiento parecido a arreglos en js
        // -->es una colección de objetos de un mismo tipo
        // -->Estructura
        // -----> dentro de <> va la clase
        List<String> meses = new ArrayList<String>(); //----->vacío

        System.out.println(meses);

        // -----> agregando valores
        // -----------> método add
        meses.add("Enero");
        meses.add("Marzo");
        meses.add(1,"Febrero");
        meses.add(3, "Abril");
        System.out.println("Método add : " + meses);

        // -----> eliminando elementos
        // -----------> método remove
        String elementoEliminado1 = meses.remove(3);
        System.out.println("Elemento eliminado: "+elementoEliminado1);
        System.out.println("Resultado: " + meses);

        // -----> para acceder a valores con posición
        // ------------> método get
        System.out.println(meses.get(0));


        // -----> tamaño de lista
        System.out.println(meses.size());


        // -----> for each
        for (String elemento : meses){
            System.out.println(elemento);

        }

        // ARREGLO 2, DE NÚMEROS

        // ----->Clases envolventes o wrapper
        int num1 = 10;
        Integer num2 = 10;
        System.out.println(num1 + 10);
        System.out.println(num2 - 5);
        System.out.println(num2.getClass().getSimpleName());

        // no se puede con <int>
        List<Integer>listaEnteros = new ArrayList<Integer>();
        listaEnteros.add(2);
        listaEnteros.add(500);
        listaEnteros.add(98);
        listaEnteros.add(90);
        System.out.println(listaEnteros);























    }

}
