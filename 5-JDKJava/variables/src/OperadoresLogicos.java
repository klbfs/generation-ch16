public class OperadoresLogicos {
    public static void main(String[] args) {
        int i = 3;
        byte j = 3;
        float k = 127e-7f;
        double l = 2.1415e3d;
        boolean m = true;

        boolean a = k<l; //true
        System.out.println("a = " + a);

        //&& disyunción
        System.out.println(k<l && i==j);
        System.out.println(k<l && i==j && m == false);
        System.out.println(i==j || m == false);






    }
}
