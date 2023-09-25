function sumPows(num1,num2,num3) {
  return Math.pow(num1,3)
}

function eq_sum_powDig(hMax, exp) {
  var result = []
  for(let i = 0; i <= hMax; i++) {
    // console.log(i);
    if(i > 1) {
      var arr = String(i).split('');
      var sumOfPows = arr.reduce(function(acc,cur,exp) {
        console.log( acc + Math.pow(cur, exp), arr[0]);
      });
    }
  }
}
