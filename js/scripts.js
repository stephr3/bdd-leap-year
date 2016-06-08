// For words that start with a vowel, add "ay" to the end.
// For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay". (If the first consonants include // "qu", move the "u" along with the "q". Don't forget about words like "squeal" where the "qu" doesn't come first!)
//For words that start with "y", treat the "y" as a consonant.

// Pig Latin Business (or back-end) logic:
var vowels = ["a", "e", "i", "o", "u"];
var result = [];

var firstLetterVowel = function (wordArray) {
  for (var i=0; i<vowels.length; i++) {
    if (wordArray[0] === vowels[i]) {
      // wordArray.push(wordArray.shift());
      wordArray.push("a", "y");
      result = wordArray.join("");
    }
  }

};





// Pig Latin User interface (or front-end) logic:

$(document).ready(function() {

  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#pig-latin-input").val();
    var userInputArray = userInput.split("");
    firstLetterVowel(userInputArray);

    $(".pig-latin-result").text(result);

    $("#pig-latin-result").show();
  });


// Leap Year Business (or back-end) logic:
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

  // Leap-Year User interface (or front-end) logic:

  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = $("input#year").val();
    year = parseInt(year);
    var result = leapYear(year);

    if(year && !isNaN(year) && year > 0) {

      if (!result) { // same as writing if (result === false)
        $(".not").text("not");
      } else {
        $(".not").text("");
      }

      $(".year").text(year);
      $("#result").show();

    } else {
      alert("Please enter a year.");
    }

  });
});
