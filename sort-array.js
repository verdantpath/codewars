function solution(nums){
  if (nums) {
    return nums.sort();
  } else {
    return [];
  }
}

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : []
}