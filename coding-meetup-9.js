// top solution
function isAgeDiverse(list) {
  return list.some(h => h.age >= 100) 
  ? [10,20,30,40,50,60,70,80,90].every(e => list.some(x => x.age - e >= 0 && x.age - e <= 9))
  : false;
}

// second place, not sure I fully understand how it works, basically another .every() and .some() combination
function isAgeDiverse(list) {
  var ages = [10, 20, 30, 40, 50, 60, 70, 80, 90,100];
  return ages.every(function(age){
    return list.some(function(a){
      return (a.age-age<10 && a.age-age>=0 )||(a.age>=100 && age==100);
    });
  });
}

// sort of the direction I was going
const isAgeDiverse = list =>
  [ [10,20]
  , [20,30]
  , [30,40]
  , [40,50]
  , [50,60]
  , [60,70]
  , [70,80]
  , [80,90]
  , [90,100]
  , [100,200] 
  ].every( ([minAge,maxAge]) => list.some( v => v.age>=minAge && v.age < maxAge ) )
;

// my failures
function isAgeDiverse(list) {
  let ages = list.map(item => item.age)
  let ageGroups = [
    [11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29],
    [30,31,32,33,34,35,36,37,38,39],
    [40,41,42,43,44,45,46,47,48,49],
    [50,51,52,53,54,55,56,57,58,59],
    [60,61,62,63,64,65,66,67,68,69],
    [70,71,72,73,74,75,76,77,78,79],
    [80,81,82,83,84,85,86,87,88,89],
    [90,91,92,93,94,95,96,97,98,99],
    [100] // what about over 100?
  ]
  list.forEach(item => ages.push(item.age));
  console.log(ages);
  let diverse = false;

}

function isAgeDiverse(list) {
  // let ages = list.map(item => item.age)
  console.log(ages);
  let diverse = false;
  if (ages.includes(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)) {
    diverse = true;
  } else {
    diverse = false;
  }
return diverse;
}

// for each age group {
  // is there an array item
// }