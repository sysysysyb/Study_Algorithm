/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let prevSum = 0;
    const len = nums.length;

    for (let i = 0; i < k; i++) {
        prevSum += nums[i];
    }

    let maxSum = prevSum;

    for (let i = k; i < len; i++) {
        prevSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, prevSum);
    }

    return maxSum / k;
};