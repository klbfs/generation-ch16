package com.klbf.jInterface;

public class EjemploTest {
    public static void main(String[] args) {

        // 1era forma
        System.out.println("Test.CONV = " + Test.CONV);

        // 2da forma con clase que implementa la interfaz
        System.out.println("Prueba.CONV = " + Prueba.CONV);

        // 3ra forma con instancia

        Prueba p = new Prueba();
        System.out.println("p.CONV = " +  p.CONV);

        // 4ta forma Instancia de tipo referencia

        // --->NO SE PUEDE: Test ts = new Test();
        // --->SOLUCIÓN: crearlo de una clase concreta (prueba)
        Test ts = new Prueba();
        // objeto de tipo interfaz que se crea con la clase que la implementa


        ts.metodo1(3);
        System.out.println(ts.metodo2("hola"));
        //ts.metodoPropio(); -----no se puede
        System.out.println( p.metodoPropio());

        Test2 ts2 = new Prueba();
        System.out.println("ts2.metodo22 ------> " + ts2.metodo22("halloween"));
    }
}
