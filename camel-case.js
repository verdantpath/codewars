function toCamelCase(str){
  let arr = str.split('-');
  let camel = [];
  arr.forEach(function(word) {
    camel.push(word.charAt(0).toUpperCase() + word.substring(1))
  });
  let result = camel.join('');
  return result;
}

String.prototype.camelCase = function() {
  let arr = this.split(' ');
  let camel = [];
  arr.forEach( word => camel.push(word.charAt(0).toUpperCase() + word.substring(1)))
  let result = camel.join('');
  return result;
}

// console.log(toCamelCase('the-stealth-warrior'));

console.log("shitty fart pants".camelCase())