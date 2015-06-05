(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Hackerify = require('../index');
Hackerify(arguments, {
  './label': function() {
    return 'The answer is not always ';
  }
});

var a = require('./answer');
alert(a());
},{"../index":4,"./answer":2}],2:[function(require,module,exports){
var label = require('./label');
module.exports = function() {
  return label() + 42;
}
},{"./label":3}],3:[function(require,module,exports){
module.exports = function() {
  return 'The answer is: ';
}
},{}],4:[function(require,module,exports){
module.exports = function(args, stub) {
  args = [].slice.call(args);
  var modules = args[4];
  if(modules) {
    var collection = {};
    for(var i in modules) {
      var map = modules[i][1];
      for(var mName in map) {
        collection[mName] = map[mName];
      }
    }
    for(var s in stub) {
      if(collection[s]) {
        modules[collection[s]] = [(function(st) {
          return function(require, module, exports) {
            module.exports = st;
          };
        })(stub[s]), {}];
      }
    }
  } else {
    throw new Error('Missing modules\' collection');
  }
};
},{}]},{},[1]);
