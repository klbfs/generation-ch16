package MetodoPrincipal;

import EjemplosResumen.Animal;

import java.util.Scanner;

public class Opcion4 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Animal otroAnimal = new Animal();
        System.out.println("Ingresa nombre de animal:");
        String nombre = input.next();
        System.out.println("Ingresa edad de animal:");
        int edad = input.nextInt();
        System.out.println("Ingresa raza de animal:");
        String raza = input.next();
        otroAnimal.setNombre(nombre);
        otroAnimal.setEdad(edad);
        otroAnimal.setRaza(raza);
        System.out.println("Animal de nombre "+ otroAnimal.getNombre()+" tiene "+otroAnimal.getEdad()+" años y es un "+ otroAnimal.getRaza());
    }
}
