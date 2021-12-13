function mergeArrays(a, b) {
  let output = []
  if (a.length > b.length) {
    for (let i = 0; i < a.length; i++) {
      if (b[i] == undefined) {
        output.push(a[i]);
      } else {
        output.push(a[i], b[i]);
      }
    }
  } else {
    for (let i = 0; i < b.length; i++) {
      if (a[i] == undefined) {
        output.push(b[i]);
      } else {
        output.push(a[i], b[i])
      }
    }
  }
  return output;
}