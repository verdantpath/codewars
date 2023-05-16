function numberJoy(n) {
  function digitSum(n) {
    let arr = n.toString().split('');
    return arr.reduce((acc,cur) => acc + Number(cur), 0)
  }
  function reverseDigit(n) {
    return Number(n.toString().split('').reverse().join(''));
  }
  return n%digitSum(n) == 0 && digitSum(n) * reverseDigit(digitSum(n)) == n
}