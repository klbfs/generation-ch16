package EjemplosResumen;

public class Animal {

    // Atributos
    private String raza;
    private String nombre;
    private int edad;

    public Animal(String nuevoNombre, int nuevaEdad, String nuevaRaza){

        nombre = nuevoNombre;
        edad = nuevaEdad;
        raza = nuevaRaza;
    }

    public Animal() {

    }

    // Métodos


    public void setEdad(int nuevaEdad) {
        edad = nuevaEdad;
    }
    public void setRaza(String nuevaRaza) {
        raza = nuevaRaza;
    }

    public void setNombre(String nuevoNombre) {
        nombre = nuevoNombre;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public String getRaza() {
        return raza;
    }


}
