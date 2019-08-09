function foo(a) {
  var b = 10;

  // tagged string, with binary expression
  localize`try\n${40 + 2}
  me`;

  // nested tags
  localize`a${1}b${localize`x${5}y${6}z`}c`;

  // es5
  localize(['try', 'me'], 40, 2);

  // embedded
  localize(['a', 'b', 'c'], 1, localize(['x', 'y', 'z'], 5, 6));

  // helper
  localize(__makeTemplateObject(['try', 'me'], ['try', 'me']), 40 + 2);
  localize(m(['try', 'me'], ['try', 'me']), 40 + 2);

  // inline helper
  localize((this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e})(['try', 'me'], ['try', 'me']), 40, 2);
}

function bar(localize) {
  // Not the global
  localize(['goodbye']);
}
