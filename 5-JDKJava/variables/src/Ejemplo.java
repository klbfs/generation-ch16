public class Ejemplo {
    public static void main(String[] args) {
        String miNombre = "Karen"; //String es tipo referencia
        String saludo = "Hola esto es Java variables";
        System.out.println(saludo + " " + miNombre);

        var miVar = 2;
        var miVar1 = 2f;
        var miVar2 = 2l;
        var miVar3 = '2';


        char espacio = '\u0020' ;
        char espacio2 = '\u0021' ;
        char arroba = '\u0040' ;
        char caracter = 'a';
        System.out.println(saludo + espacio + miNombre + espacio2 + arroba);


        /*
        Por ejemplo, en esa parte los atributos aparecen en mayúscula,
        todo porque son valores constantes que tiene la clase Character
        Es parte de las convenciones al nombrar
         */
        //clase 'Character' wrapea o envuelve a char
        System.out.println("char corresponde en byte: "+ Character.BYTES); //1 char tien 2 bytes (16 bits)
        System.out.println("char corresponde en byte: "+ Character.SIZE);
        System.out.println("char valor máximo: " + Character.MAX_VALUE); //Un caracter
        System.out.println("char valor mÍnimo: " + Character.MIN_VALUE); //Un caracter



        int numeroEntero = 2;
        System.out.println("numero entero = " + numeroEntero);
        System.out.println("int corresponde en byte = " + Integer.BYTES);
        System.out.println("int corresponde en bits = " + Integer.SIZE);
        System.out.println("int valor máximo = " + Integer.MAX_VALUE);
        System.out.println("int valor mínimo = " + Integer.MIN_VALUE);

        float numeroFloat = 0.000000000015f; //formato de expresión científica
        System.out.println("número Float = "+ numeroFloat);
        System.out.println("float corresponde en byte = " + Float.BYTES);
        System.out.println("float corresponde en bits = " + Float.SIZE);
        System.out.println("float valor máximo = " + Float.MAX_VALUE);
        System.out.println("float valor mínimo = " + Float.MIN_VALUE);

        double numeroDouble = 3985934E39;
        System.out.println("número Double = "+ numeroDouble);
        System.out.println("double corresponde en byte = " + Double.BYTES);
        System.out.println("double corresponde en bits = " + Double.SIZE);
        System.out.println("double valor máximo = " + Double.MAX_VALUE);
        System.out.println("double valor mínimo = " + Double.MIN_VALUE);



        boolean valorBooleano = (3-2 == 1);
        System.out.println("Boolean = "+ valorBooleano);

        long numeroLong = 98239483;
        System.out.println("número Long = "+ numeroLong);
        System.out.println("long corresponde en byte = " + Long.BYTES);
        System.out.println("long corresponde en bits = " + Long.SIZE);
        System.out.println("long valor máximo = " + Long.MAX_VALUE);
        System.out.println("long valor mínimo = " + Long.MIN_VALUE);

        short numeroShort = 800;
        System.out.println("número Short = "+ numeroShort);
        System.out.println("Short corresponde en byte = " + Short.BYTES);
        System.out.println("Short corresponde en bits = " + Short.SIZE);
        System.out.println("Short valor máximo = " + Short.MAX_VALUE);
        System.out.println("Short valor mínimo = " + Short.MIN_VALUE);

        byte numeroByte = 1;
        System.out.println("Byte = "+ numeroLong);
        System.out.println("Byte corresponde en byte = " + Byte.BYTES);
        System.out.println("Byte corresponde en bits = " + Byte.SIZE);
        System.out.println("Byte valor máximo = " + Byte.MAX_VALUE);
        System.out.println("Byte valor mínimo = " + Byte.MIN_VALUE);

    }
}
