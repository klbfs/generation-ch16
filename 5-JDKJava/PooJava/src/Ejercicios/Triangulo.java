package Ejercicios;

import org.w3c.dom.ls.LSOutput;

public class Triangulo {

    private int base;
    private int altura;

    // Constructor Triangulo
    public Triangulo(){

    }

    // Métodos


    public int getBase() {
        return base;
    }

    public int getAltura() {
        return altura;
    }

    public void setBase(int otraBase) {
        base = otraBase;
    }

    public void setAltura(int otraAltura) {
        altura = otraAltura;
    }

    public int areaT(){
        int b = getBase();
        int h = getAltura();
        int area = b * h;
        return area;
    }

    public String visualizarA(){
        int area = areaT();
        String resultado = "El área es de " + area;
        return resultado;
    }


}
