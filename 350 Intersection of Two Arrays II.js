// https://leetcode.com/problems/intersection-of-two-arrays-ii/

nums1 = [1, 2, 2, 1];
nums2 = [2, 2];

const intersect = (nums1, nums2) => {
  //   const f = new Map();
  //   for (let i = 0; i < nums1.length; i++) {
  //     if (f.get(nums1[i])) {
  //       f.set(nums1[i], [f.get(nums1[i]) + 1,0]);
  //     } else {
  //         f.set(nums1[i],[1,0])
  //     }
  //   }
  // console.log(f);

  const arr = [];
  for (let i = 0; i < nums1.length; i++) {
    if (arr[nums1[i]]) {
      arr[nums1[i]] = [arr[nums1[i]][0] + 1, 0];
    } else {
      arr[nums1[i]] = [1, 0];
    }
  }
  console.log(arr);
  for (let j = 0; j < nums2.length; j++) {
    if (arr[nums2[j]]) {
      arr[nums2[j]] = [arr[nums2[j]][0], arr[nums2[j]][1] + 1];
    }
  }
  console.log(arr);
  const ans = [];
  arr.forEach((e, index) => {
    if (e) {
      for (let k = 0; k < Math.min(...e); k++) {
        ans.push(index);
      }
    }
  });
  console.log(ans);
};

console.log(intersect(nums1, nums2));
