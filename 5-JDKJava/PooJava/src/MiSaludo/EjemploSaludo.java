package MiSaludo;
public class EjemploSaludo {
    public static void main(String[] args) {

        // ------------------------------SINTASIS DE LA INSTANCIA: 3 pasos


        // llamamos a la clase Saludo
        // tipo nombre = new metodo();


        //----------PASO 1: declaración de objeto
        // -> declaro objeto de tipo Saludo (tipo referencia)
        //Saludo objSaludo;

        //----------PASO 2: creación de objeto
        // -> Creado con método Saludo() que va a permitir reservar
        //    memoria para usar objeto dinámicamen.
        //objSaludo = new Saludo();

        Saludo objSaludo = new Saludo(); //conjuntamos paso 1 y 2
        Saludo objSaludo0 = new Saludo();

        // --------PASO 3: llamada
        // Todo lo que tenga Saludo puedo invocarlo, en este caso el método saludar()

        objSaludo.saludar();
        System.out.println("este es otro objeto " + objSaludo.saludar01());

        //-----> Modificando variables de instancia de clase Saludo
        objSaludo0.textoS = "Hola";
        objSaludo0.a = 20;
        System.out.println("objSaludo0: " + objSaludo0.saludar01());
        System.out.println("objSaludo: " + objSaludo.saludar01());


    }

}
