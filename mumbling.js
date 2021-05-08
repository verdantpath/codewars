function accum(s) {
	let arr = s.split('');
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    var chunk = arr[i].repeat(i + 1);
    chunk = chunk.charAt(0).toUpperCase() + chunk.substr(1).toLowerCase();
    output.push(chunk);
  }
  return output.join('-')
}


const accum = s => {
  let arr = s.split('');
  let output = [];
  arr.forEach( (item, index) => {
    let chunk = item.repeat(index + 1);
    chunk = chunk.charAt(0).toUpperCase() + chunk.substr(1).toLowerCase();
    output.push(chunk);
  });
  return output.join('-');
}

const accum = s => {
  let arr = s.split('');
  let chunkArr = [];
  let result = [];
  arr.forEach( (item, index) => {
    let chunk = item.repeat(index + 1);
    chunkArr.push(chunk);
  });
  chunkArr.forEach( (item) => {
    result.push(item.charAt(0).toUpperCase() + item.substr(1).toLowerCase());
  })
   return result.join('-');
}

const accum = s => {
  let arr = s.split('');
  const output = arr.map((item, index) => item.repeat(index + 1))
    .map(item => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())
    .join('-');
  return output;
}