function frame(phrase, ch) {
  ch = ch || "*";
  let firstLine = `${ch.repeat(phrase.length + 4)}`;
  let secondLine = `${ch}${" ".repeat(phrase.length + 2)}${ch}`;
  let thirdLine = `${ch} ${phrase} ${ch}`
  let fourthLine = `${ch}${" ".repeat(phrase.length + 2)}${ch}`;
  let fifthLine = `${ch.repeat(phrase.length + 4)}`;
if (phrase) {
return `${firstLine}
${secondLine}
${thirdLine}
${fourthLine}
${fifthLine}`
} else {
return `${firstLine}
${secondLine}
${fourthLine}
${fifthLine}`
}
}