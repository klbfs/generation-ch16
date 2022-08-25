package EjemplosResumen;

public class EjemploAnimal {

    public static void main(String[] args) {

        Animal miAnimal = new Animal("Willie", 2, "pug");

        miAnimal.setEdad(3);

        System.out.println("El nombre de miAnimal es " + miAnimal.getNombre() + " tiene "+miAnimal.getEdad()+" años y es de raza "+ miAnimal.getRaza());

        Animal miAnimal2 = new Animal();
        int edad2 = miAnimal.getEdad();
        String raza2 = miAnimal.getRaza();
        miAnimal2.setEdad(edad2);
        miAnimal2.setRaza(raza2);
        miAnimal2.setNombre("Fiona");

        System.out.println("miAnimal2 se llama " + miAnimal2.getNombre() + " tiene " + miAnimal2.getEdad() + " años y es de raza " + miAnimal2.getRaza());













    }




}
