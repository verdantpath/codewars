function count (string) {  
  let arr = string.split('');
  let result = {}
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    result[item] = result[item] ? result[item] + 1 : 1;
  }
  return result;
}