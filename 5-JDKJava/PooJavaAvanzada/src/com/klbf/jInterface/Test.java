package com.klbf.jInterface;
// clase interfaz
// Sólo se tienen 'declaraciones' de métodos y atributos
public interface Test {
    // atributos sin modificadores de acceso
    int CONV = 8;


    // métodos
    void metodo1(int x);
    String metodo2(String s);

}

// declaramos una clase interna 'Prueba':
class Prueba implements Test,Test2{


    // Se tienen que implementar los métodos de Test
    @Override
    public void metodo1(int x) {
        System.out.println("Hola método1 parámetro x ----> " + x);
    }

    @Override
    public String metodo2(String s) {
        return "Este parámetro es s ----> " + s;
    }

    // método propio de clase prueba
    public String metodoPropio(){
        return "mi método propio de Prueba";
    }

    @Override
    public void metodo12(int x) {

    }

    @Override
    public String metodo22(String s) {
        return s;
    }
}
