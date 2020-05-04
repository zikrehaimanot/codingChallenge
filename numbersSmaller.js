// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
//
// Return the answer in an array.


var smallerNumbersThanCurrent = function(nums) {
    let ans = Array(nums.length).fill(0);
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++)
            if(i != j && nums[i] > nums[j]){
                ans[i]++
         }
    }return ans
};
