package com.klbf.principal;

import com.klbf.h_abstracta.Circle;
import com.klbf.h_abstracta.Circulo;
import com.klbf.h_abstracta.Triangle;
import com.klbf.h_abstracta.Triangulo;

public class EjemploFigurasGeo {

    public static void main(String[] args) {
        // ----------------Triángulo

        Triangle t1 = new Triangle(5,10);
        System.out.println(t1);

        // ----------------Círculo
        Circle c1 = new Circle(5);
        System.out.println(c1);
    }


}
