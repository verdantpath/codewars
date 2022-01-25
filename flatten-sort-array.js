function flattenAndSort(arr) {
  let result = Array.prototype.concat.apply([], arr);
  return result.sort((a,b) => a-b);
}

function flattenAndSort(arr) {
  return Array.prototype.concat.apply([], arr).sort((a,b) => a-b);
}

// top submission
function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}