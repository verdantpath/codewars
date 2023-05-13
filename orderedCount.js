const orderedCount = function (text) {
  return [...text].reduce((acc,cur) => { acc[cur] = acc[cur] ? acc[cur] + 1 : 1; return acc}, []);
}

var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
