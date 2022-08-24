import java.util.*;

public class Colecciones3 {
    public static void main(String[] args) {

        //Forma 1 de inicializar lista
        List<String> comidas = new ArrayList<String>();
        comidas.add("Pozole");
        comidas.add("Tostadas");
        comidas.add("Ceviche");
        comidas.add(2,"Esquite");
        System.out.println(comidas);


        // Forma 2, con método as List de 'Arrays'
        List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1,2,3));
        System.out.println(numeros);


        //------------------------------HASH SET-----------------------------
        System.out.println("--------------------");
        System.out.println("Hashset");

        Set<String> ciudades = new HashSet<String>();
        ciudades.add("CDMX");
        ciudades.add("GDL");
        ciudades.add("MTY");
        System.out.println(ciudades);

        // Otra forma de crear un HashSet
        Set<Boolean> verdad = new HashSet<Boolean>(Arrays.asList(true, false, false, true));
        System.out.println(verdad); //no imprime valores duplicados


        //-------------------------------HASH MAP-----------------------
        System.out.println("--------------------");
        System.out.println("HashMap");

        // -> Nos permiten guardar pares de valores
        // -> llave : valor
        // -> Hashmap<Llave, Valor>

        Map<Integer, String> alumnos = new HashMap<Integer, String>();

        // -----> Agregar valores
        alumnos.put(0,"Pedro");
        alumnos.put(1,"Sofía");
        alumnos.put(2,"Salma");
        alumnos.put(3,"Miguel");
        alumnos.put(4,"Miguel"); //funciona de manera similar al set (no aparecen duplicados)
        alumnos.put(5,"José");   //Se reemplaza el valor

        System.out.println(alumnos);
        // -----> Llamar a mandar cierta información
        System.out.println(alumnos.size());
        System.out.println(alumnos.values()); // Lista de valores
        System.out.println(alumnos.keySet()); // Lista de llaves
        // -----> Método get para mostrar un valor en específico
        // ---------> Devuelve el valor al que se le asigna la clave esp.
        System.out.println(alumnos.get(2));


        //----------OBJECT (TIPO DE DATO GENÉRICO)
        // -> object es de tipo genérico-lo usamos por no saber el tipo de dato en específico
        // -> pudimos ocupar 'var' pero luego causa problemas
        Object llaves = alumnos.keySet();
        System.out.println(llaves);
        // -----> lista a arreglo para acceder a una posición
        Object llavesArray = alumnos.keySet().toArray()[2]; //accedemos a la llave 3 que es la 2 posición
        System.out.println(alumnos.get(llavesArray)); //con get imprimimos el valor dentro del key


        System.out.println("------------------------------");
        for(int i=0; i< alumnos.size(); i++){
            Object llavesArray2 = alumnos.keySet().toArray()[i];
            System.out.println(alumnos.get(llavesArray2));

        }

        for(Integer llave : alumnos.keySet()){
            System.out.println(llave + " - " + alumnos.get(llave));

        }




    }
    
}
