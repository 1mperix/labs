'use strict';

const seq = (f) => (g) => (typeof g === 'number' ? f(g): seq((x) => f(g(x))));

console.log(seq(x => x + 7)(x => x * 2)(5));

