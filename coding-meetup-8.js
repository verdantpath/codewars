function allContinents(list) {
  let continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  let result = false;
  continents.forEach(function(item, index) {
    if (list.some(thing => thing.continent == item)) {
      result = true;
    } else {
      result = false; 
    }
  }); 
  return result;
}

// top solution
function allContinents(list) {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x => list.some(y => x==y.continent));
}