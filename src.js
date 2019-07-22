function foo(a) {
  var b = 10;
  localize(['a', 'b\n', 'c'], 1, localize(['x', 'y', 'z'], 5, 6));

  localize`try\n${40 + 2}me`;
}

function bar(localize) {
  localize(['goodbye']);
}