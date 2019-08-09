function foo(a) {
  var b = 10;
  localize`try\n${40 + b}
  me`;  // tagged string, with binary expression
  localize`a${1}b${localize`x${5}y${6}z`}c`;  // nested tags
  localize(['try', 'me'], 40, 2);  // es5
  localize(['a', 'b', 'c'], 1, localize(['x', 'y', 'z'], 5, 6));  // embedded
  localize(__makeTemplateObject(['try', 'me'], ['try', 'me']), 40 + 2);  // helper
  localize(m(['try', 'me'], ['try', 'me']), 40 + 2);   // aliased helper
  localize((this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e})(['try', 'me'], ['try', 'me']), 40, 2);  // inline helper
}

function bar(localize) {
  localize(['goodbye']);  // Not the global `localize`
}
