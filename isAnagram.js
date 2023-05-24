var isAnagram = function(test, original) {
  const formatString = str => str.toLowerCase().split('').sort().join('');
  return formatString(test) == formatString(original);
};