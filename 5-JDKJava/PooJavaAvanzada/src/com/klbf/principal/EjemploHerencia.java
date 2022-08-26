package com.klbf.principal;

import com.klbf.herencia.BasePadre;
import com.klbf.herencia.Hija;
import com.klbf.herencia.Hija2;

public class EjemploHerencia {
    public static void main(String[] args) {
        //EjecutarPadre.main(args);


        BasePadre obj = new BasePadre();
        obj.setA(2357);
        // Con Clase Hija puedo acceder a los métodos y atributos de BasePadre
        Hija h = new Hija();
        System.out.println(" Atributo 'a' de papá: " + h.getA()); // no se puede acceder poque es privado

        // Clase Hija2
        Hija2 h1 = new Hija2();
        //h1.definirValores();
    }
}
