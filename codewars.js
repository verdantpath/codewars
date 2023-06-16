// codewars

function countBy(x, n) {
  let z = [];
  for (var i = 0; i < n; i++) {
    //var count =  x + (x * i)
    z.push(x + (x * i));
  }
  return z;
}

function cockroachSpeed(s) {
  return Math.floor(s / 3600 * 100000);
}

function nearestSq(n){
  return Math.pow(Math.round(Math.sqrt(n)), 2)
}