let c = 33;
let d = 30;

if (c <= d) {
  console.log("True");
} else {
  console.log("False");
}

let num = 167;

if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("ODD");
}

let e = 30,
  f = 230,
  g = 23;

if (e > f && e > g) {
  console.log("e is the largest number " + e);
} else if (f > e && f > g) {
  console.log("f is the largest number " + f);
} else {
  console.log("g is the largest number " + g);
}

e > f && e > g
  ? console.log("e is the largest number " + e)
  : console.log("g is the largest number " + g);
