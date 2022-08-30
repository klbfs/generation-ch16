package com.klbf.h_abstracta;




public abstract class FigurasGeo {


    // Método vacío - sólo se define
    public abstract float area();

    //---------usando clase abstracta como concreta
    // Atributo
    private String nombre;





    // Constructor:  PARTE A**
    public FigurasGeo(String nombre) {
        this.nombre = nombre;
    }


    /*
     Método toString: heradado de la clase Object - extends Object
     Nos retorna todo lo que yo lo mande
     Este método está presente en TODAS LAS CLASES (nos evitamos
     llamar a un método, pues basta con el propio objeto)
    */
    @Override
    public String toString() {
        return nombre + " area -> " + area();
        //esta area() viene del objeto, como Triangle y Circle
    }

}
