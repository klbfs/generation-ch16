public class OperadoresIncrementales {
    public static void main(String[] args) {

        //Operadores incrementales syntaxis
        //Preincremento - Postincremento

        int i = 1;
        int j = ++i;
        // Preincremento: incrementa y luego devuelve
        // 1)Incrementa en 'i': i = i+1
        // 2) Devuelve valor en 'j': j = i -> 2
        System.out.println("i = " + i);
        System.out.println("j = " + j);

        //Postincremento: devuelve y luego incrementa
        i = 2;
        j = i++;

        System.out.println("i = " + i);
        System.out.println("j = " + j);


        i = 1;
        j = --i;
        // Preincremento: decrementa y luego devuelve
        System.out.println("i = " + i);
        System.out.println("j = " + j);

        i = 2;
        j = i--;
        // Postincremento: devuelve y luego decrementa
        System.out.println("i = " + i);
        System.out.println("j = " + j);


    }
}
