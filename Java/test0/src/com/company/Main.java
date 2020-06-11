package com.company;

public class Main {

    public static int[] generate(int n) {
        int[] res = new int[n];
        for (int i = 0; i < n; i++) {
            res[i] = i;
        }
        return res;
    }

    public static void main(String[] args) {
        int[] arr = generate(5);
        for (int i = 0; i < arr.length; i++) {
            arr[i] *= 2;
        }
        for (int e : arr) {
            System.out.println(e);
        }

        Rational rat = new Rational(1, 2);
        Rational rat2 = new Rational(1, 3);
        Rational rat3 = rat.add(rat2);
        int n = rat3.numer;
        int d = rat3.getDenom();
        System.out.println(n);
        System.out.println(d);
    }


}
