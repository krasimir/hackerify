var Hackerify = require('../index');
Hackerify(arguments, {
  './label': function() {
    return 'The answer is not always ';
  }
});

var a = require('./answer');
alert(a());