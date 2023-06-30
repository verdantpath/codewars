// first attempt
function isSameLanguage(list) {
  let count = 0;
  list.forEach(function(item) {
    if (item.language == list[0].language) {
      // console.log('item.language: ' + item.language + ' ' + 'list[index].language: ' + list[index].language);
      count++;
    }
  });
  return count == list.length;
}

// second attempt (submitted)
const isSameLanguage = list => {
  let result = list.filter(item => item.language == list[0].language);
  return result.length == list.length;
}

// top solution uses Array.prototype.every() method
function isSameLanguage(list) {
  return list.every(e => e.language === list[0].language);
}