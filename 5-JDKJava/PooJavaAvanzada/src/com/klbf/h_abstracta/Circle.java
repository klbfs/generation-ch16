package com.klbf.h_abstracta;

public class Circle extends FigurasGeo{

    private float radio;

    // Constructor ya no es vacío  PARTE A**
    public Circle(float radio) {
        super("circulo"); // constructor de padre no está vacío
        this.radio = radio;
    }


    // Método abstracto heredado
    @Override
    public float area() {

        return (float) (Math.PI * Math.pow(radio,2));
    }

    public float getRadio() {
        return radio;
    }

    public void setRadio(float radio) {
        this.radio = radio;
    }
}
