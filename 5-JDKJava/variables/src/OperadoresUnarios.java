public class OperadoresUnarios {

    public static void main(String[] args) {
        int i = -5;

        //Operador unario positivo +
        int j = +5; // j = (1)*(i) -> -5
        System.out.println("j = " + j);
        //Operador unario negativo -
        int k = -i; // k = (-1)*(i) -> 5
        System.out.println("k = " + k);
    }
}
