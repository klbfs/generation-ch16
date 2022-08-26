package com.klbf.principal;

import com.klbf.herencia.BasePadre;

import java.util.Scanner;

public class EjecutarPadre {
    public static void main(String[] args) {



        BasePadre miPadre = new BasePadre();
        System.out.println("Primero definiremos a, b y c");
        miPadre.definirValores();
        Scanner input = new Scanner(System.in);
        System.out.println("Opción 1: visualizar 'a' ");
        System.out.println("Opción 2: visualizar 'a' 'b' 'c' ");
        System.out.println("Ingresa opcion: ");
        int opcion = input.nextInt();

        switch (opcion){
            case 1:

                miPadre.visualizarA();
                break;
            case 2:
                miPadre.visualizarABC();
                break;
            default:
                System.out.println("Opción no encontrada");
        }






    }

}
