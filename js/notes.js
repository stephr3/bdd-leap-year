var vowels = ["a", "e", "i", "o", "u"];
var result = [];

var wordTranslator = function (wordArray) {
  for (var i=0; i<vowels.length; i++){
      console.log("letter: "+wordArray[0]+" "+"vowel: "+vowels[i]);
      if (wordArray[0] != vowels[i]) {
        wordArray.push(wordArray.shift());
        console.log(wordArray);
        break;
      }
    };

  wordArray.push("a", "y");
  result = wordArray.join("");
};

for (i=0; i<3; i++) {
  if (!checkIfVowel(wordArray[i])) {
    wordArray.push(wordArray.shift());
    console.log(wordArray);
    continue;
  }
}
