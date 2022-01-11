function toCamelCase(str) {
  var underscoreWords = str.split('_');
  var hyphenatedWords = str.split('-');
  var output = [];
  if (underscoreWords.length > 1) {
    for( i = 0; i < underscoreWords.length; i++) {
      if (i == 0) {
        output.push(underscoreWords[i])
      } else {
        output.push(underscoreWords[i].charAt(0).toUpperCase() + underscoreWords[i].substr(1));
      }
    }
  } else {
    for( i = 0; i < hyphenatedWords.length; i++) {
      if (i == 0) {
        output.push(hyphenatedWords[i])
      } else {
        output.push(hyphenatedWords[i].charAt(0).toUpperCase() + hyphenatedWords[i].substr(1));
      }
    }
  }
  return output.join('');
}

function generateHashtag(str) {
  if (str == '' || str.trim() == '') {
    return false;
  }
  var titleStr = str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );

  var output = '#' + titleStr.replace(/\s+/g, '');

  if (output.length > 140) {
    return false;
  } else {
    return output;
  } 
}

