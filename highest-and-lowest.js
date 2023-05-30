const highAndLow = numbers => {
  let arr = numbers.split(' ');
  let low = arr.reduce((a, b) => Math.min(a, b));
  let high = arr.reduce((a, b) => Math.max(a, b));
  return `${high} ${low}`
}
return 'undefined'.split('');