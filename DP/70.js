// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//     var memozation = new Array()
//     var recursion = function (step) {
//         if (step == n) {
//             memozation[step] = 1
//             return 1
//         }else if (step > n){
//             return 0
//         }

//         if (!memozation[step + 1]) {
//                 memozation[step + 1] = recursion(step + 1)
//             }

//         if (!memozation[step + 2]) {
//             memozation[step + 2] = recursion(step + 2)
//         }

//         return memozation[step + 1] + memozation[step + 2]
//     }

//     return recursion(0)
// };
