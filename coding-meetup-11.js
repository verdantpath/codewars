const getAverageAge = list => {
  let arr = [];
  list.forEach(item => arr.push(item.age));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let arrSum = arr.reduce(reducer);
  return Math.round(arrSum / arr.length);
}

// top submission
function getAverageAge(list) {
  return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);
}