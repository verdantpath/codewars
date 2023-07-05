function average(scores) {
  let total = scores.reduce((acc, cur) => acc + cur);
  return Math.round(total / scores.length);
}