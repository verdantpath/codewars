function numberSquares(n) {
  if (n == 0) {
    return 0
  }
  return Math.pow(n,2) + numberSquares(n-1)
}
let numberSquares=n=>n==0?0:Math.pow(n,2)+numberSquares(n-1)
