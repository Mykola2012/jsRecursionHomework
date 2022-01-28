"use strict";

console.group("Task 1");

function pow(base, exponent) {
  let result = base;
  let i = 1;

  getPow();

  function getPow() {
    i++;
    result *= base;
    if (i >= exponent) return;
    getPow();
  }
  return result;
}

function powTwo(base, exponent) {
  if (exponent === 1) {
    return base;
  } else {
    return base * powTwo(base, exponent - 1);
  }
}

console.log("pow() :>> ", pow(5, 5));
console.log("powTwo() :>> ", powTwo(5, 5));

console.groupEnd();

console.group("Task 2");

function bracketWrapper(n) {
  wrapper(n);

  function wrapper(n) {
    if (n === 0) return;
    console.log("(");
    wrapper(n - 1);
    console.log(")");
  }
  return;
}

bracketWrapper(3);

console.groupEnd();
