// top solution
const orderFood = list => {
  var orders = {};
  list.forEach(item=>{
    if (orders[item.meal]) {
      orders[item.meal]++;
    } else {
      orders[item.meal] = 1;
    }
  });
  return orders;
}

// another good one
const orderFood = a => a.reduce( (acc,v) => ( acc[v.meal] = ( acc[v.meal] || 0 ) + 1, acc ), {} ) ;

// and another good one
function orderFood(list) {
  var res = {};
  
  list.forEach(function (item) {
    res[item.meal] = res.hasOwnProperty(item.meal) ? res[item.meal] + 1 : 1;
  });
  
  return res;
}

// my failed attempts
function orderFood(list) {
  let options = ['standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'];
  let obj = {}
  for (let i = 0; i < options.length; i++) {
    console.log('i ' + i + ' options[i] ' + options[i]);
    // obj.options[i]: 0;
    obj.i = 0;
  }
  console.log(obj);
}

// from stackoverflow, convert an array to object, basically uses the object id as the key for each property name
const convertArrayToObject = (array, key) =>
  array.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item
    }),
    {}
  );