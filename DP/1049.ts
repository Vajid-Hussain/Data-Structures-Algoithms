// function lastStoneWeightII(stones: number[]): number {
//     let sum = stones.reduce((curr, init) => curr + init, 0)
//     let target = Math.floor(sum / 2)
//     let mp = new Map<string, number>()

//     let result = dfs(0, 0, target, stones, mp)

//     return (sum - result) - result
// };

// function dfs(sum: number, pos: number, target: number, stones: number[], mp: Map<string, number> ): number {
//     if (pos == stones.length || sum == target) return sum

//     let key = `${sum},${pos}`

//     if (mp.has(key)) return mp.get(key)
//     let result1: number = 0
//     if (sum + stones[pos] <= target) {
//         result1 = dfs(sum + stones[pos], pos + 1, target, stones, mp)
//     }

//     let result2 = dfs(sum, pos + 1, target, stones, mp)

//     let best = Math.max(result1, result2)

//     mp.set(key, best)
//     return best
// }

function lastStoneWeightII(stones: number[]): number {
    let sum = stones.reduce((sum, curr) => sum + curr, 0)
    let target: number = Math.floor(sum / 2)
    let dp = new Array(target + 1).fill(false)
    dp[0] = true

    for (let stone of stones) {
        for (let j = target; j >= stone; j--) {
            if (dp[j - stone]) dp[j] = true
        }
    }

    for (let j = target; j >= 0; j--) {
        if (dp[j]) {
            return sum - 2 * j
        }
    }

    return 0
}

// function lastStoneWeightII(stones: number[]): number {
//     let sum = stones.reduce((a, b) => a + b, 0);
//     let target = Math.floor(sum / 2);

//     let dp: boolean[] = Array(target + 1).fill(false);
//     dp[0] = true;

//     for (let stone of stones) {
//         for (let j = target; j >= stone; j--) {
//             if (dp[j - stone]) dp[j] = true;
//         }
//     }

//     // find largest j ≤ target that is achievable
//     for (let j = target; j >= 0; j--) {
//         if (dp[j]) {
//             return sum - 2 * j;
//         }
//     }

//     return 0;
// }
