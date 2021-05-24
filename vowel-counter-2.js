function getCount(str) {
  var vowelsCount = 0;  
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('')
  arr.forEach(item => {
    vowels.forEach(vowel => {
      if (item == vowel) {
        vowelsCount += 1;
      }
    });
  });
  return vowelsCount;
}