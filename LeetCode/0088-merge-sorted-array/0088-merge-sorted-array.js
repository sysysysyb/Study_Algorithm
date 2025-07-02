/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p_1 = m - 1;
    let p_2 = n - 1;
    let p_t = m + n - 1;

    while (p_2 >= 0) {
        if (nums1[p_1] >= nums2[p_2]) {
            nums1[p_t] = nums1[p_1--];
            // console.log(`nums1[${p_1}] : `, nums1[p_1]);
        } else {
            nums1[p_t] = nums2[p_2--];
            // console.log(`nums2[${p_2}] : `, nums2[p_2]);
        }
        // console.log(`current result : `, nums1[p_t]);
        p_t--;
    }
};