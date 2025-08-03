function canPartitionKSubsets(nums: number[], k: number): boolean {
    let targetSum: number
    let totalSum: number = 0
    let used: boolean[] = new Array(nums.length).fill(false)
    let mp = new Map<string, boolean>()

    nums.sort((val1, val2) => {
        return val2 - val1
    })

    for (let value of nums) {
        totalSum += value
    }

    targetSum = totalSum / k

    if (totalSum % k != 0 || nums[0] > targetSum) return false

    function dfs(k: number, currSum: number, start: number): boolean {
        if (1 == k) return true

        let key = used.join(",")
        if (mp.has(key)) return mp.get(key)

        if (currSum === targetSum) {
            return dfs(k - 1, 0, 0)
        }

        for (let i = start; i < nums.length; i++) {
            if (used[i] || currSum + nums[i] > targetSum) continue

            used[i] = true
            let result = dfs(k, currSum + nums[i], i+1)
            if (result) return true

            used[i] = false
        }

        mp.set(key, false)
        return false
    }


    return dfs(k, 0, 0)
};

