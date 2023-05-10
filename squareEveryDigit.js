function squareDigits(num){
  const result = [];
  const arr = String(num).split('');
  arr.forEach(function(item) {
    result.push(Math.pow(item,2));
  });
  return Number(result.join(''));
}