package com.company;

public class Rational {
    int numer;
    int denom;

    Rational(int n, int d) {
        numer = n;
        denom = d;
    }

    Rational(int n) {
        numer = n;
        denom = 1;
    }

    Rational() {
        numer = 0;
        denom = 1;
    }

    int getNumer() {
        return numer;
    }
    int getDenom() {
        return denom;
    }
    Rational add(Rational rat) {
        return new Rational(((numer * rat.denom) + (rat.numer * denom)), rat.denom * denom);
    }
}
