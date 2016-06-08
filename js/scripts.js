// For words that start with a vowel, add "ay" to the end.
// For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay".
// (If the first consonants include // "qu", move the "u" along with the "q". Don't forget about words like "squeal" where the "qu" doesn't come first!)
//For words that start with "y", treat the "y" as a consonant.
// For words that begin with a single consonant, the program should move the first consonant to the end of the word, then add "ay".

// Pig Latin Business (or back-end) logic:

//Set Global Variable
var result = [];

//Check if letter is a vowel
var checkIfVowel = function (letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (i=0; i<vowels.length; i++) {
    if (letter === vowels[i]) {
      return true
    }
  }
};

//Translate a single word to pig latin
var wordTranslator = function(word) {

  var wordArray = word.split("");

  //checking for words that begin with "qu"
  if (wordArray[0] === "q" && wordArray[1] === "u") {
    wordArray.push(wordArray.shift());
    wordArray.push(wordArray.shift());
  }

  //checking for 3 consonants
  else if (!checkIfVowel(wordArray[0]) && !checkIfVowel(wordArray[1]) && !checkIfVowel(wordArray[2])) {
    wordArray.push(wordArray.shift());
    wordArray.push(wordArray.shift());
    wordArray.push(wordArray.shift());
  }

  //checking for two consonants
  else if (!checkIfVowel(wordArray[0]) && !checkIfVowel(wordArray[1])) {
    wordArray.push(wordArray.shift());
    wordArray.push(wordArray.shift());
  }
//checking for one consonant
  else if (!checkIfVowel(wordArray[0])) {
    wordArray.push(wordArray.shift());
  }
//all words get this treatment
    wordArray.push("ay");
    result.push(wordArray.join(""));
};

//Run multiple words through translator function
var multiWord = function(word){
  result = [];
  word.split(" ").forEach(wordTranslator);
  result = result.join(" ");
};

// Pig Latin User interface (or front-end) logic:
$(document).ready(function() {

  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#pig-latin-input").val();
    multiWord(userInput);

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
