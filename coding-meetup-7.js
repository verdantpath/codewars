// top solution
function findSenior(list) {
  var maxAge = Math.max(...list.map(person => person.age));
  return list.filter(person => person.age === maxAge);
}

// my solution, seems to work but wouldn't pass all the tests
function findSenior(list) {
  let senior = 0;
  let seniors = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].age >= senior) {
      seniors.push(list[i]);
      senior = list[i].age;
    }
  }
  return seniors;
}

