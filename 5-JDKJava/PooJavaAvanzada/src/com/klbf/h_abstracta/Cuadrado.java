package com.klbf.h_abstracta;

public class Cuadrado extends FigurasGeometricas{
    private float lado;


    // Método abstracto - definimos particularidad de área en cuadrado

    @Override
    public float area() {

        return (float)(Math.pow(getLado(),2));
    }


    // Métodos GET y SET


    public float getLado() {
        return lado;
    }

    public void setLado(float lado) {
        this.lado = lado;
    }
}
