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

        //-----------------Constructores--------------------
        // -----> se pueden tener constructores con nombres iguales: uno
        //        vacío y otro con parámetros - "sobrecarga"


        // Constructor vacío - 'está creando un objeto'
        public Persona(){

        }
        //creamos constructor para inicializar variables
        // -->se llama igual que la clase
        // --> se pueden inicializar las variables instanciadas con this
        public Persona(String nombre, int edad, int nss) {
            this.nombre = nombre;
            this.edad = edad;
            this.nss = nss;
        }

        public Persona(String nombre) {
            this.nombre = nombre;
        }


        //---------------------Métodos accesores------------------
        //Métodos accesores a los miembros de datos
        // -----> GET: Obtener acceso a miembros de datos
        public String getNombre(){
            return nombre;
        }

        public int getEdad(){
            return edad;
        }
        public int getNss(){
            return nss;
        }

        // -----> SET: Permite acceder al miembro de datos privado
        //         y darle un valor o inicializarlo. En vez de con un constructor
        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public void setEdad(int edad) {
            this.edad = edad;
        }

        public void setNss(int nss) {
            this.nss = nss;
        }
}
