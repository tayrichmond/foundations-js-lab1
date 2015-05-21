// Test library deps
var assert = require('chai').assert;
var _ = require('lodash-node');

// Functions being tested
var animalStats = require('../lib/excercise3').animalStats;
var animalIndexing = require('../lib/excercise3').animalIndexing;

describe('excercise 3', function() {
  var animalExhibitStats = {
    "numberOpen": 13,
    "number closed": 2,
    "petting-zoo-open": true,
    "mostPopular": "Lucky the Emperor Penguin",
    "2ndMostPopular": "Dumbo the Depressed Donkey"
  };

  describe('#animalStats()', function() {
    assert(_.isEqual(animalStats(), animalExhibitStats),
      'animalExhibitStats value should not change'
    );
  });
  describe('#animalIndexing()', function() {
    animalExhibitStats.mostPopular = null;
    animalExhibitStats.numberOpen = null;
    assert(_.isEqual(animalIndexing(), animalExhibitStats),
      'animalExhibitStats value should not change'
    );
  });
});
