// function minSteps(n: number): number {
//     if (n == 1) return 0
//     return dfs(n, 1, 1, 1)
// };

// function dfs(target: number, curr: number, prev: number, step: number): number {
//     if (target == curr) return step
//     if (curr > target) return Infinity

//     let key = `${curr},${prev}`

//     let result1 = dfs(target, curr * 2, curr, step + 2)

//     let result2 = dfs(target, curr + prev, prev, step + 1)

//     let best = Math.min(result1, result2)

//     return best
// }

function minSteps(n: number): number {
    if (n===1) return 0

    let steps = 0; 
    let factor = 2;

    while(n > 1){
        while (n % factor === 0){
            steps += factor
            n = Math.floor( n / factor)
        }
        factor++
    }

    return steps
};
