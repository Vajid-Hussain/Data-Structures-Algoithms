// function fib(n: number): number {

//     // let first: number = 0
//     // let second: number = 1
//     // let curr: number

//     // if (n <= 1) {
//     //     return n
//     // }

//     // for (let i = 2; i<=n; i++){
//     //     curr = first+ second
//     //     first = second 
//     //     second = curr
//     // }

//     let memoization: number[] = []
//     return recursion(n, memoization)
// };


// // function recursion(n: number): number{
// //     if (n<=1){
// //         return n
// //     }

// //     return recursion(n-1) + recursion(n-2)
// // }

// function recursion(n: number, memoization: number[]): number{
//     if (memoization[n]){
//         return memoization[n]
//     }

//     if (n<=1){
//         memoization[n] = n
//         return n
//     }

//     memoization[n] = recursion(n-1, memoization) + recursion(n-2, memoization)

//     return memoization[n]
// }

