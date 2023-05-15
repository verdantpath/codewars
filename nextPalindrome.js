function nextPalindrome(val) {
  for (let i = val; i > 10; i++) {
    if (i.toString() == i.toString().split('').reverse().join('')) {
      return i;
    }
  }
}

function nextPal(val) {
  let i = val + 1;
  while (i.toString() != i.toString().split('').reverse().join('')) {
    i++
  }
  return i;
}