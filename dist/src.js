function foo(a) {
  var b = 10; // tagged string, with binary expression

  "try" + (40 + 2) + "me"; // nested tags

  "a" + 1 + "b" + ("x" + 5 + "y" + 6 + "z") + "c"; // es5

  'try' + 40 + 'me'; // embedded

  'a' + 1 + 'b' + ('x' + 5 + 'y' + 6 + 'z') + 'c'; // helper

  'try' + (40 + 2) + 'me';
  'try' + (40 + 2) + 'me'; // inline helper

  'try' + 40 + 'me';
}

function bar(localize) {
  // Not the global
  localize(['goodbye']);
}