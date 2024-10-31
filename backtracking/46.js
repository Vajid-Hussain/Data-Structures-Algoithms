// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function (nums) {
//     let result = new Array()

//     recursion = (permute, curr) => {
//         if (curr.length == 0) {
//             result.push([...permute]);
//             return
//         }

//         for (let i = 0; i < curr.length; i++) {
//             permute.push(curr[i])
//             recursion(permute, curr.toSpliced(i, 1))
//             permute.pop()
//         }
//     }

//     recursion([], nums)
//     return result
// };
