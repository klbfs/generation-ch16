package com.klbf.h_abstracta;

public class Cuadrado extends FigurasGeometricas{
    private float b;

    @Override
    public float area() {
        return (getB());
    }

    public float getB() {
        return b;
    }

    public void setB(float b) {
        this.b = b;
    }
}
