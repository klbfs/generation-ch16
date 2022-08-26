package com.klbf.herencia;

import java.util.Scanner;

public class BasePadre {
    protected int a; // lo puede ver la clase padre e hijos
    private double b;
    private String c;

    // Método Constructor vacío
    public BasePadre() {
    }


    // Otros Métodos
    public void visualizarA(){

        System.out.println("El valor de a = " + getA());

    }
    public void definirValores(){
        Scanner input = new Scanner(System.in);
        System.out.println("Ingresa número entero a: ");
        int a = input.nextInt();
        setA(a);
        System.out.println("Ingresa número b: ");
        double b = input.nextDouble();
        setB(b);
        System.out.println("Ingresa c de tipo String: ");
        String c = input.next();
        setC(c);


    }

    public void visualizarABC(){
        int a = getA();
        double b = getB();
        String c = getC();

        System.out.println("El valor de a = " + a);
        System.out.println("El valor de b = " + b);
        System.out.println("El valor de c = " + c);

    }
    // Métodos set y get
    public int getA() {
        return a;
    }

    public double getB() {
        return b;
    }

    public String getC() {
        return c;
    }

    public void setA(int a) {
        this.a = a;
    }

    public void setB(double b) {
        this.b = b;
    }

    public void setC(String c) {
        this.c = c;
    }
}
