function canPartition(nums: number[]): boolean {
    let target = nums.reduce((currSum, num) => currSum + num, 0) / 2

    if (target % 1 != 0) return false

    let sums = new Set<number>()

    for (let i = 0; i < nums.length; i++) {
        [...sums].forEach((data: number) => {
            sums.add(data + nums[i])
        })
        sums.add(nums[i])
        if (sums.has(target)) return true
    }

    return false
};