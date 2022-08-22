import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {
        //------TEMAS-----
        // SET
        // Set no permite elementos duplicados
        //a) HashSet: guardar, eliminar y consultar
        // No guardan los valores en el orden en el que se van agregando
        // Colección que funciona más rápido

        Set<String> miSet = new HashSet<String>();
        miSet.add("Andrea");
        miSet.add("Beatriz");
        miSet.add("Cristian");
        miSet.add("Daniel");
        miSet.add("Daniel");
        miSet.add("Daniel");
        miSet.add("Daniel");
        miSet.add("Daniel");


        System.out.println(miSet);


        // ----->método remove
        // -------->tenemos que especificar el elemento a borrar, no su posición
        miSet.remove("Cristian"); //borra a cristian
        System.out.println(miSet);

        System.out.println(miSet.size());

        // -----> si existe un elemento dentro del arreglo
        System.out.println(miSet.contains("Daniel"));

        // -----> for each
        for (String nombre : miSet){
            System.out.println(nombre);

        }










    }





}
