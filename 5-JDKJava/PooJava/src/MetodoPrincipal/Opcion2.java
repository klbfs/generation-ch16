package MetodoPrincipal;

import MiEjemploJava.Persona;

import java.util.Scanner;

public class Opcion2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Persona otraPersona = new Persona();
        System.out.println("Ingresa tu nombre");
        String miNombre = input.next();
        otraPersona.setNombre(miNombre);
        System.out.println("Ingresa tu edad");
        int miEdad = input.nextInt();
        otraPersona.setEdad(miEdad);
        System.out.println("Me llamo "+otraPersona.getNombre()+" y tengo "+otraPersona.getEdad()+" años");
    }
}
