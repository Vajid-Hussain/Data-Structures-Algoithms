function findTargetSumWays(nums: number[], target: number): number {
    let mp = new Map<string, number>()
    return dfs(0, 0, nums, target, mp)
};

function dfs(pos: number, sum: number, nums: number[], target: number, mp: Map<string, number>): number {
    if (sum == target && pos == nums.length) return 1
    if (pos >= nums.length) return 0

    let key = `${pos},${sum}`
    if (mp.has(key)) return mp.get(key)

    let result1 = dfs(pos + 1, sum + nums[pos], nums, target, mp)
    let result2 = dfs(pos + 1, sum - nums[pos], nums, target, mp)

    mp.set(key, result1 + result2)

    return result1 + result2
}
