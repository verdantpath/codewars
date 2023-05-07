function shorter_reverse_longer(a,b){
  if (a.length < b.length) {
    return `${a}${b.split('').reverse().join('')}${a}`
  } else {
    return `${b}${a.split('').reverse().join('')}${b}`
  }
}

const shorter_reverse_longer = (a,b) => a.length < b.length ? `${a}${b.split('').reverse().join('')}${a}` : `${b}${a.split('').reverse().join('')}${b}`