function partialApply(f, second) {
  return function(first) {
    return f(first, second);
  }
}
