// Test library deps
var expect = require('chai').expect;
var assert = require('chai').assert;

// Functions being tested
var meerkatTalkOne = require('../lib/excercise1').meerkatTalkOne;
var meerkatTalkTwo = require('../lib/excercise1').meerkatTalkTwo;

describe('excercise 1', function() {
  describe('#meerkatTalkOne()', function() {
    expect(meerkatTalkOne()).to.equal('chirp chirp chirp');
  });
  describe('#meerkatTalkTwo()', function() {
    expect(meerkatTalkTwo()).to.equal('chirp chirp chirp chirp chirp chirp chirp chirp chirp');
  });
});
