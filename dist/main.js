// Generated by BUCKLESCRIPT VERSION 1.0.1 , PLEASE EDIT WITH CARE
'use strict';

var Prime      = require("./prime");
var Pervasives = require("bs-platform/lib/js/pervasives");
var $$String   = require("bs-platform/lib/js/string");
var List       = require("bs-platform/lib/js/list");

function $neg$neg(i, j) {
  var _n = j;
  var _acc = /* [] */0;
  while(true) {
    var acc = _acc;
    var n = _n;
    if (n < i) {
      return acc;
    }
    else {
      _acc = /* :: */[
        n,
        acc
      ];
      _n = n - 1 | 0;
      continue ;
      
    }
  };
}

var primes = List.filter(Prime.is_prime)($neg$neg(2, 50));

var result = $$String.concat(", ", List.map(Pervasives.string_of_int, primes));

console.log("Finding prime numbers.");

console.log(result);

exports.$neg$neg = $neg$neg;
/* primes Not a pure module */