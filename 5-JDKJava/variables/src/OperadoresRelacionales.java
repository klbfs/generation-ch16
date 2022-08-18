public class OperadoresRelacionales {
    public static void main(String[] args) {

        int i = 3;
        byte j = 3;

        boolean b1 = i==j;
        System.out.println(i + " == "+ j + " = " + b1);


        boolean b2 = !b1;
        System.out.println("!"+ b1 + " = " + b2);

        j = 7;
        boolean b3 = i>j;
        System.out.println(i + " > "+ j + " = " + b3);

        System.out.println(i + " >= "+ j + " = " + (i>=j));

        System.out.println(i + " <= "+ j + " = " + (i<=j));




    }



}
