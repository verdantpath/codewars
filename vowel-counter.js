function vowelIndices(word){
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var vowelsFound = [];
  var wordArr = word.split('');
  wordArr.forEach((item, index) => {
    vowels.forEach((vowel) => {
      if (item.toLowerCase() == vowel.toLowerCase()) {
        vowelsFound.push(index + 1)
      }
    });
  });
  return vowelsFound;
}