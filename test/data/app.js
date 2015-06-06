var A = require('./A');
var B = require('./B');
var C = require('./C');

module.exports = function() {
  var message = '';
  message += 'I am ' + A + '. ';
  message += B.what + ' ' + B.description();
  message += ' ' + C();
  return message;
};