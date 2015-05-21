// Test library deps
var expect = require('chai').expect;

// Function being tested
var numDays = require('../lib/excercise4').numDays;

describe('excercise 4', function() {
  describe('#numDays()', function() {
    expect(numDays()).to.equal(7);
  });
});
