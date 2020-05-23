const m3 = {
  solveLinear(k, b) { // k * x + b = 0
    return -b / k;
  },
  complex(re, im = 0) {
    return {re, im};
  },
  mul(z1, z2) {
    return this.complex(
      z1.re * z2.re - z1.im * z2.im,
      z1.im * z2.re + z1.re * z2.im
    );
  },
  abs(a) {
    if (a >= 0) {
      return a;
    } else {
      return -a;
    }
  },
  absComplex(z) {
    return Math.sqrt(z.re * z.re + z.im * z.im);
  },
};

