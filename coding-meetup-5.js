function countLanguages(list) {
  let languages = [];
  let languageCount = {};
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  list.forEach((item) => languages.push(item.language));
  languages = languages.filter(onlyUnique);
  console.log(languages);
  languages.forEach((item, index) => languageCount.language = '')
  console.log(languageCount);
}