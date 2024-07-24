/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        // make num1 the smaller array
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;

    return binarySearchMedian(nums1, nums2, m, n);
};

function binarySearchMedian(nums1, nums2, m, n) {
    
}
