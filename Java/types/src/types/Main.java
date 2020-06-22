package types;

public class Main {

    public static void main(String[] args) {
        byte b = 31;
        float f = 12.12f;
        double d = 12.12;
//        System.out.println(11.0/5);
        div(10, (int)2.5);
    }

    public  static double div(double a, double b) {
        System.out.println(a / b);
        return a / b;
    }
}
