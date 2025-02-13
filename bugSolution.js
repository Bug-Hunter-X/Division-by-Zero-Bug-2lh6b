function myFunc(a, b) {
  if (b === 0) {
    return Infinity; // Or another appropriate value, like NaN
  }
  if (a === 0) {
    return 0;
  }
  return a / b;
}