var chai = require('chai');
var expect = chai.expect;

var Hackerify = require('../index');
Hackerify(arguments, {
  './A': 'H.a.c.k.e.r.f.y',
  './B': {
    what: 'A node module.',
    description: function() {
      return 'My job is stubbing required modules within Browserify.';
    }
  },
  './D': {
    loc: function() {
      return 24;
    }
  }
});

describe('Given a browserify bundle', function() {

  it('With stubbing', function(done) {    
    var app = require('./data/app');
    expect(app()).to.be.equal('I am H.a.c.k.e.r.f.y. A node module. My job is stubbing required modules within Browserify. LOC: 24');
    done();
  });

});