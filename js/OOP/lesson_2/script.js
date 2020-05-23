console.log(m3.solveLinear(2, 4));

let z = m3.complex(3, 1);
let z2 = m3.complex(2, 2);
let i = m3.complex(0, 1);
let w = m3.mul(z, z2);
let mod_a = m3.abs(5);
let mod_a2 = m3.abs(-5);
// let mod_w = w.module();
let mod_w = m3.absComplex(w);

function solve2(a, b, c) {
  let d = b * b - 4 * a * c;
  let result = [];
  if (d < 0) {
    result.push(m3.complex(-b / (2 * a), +Math.sqrt(-d) / (2 * a)));
    result.push(m3.complex(-b / (2 * a), -Math.sqrt(-d) / (2 * a)));
  } else {
    result.push((-b + Math.sqrt(d)) / (2 * a));
    result.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return result;
}