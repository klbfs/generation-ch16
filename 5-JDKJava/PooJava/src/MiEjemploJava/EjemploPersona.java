package MiEjemploJava;

public class EjemploPersona {

    public static void main(String[] args) {

        // 1- Constructor vacio:
        //definimos un objeto de forma abstracta
        Persona humano0 = new Persona();



        // 2- Constructor con inicialización de parámetros:
        //definimos a un objeto con sus características definidas
        Persona humano1 = new Persona("Juan", 1, 12345);





        // 3- Accediendo/Inicializando parámeteros con métodos accesores
        // -----> inicializar parámetros con SET
        // -----> acceder a parámetros con GET



        // -----> CASO Constructor 2- . Usando Get para acceder cuando hicimos uso de un constructor
        //       que se usa para definir parámetros
        System.out.println(humano1.getEdad()); //no se puede humano.edad porque edad es privado - usamos GET

        // -----> CASO Constructor 1- . Usando el constructor vacío y SET para inicializar y GET

        humano0.setNombre("Andrea"); //set es tipo void (no regresa nada)
        System.out.println(humano0.getNombre());

        Persona humano2 = new Persona();
        humano2.setNombre("Diego");
        System.out.println("Métodos accesores: " + humano2.getNombre());










    }






}
