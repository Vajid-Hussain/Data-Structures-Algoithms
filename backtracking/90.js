// function subsetsWithDup(nums: number[]): number[][] {
//     var result: Array<number[]> = new Array()

//     nums.sort((a,b) => (a-b))
//     recursion(0, [], result, nums)
//     return result
// };

// function recursion(start, curr, result, nums) {
//     result.push([...curr])

//     for (let i: number = start; i < nums.length; i++) {
//         if (i > start && nums[i] === nums[i - 1]) {
//             continue
//         }
//         curr.push(nums[i])
//         recursion(i + 1, curr, result, nums)
//         curr.pop()
//     }
// }
