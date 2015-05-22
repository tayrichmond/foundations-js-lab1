/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
var sentence1 = "More food please",
    sentence2 = "Come over here so you can scratch my belly";
*/

/*
 TODO: 20 points
 Your goal is to replace the words in the above sentences with "chirp" The
 test cases should pass when you're done. You'll be writing your code in
 the below functions Use **two** different types of loops to implement this.
 Specifically, a different loop type for each function. Return the translated
 sentance in your implemented function.
 HINT: the "split" method on String will be useful.
*/

exports.meerkatTalkOne = function() {
  var sentence = "More food please";
  var senToArray = sentence.split(' ');

  for (var i = 0; i < senToArray.length; i++) {
    senToArray[i] = 'chirp';
  }

  sentence = senToArray.join(' ');

  return sentence;
};

exports.meerkatTalkTwo = function() {
  var sentence = "Come over here so you can scratch my belly";
  var senToArray = sentence.split(' ');

  var i = 0;
  while (i < senToArray.length) {
    senToArray[i] = 'chirp';
    i++;
  }

sentence = senToArray.join(' ');

return sentence;
};
