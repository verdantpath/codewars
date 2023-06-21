function findAdmin(list, lang) {
  let result = list.filter(item => item.language == lang && item.githubAdmin == "yes")
  return result;
}