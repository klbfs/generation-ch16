import java.util.*;
import java.lang.Math;

public class Diccionario {

    public static void main(String[] args) {
        Map<String, String> palabras = new HashMap<String, String>();

        // -----> Agregar valores
        palabras.put("love","amor");
        palabras.put("peace","paz");
        palabras.put("elephant","elefante");
        palabras.put("dog","perro");
        palabras.put("bear","oso");
        palabras.put("door","puerta");
        palabras.put("dinosaur","dinosaurio");
        palabras.put("ant","hormiga");
        palabras.put("desk","escritorio");
        palabras.put("mouse","ratón");
        palabras.put("rabbit","conejo");
        palabras.put("duck","pato");
        palabras.put("shoe","zapato");
        palabras.put("death","muerte");
        palabras.put("camel","camello");
        palabras.put("beach","playa");
        palabras.put("sand","arena");
        palabras.put("mouth","boca");
        palabras.put("music","musica");
        palabras.put("toy","juguete");

        Random random = new Random();
        int num1 = random.nextInt(palabras.size());


        //Escoger 5 palabras aleatorias en español
        int num;
        for (int i=0; i<5; i++){
            num = random.nextInt(palabras.size());
            Object llavesArray = palabras.keySet().toArray()[num];
            System.out.println(palabras.get(llavesArray));

        }
        Scanner inputUsuario = new Scanner (System.in);
        System.out.println("Ingresa palabra en inglés");
        String buscar = inputUsuario.next();

        // Pedir al usuario que teclee la palabra en inglés y que se imprima la traducción
        for (int i=0; i<palabras.size(); i++){
            Object llavesArray = palabras.keySet().toArray()[i];
            Object valor = palabras.get(llavesArray);
            if (buscar.equals(llavesArray)){
                System.out.println(valor);
            }

        }

        // Extra
        int vida=0;
        int fallas=0;
        for (int i=0; i< palabras.size(); i++){
            Object llavesArray = palabras.keySet().toArray()[i];
            Object valor = palabras.get(llavesArray);
            System.out.println("Ingresa traducción de " + llavesArray);
            String buscar1 = inputUsuario.next();
            if (valor.equals(buscar1)){
                System.out.println("correcto");
                vida += 1;
            }



        }
        System.out.println("puntos correctos: " + vida);
        fallas = palabras.size()-vida;
        System.out.println("puntos incorrectos: " + fallas);









    }











}
