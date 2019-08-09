function foo(a) {
  var b = 10;
  "try\n" + (40 + b) + "\n  me"; // tagged string, with binary expression

  "a" + 1 + "b" + ("x" + 5 + "y" + 6 + "z") + "c"; // nested tags

  'try' + 40 + 'me'; // es5

  'a' + 1 + 'b' + ('x' + 5 + 'y' + 6 + 'z') + 'c'; // embedded

  'try' + (40 + 2) + 'me'; // helper

  'try' + (40 + 2) + 'me'; // aliased helper

  'try' + 40 + 'me'; // inline helper
}

function bar(localize) {
  localize(['goodbye']); // Not the global `localize`
}