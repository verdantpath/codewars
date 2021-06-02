// my solution
function greetDevelopers(list) {
  return list.map(item => ({...item, greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`}))
}

// top solution
function greetDevelopers(list) {
  list.forEach(function(developer) {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
  });
  
  return list;
}

// another solution, what does the second param in the callback do? Return the object so it isn't replaced by the new param?
function greetDevelopers(list) {
  return list.map(x => (x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`, x));
}