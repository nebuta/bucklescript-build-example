// Generated by BUCKLESCRIPT VERSION 1.0.1 , PLEASE EDIT WITH CARE
'use strict';

var Jquery = require("jquery");

function set_attr() {
  var body = Jquery("body");
  body.attr("id", "test").css("color", "red");
  console.log("Done");
  return /* () */0;
}

exports.set_attr = set_attr;
/* jquery Not a pure module */
