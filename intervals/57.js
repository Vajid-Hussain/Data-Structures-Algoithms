/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
     var result = new Array()

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] > newInterval[1]) {
            result.push(newInterval, ...intervals.slice(i))
            return result
        } else if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i])
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
        }
    }

    result.push(newInterval)
    return result
};