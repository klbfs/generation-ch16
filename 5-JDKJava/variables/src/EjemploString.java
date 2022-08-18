public class EjemploString {
    public static void main(String[] args) {
        //Declaración por forma literal
        String curso = "Curso en Java";
        String nombre = "humano";


        System.out.println(curso + " " + "para " + nombre);
        //Declaración por referencia/obj
        String resultado = new String("Curso en Java");
        System.out.println("resultado "+ resultado);


        //**test** Comprobación de que un valor primitivo y objeto-referencia son diferentes
        boolean esigual = curso == resultado;
        System.out.println("es igual en declaración? "+ esigual); //R: false porque son declaradas diferentes

        //**test** para evaluar el contenido y no la referencia.
        // Ojo: Case sensitive
        esigual = curso.equals(resultado);
        System.out.println("es igual en contenido? "+ esigual); //R: true porque su contenido es igual

        //Método para evaluar que la semántica sea igual
        //Ojo: NO es case sensitive
        String cursoMayuscula = "curso en java";
        esigual = cursoMayuscula.equalsIgnoreCase(resultado);
        System.out.println("es igual en contenido? "+ esigual);

        /*----------------------------------------------*/
        //concatenacio
        //1. concatenacion literal
        String concatenacion = curso + " para " + nombre;
        System.out.println("concatenacion: "+ concatenacion);
        String dia = "jueves";
        //2. con funcion de String (por referencia)
        //concat es un metodo de los String
        String concat1 = concatenacion.concat(" " + dia);
        System.out.println("concat1 "+ concat1);
        String concat2 = concatenacion.concat(" ").concat(dia);
        System.out.println("concat2 "+ concat2);
        System.out.println(1+2+"3");
        System.out.println(concatenacion.concat("23")); //no se puede concatenar 23 sin poner comillas :(


        //instancia
        //-creamos objeto
        String nuevo;
        //-
        nuevo = new String("Hola");
        //-invocamos con el objeto
        nuevo.concat("!");





    }
}