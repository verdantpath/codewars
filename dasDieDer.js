function derDieDas(wort){
  let count = wort.match(/[aeiouäöü]/ig).length;
  if (count < 2) {
    return "das " + wort;
  } else if (count > 3) {
    return "der " + wort;
  } else {
    return "die " + wort;
  }
}