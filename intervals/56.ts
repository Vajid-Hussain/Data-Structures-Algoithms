function merge(intervals: number[][]): number[][] {
    if (intervals.length == 1) return intervals

    let result: number[][] = []

    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    
    let curr: number[] = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        if (curr[1] < intervals[i][0]) {
            result.push(curr)
            curr = intervals[i]
        } else if (curr[1] >= intervals[i][0] && curr[1] < intervals[i][1]) {
            curr[1] = intervals[i][1]
        }

        if (i == intervals.length - 1) {
            result.push(curr)
        }
    }

    return result
};
