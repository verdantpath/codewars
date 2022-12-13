function derDieDas(wort){
  let vowels = wort.match(/[aeiouäöü]/ig)
  if (vowels) {
    let count = vowels.length;
     if (count < 2) {
      return "das " + wort;
    } else if (count > 3) {
      return "der " + wort;
    } else {
      return "die " + wort;
    }
  }
  return "das " + wort;
}