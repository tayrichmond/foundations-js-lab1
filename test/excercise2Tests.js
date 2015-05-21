// Test library deps
var assert = require('chai').assert;

// Functions being tested
var chooseAnimal = require('../lib/excercise2').chooseAnimal;

describe('excercise 2', function() {
  describe('#chooseAnimal()', function() {
    var valid_results = [ "elephant", "penguin", "eagle", "camel" ];
    var animal = chooseAnimal();
    assert.include(valid_results, animal, 'A valid animal must be returned'); 
  });
});
