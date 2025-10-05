function eraseOverlapIntervals(intervals: number[][]): number {
    var result : number = 0
    let curr: number = 0

    intervals.sort((a, b) => {
        // console.log(a, b)
        return a[1] - b[1]
    })

    console.log(intervals)

    for (let i =1; i < intervals.length; i++){
        if (intervals[curr][1] > intervals[i][0]){
            result++
            continue
        }
        curr = i
    }

    return result
};
