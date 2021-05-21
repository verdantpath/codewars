function sc(floor) {
  let output = '';
  if (floor <= 1) {
    return output;
  } else if (floor <= 6) {
    output = "Aa~ ".repeat(floor - 1) + "Pa! Aa!";
  } else {
    output = "Aa~ ".repeat(floor - 1) + "Pa!";
  } 
  return output;
}