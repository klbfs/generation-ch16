package MiEjemploJava;

public class Persona {




        private String nombre;
        private int edad;
        private int nss;

        void caminar() {
            System.out.println("Caminando");
        }


        void dormir() {
            System.out.println("Durmiendo");
        }



        //creamos constructor e inicializamos variables
        // -->se llama igual que la clase
        // --> se pueden inicializar las variables instanciadas con this
        public Persona(String nombre, int edad, int nss) {
            this.nombre = nombre;
            this.edad = edad;
            this.nss = nss;
        }








}
