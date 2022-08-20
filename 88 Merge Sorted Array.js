// https://leetcode.com/problems/merge-sorted-array/

// const nums1 = [1, 2, 3, 0, 0, 0];
// // const nums1 = [4];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;

const nums1 = [2, 0];
const m = 1;
const nums2 = [1];
const n = 1;

const merge = (nums1, m, nums2, n) => {
  //   if (n === 0) {
  //     console.log(nums1);
  //     return;
  //   }
  //   if (m === 0) {
  //     nums1.forEach((e, i) => {
  //       nums1[i] = nums2[i];
  //     });
  //     console.log(nums1);
  //     return;
  //   }

  //   let j = nums1.length - 1;
  //   let p1 = m - 1;
  //   let p2 = n - 1;
  //   for (let i = 0; i < nums1.length && p2 >= 0; i++) {
  //     console.log("Iteration ", i);
  //     console.table({ p1, p2, j });
  //     if (p1 < 0) {
  //       nums1[j] = nums2[p2];
  //       p2--;
  //     }
  //     if (nums1[p1] >= nums2[p2]) {
  //       nums1[j] = nums1[p1];
  //       p1--;
  //     } else if (nums2[p2] > nums1[p1]) {
  //       nums1[j] = nums2[p2];
  //       p2--;
  //     }
  //     j--;
  //     console.log("next j will be " + j);
  //     console.log(nums1);
  //   }

  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let f = nums1[first];
    let s = nums2[second];
    if (f > s) {
      nums1[i] = f;
      first--;
      i--;
    } else {
      nums1[i] = s;
      second--;
      i--;
    }
  }
};

merge(nums1, m, nums2, n);
