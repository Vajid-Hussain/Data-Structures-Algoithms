// function nextPermutation(nums: number[]): void {
//     let i: number, j: number;

//     for (i = nums.length - 2; i >= 0; i--) {
//         if (nums[i] < nums[i + 1]) break;
//     }

//     if (i < 0) {
//         reverse(0, nums.length - 1, nums);
//     } else {
//         for (j = nums.length - 1; j > i; j--) {
//             if (nums[j] > nums[i]) break;
//         }

//         const temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;

//         reverse(i + 1, nums.length - 1, nums);
//     }
// };

// function reverse(start: number, end: number, arr: number[]) {
//     while (start < end) {
//         const temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }
