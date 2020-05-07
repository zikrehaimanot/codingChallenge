// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.




var twoSum = function(nums, target) {
  let result = [];
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        result.push(i,j)
        return result;
      }
    }
  }
};
