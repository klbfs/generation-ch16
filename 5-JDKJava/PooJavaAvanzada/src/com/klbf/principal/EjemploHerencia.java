package com.klbf.principal;

import com.klbf.herencia.BasePadre;
import com.klbf.herencia.Hija;
import com.klbf.herencia.Hija2;

public class EjemploHerencia {
    public static void main(String[] args) {
        //EjecutarPadre.main(args);

        //Resumen. Hijos heredan de Padre, sin embargo cada quien tiene
        // sus propios atributos definidos (manos)



        BasePadre obj = new BasePadre();
        obj.setA(2357);
        // Con Clase Hija puedo acceder a los métodos y atributos de BasePadre
        Hija h = new Hija();
        h.setA(2);
        System.out.println(" Atributo 'a' de papá: " + obj.getA()); // no se puede acceder poque es privado
        System.out.println(" Atributo 'a' de hija: " + h.getA());


        // Clase Hija2
        Hija2 h1 = new Hija2();
        //h1.definirValores();
    }
}
