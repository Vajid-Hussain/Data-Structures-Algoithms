// function countArrangement(n: number): number {
//     let nums: Array<number> = []
//     let result: number = 0

//     for (let i: number = 1; i <= n; i++) {
//         nums.push(i)
//     }

//     const recursion = (curr: Array<number>, rem: Array<number>): void => {
//         if (rem.length == 0) {
//             result++
//             return
//         }

//         for (let i = 0; i < rem.length; i++) {
//             curr.push(rem[i])
//             if (curr[curr.length - 1] % curr.length != 0 && curr.length % curr[curr.length - 1] != 0) {
//                 curr.pop()
//                 continue
//             }
//             recursion(curr, rem.toSpliced(i, 1))
//             curr.pop()
//         }
//     }

//     recursion([], nums)

//     return result
// };
