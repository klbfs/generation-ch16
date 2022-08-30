package com.klbf.principal;


import com.klbf.h_abstracta.Circulo;
import com.klbf.h_abstracta.Cuadrado;
import com.klbf.h_abstracta.Triangulo;

// Es mi clase principal (ocupamos main)
public class EjemploFigura {
    public static void main(String[] args) {

        // ----------------Triángulo
        // No se puede instanciar así: FigurasGeometricas fig = new FigurasGeometricas();

        // Solución: hacer instancia de clase concreta
        Triangulo triangulo1 = new Triangulo(0,0);
        System.out.println("Area = " + triangulo1.area());

        triangulo1.setBase(3);
        triangulo1.setAltura(3);
        System.out.println("Area = " + triangulo1.area());


        // ----------------Círculo
        Circulo circulo1 = new Circulo();
        circulo1.setRadio(2f);
        System.out.println("Area de circulo: " + circulo1.area());


        // ----------------Cuadrado
        Cuadrado cuadrado1 = new Cuadrado();
        cuadrado1.setLado(5);
        System.out.println("Area de cuadrado = " + cuadrado1.area());








    }
}
