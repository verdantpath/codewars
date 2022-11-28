function solution(start, finish) {
  var distance = finish - start;
  return (Math.ceil(distance / 3)) + (distance % 2);
}