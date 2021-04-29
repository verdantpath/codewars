function toCamelCase(str){
  let arr = str.split('-');
  let camel = [];
  arr.forEach(function(word) {
    camel.push(word.charAt(0).toUpperCase() + word.substring(1))
  });
  let result = camel.join('');
  return result;
}

// console.log(toCamelCase('the-stealth-warrior'));

String.prototype.camelCase = function() {
  let arr = this.split(' ');
  let camel = [];
  arr.forEach( word => camel.push(word.charAt(0).toUpperCase() + word.substring(1)))
  let result = camel.join('');
  return result;
}

console.log("lorem ipsum dolor sit amet".camelCase())

// top solution from other submitter

String.prototype.camelCase=function(){
  return this.split(' ').map(function(word){
   return word.charAt(0).toUpperCase() + word.slice(1);
 }).join('');
}