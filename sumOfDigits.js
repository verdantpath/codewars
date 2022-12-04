function digitalRoot(n) {
  let result = n;
  while (String(result).split('').length > 1) {
    result = String(result).split('').reduce((acc, val) => acc + Number(val), 0)
  }
  return result;
}