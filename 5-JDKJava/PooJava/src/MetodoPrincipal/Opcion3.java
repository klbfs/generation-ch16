package MetodoPrincipal;

import MiFecha.Fecha;

import java.util.Scanner;

public class Opcion3 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Fecha otraFecha = new Fecha();
        System.out.println("Ingresa tu día: ");
        int miDia = input.nextInt();
        otraFecha.setDia(miDia);
        System.out.println("Ingresa tu mes: ");
        int miMes = input.nextInt();
        otraFecha.setMes(miMes);
        System.out.println("Ingresa tu año: ");
        int miAnio = input.nextInt();
        otraFecha.setAnio(miAnio);

        System.out.println(otraFecha.formaF());
    }
}
