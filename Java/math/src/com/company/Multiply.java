package com.company;

public class Multiply {
    static int test0(int n, int m) {
        int result = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                System.out.print(i);
                System.out.print(' ');
                System.out.println(j);
                result++;
            }
        }
        System.out.println(result);
        return result;
    }

    static int test1(int n) {
        int result = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == j) {
                    continue;
                }
                System.out.print(i);
                System.out.print(' ');
                System.out.println(j);
                result++;
            }
        }
        System.out.println(result);
        return result;
    }

    static int test2(int n) {
        int result = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i < j) {
                    System.out.print(i);
                    System.out.print(' ');
                    System.out.println(j);
                    result++;
                }
            }
        }
        System.out.println(result);
        return result;
    }

    static int test3(int n) {
        int result = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                System.out.print(i);
                System.out.print(' ');
                System.out.println(j);
                result++;
            }
        }
        System.out.println(result);
        return result;
    }
}
