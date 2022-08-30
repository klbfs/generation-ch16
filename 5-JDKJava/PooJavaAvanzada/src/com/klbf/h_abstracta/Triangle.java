package com.klbf.h_abstracta;


// En clase Triángulo se define cálculo de área
// Papá es 'FigurasGeometricas'
public class Triangle extends FigurasGeo{
    private float base;
    private float altura;

    public Triangle(float otraBase, float otraAltura){
        super("triangulo"); // pq el constructor de padre no está vacío
        this.base = otraBase;
        this.altura = otraAltura;

    }

    // ----------------Método abstracto
    // Implementamos método de clase abstracta (Papá)
    @Override // sobreescribimos el método heredado
    public float area() {

        return (getBase() * getAltura())/2;
    }

    // ----------------Métodos GET y SET para acceder a variables privadas
    public float getBase() {
        return base;
    }

    public void setBase(float base) {
        this.base = base;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }




}
