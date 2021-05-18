const countDevelopers = list => {
  let result = 0; 
  list.forEach(item => item.continent == "Europe" && item.language == "JavaScript" ? result++ : result)
  return result;
}