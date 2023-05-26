function isIsogram(str){
  let strArray = str.toLowerCase().split('');
  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
  return findDuplicates(strArray).length ? false : true;
}